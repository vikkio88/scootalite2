const { stringCleaner, slugger } = require('../utils');

class Show {
    constructor(title, slug, description, link, feedUrl, copyright, image, author, email, language, explicit, podcasts) {
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.link = link;
        this.feedUrl = feedUrl;
        this.copyright = copyright;
        this.image = image;
        this.author = author;
        this.email = email;
        this.language = language;
        this.explicit = explicit;

        this.podcasts = podcasts;
    }

    static fromFeed(data) {
        let { title, description, link, feedUrl, copyright, language, itunes, items = [] } = data;

        const slug = slugger(title, false);
        description = stringCleaner.rmHtml(description);
        const image = itunes.image;
        const author = itunes.author || itunes.owner.name;
        const email = itunes.owner.email;
        const explicit = stringCleaner.booleanize(itunes.explicit);

        let podcasts = items;

        if (items && items.length) {
            podcasts = items.map(item => {
                return (Podcast.fromFeed(item)).toJs();
            })
        }

        return new Show(title, slug, description, link, feedUrl, copyright, image, author, email, language, explicit, podcasts);
    }

    isUpdated(persistedShow) {
        if (this.podcasts.length > 0) {
            const last = this.podcasts[0];
            const persistedLast = persistedShow.podcasts.length > 0 ? persistedShow.podcasts[0] : null;

            if (!persistedLast) {
                return true;
            }


            return new Date(last.isoDate) > new Date(persistedLast.isoDate);
        }

        return false;
    }

    toJs() {
        return {
            title: this.title,
            slug: this.slug,
            description: this.description,
            link: this.link,
            feedUrl: this.feedUrl,
            copyright: this.copyright,
            image: this.image,
            author: this.author,
            email: this.email,
            language: this.language,
            explicit: this.explicit,
            podcasts: this.podcasts
        }
    }

    static prepareFromJs(show) {
        return {
            title: show.title,
            slug: show.slug,
            description: show.description,
            link: show.link,
            feedUrl: show.feedUrl,
            copyright: show.copyright,
            image: show.image,
            author: show.author,
            email: show.email,
            language: show.language,
            explicit: show.explicit,
        };
    }

    static prepareForInsert(show) {
        const prepared = Show.prepareFromJs(show);
        prepared.created_at = new Date();
        prepared.updated_at = new Date();
        return prepared;
    }

    static prepareForUpdate(show) {
        const prepared = Show.prepareFromJs(show);
        prepared.updated_at = new Date();
        return prepared;
    }
}

class Podcast {

    constructor(title, slug, pubDate, fileUrl, content, contentSnippet, guid, isoDate) {
        this.title = title;
        this.slug = slug;
        this.pubDate = pubDate;
        this.fileUrl = fileUrl;
        this.content = content;
        this.contentSnippet = contentSnippet;
        this.guid = guid;
        this.isoDate = isoDate;
    }

    static fromFeed(data) {
        let { title, pubDate, enclosure, content, contentSnippet, guid, isoDate } = data;
        const slug = slugger(title);
        const fileUrl = enclosure.url;
        content = stringCleaner.rmHtml(content);
        contentSnippet = stringCleaner.rmHtml(contentSnippet);

        return new Podcast(title, slug, pubDate, fileUrl, content, contentSnippet, guid, isoDate);
    }

    toJs() {
        return {
            title: this.title,
            slug: this.slug,
            pubDate: this.pubDate,
            fileUrl: this.fileUrl,
            content: this.content,
            contentSnippet: this.contentSnippet,
            guid: this.guid,
            isoDate: this.isoDate
        }
    }

    static prepareForUpsert(newPodcasts, showId) {
        return newPodcasts.map(p => {
            p.showId = showId;
            return p;
        })
    }
}

module.exports = {
    Show,
    Podcast
}