const { repoFactory } = require('../entityManager');
const { Show, Podcast } = require('../../libs/valueObjects');

const shows = db => {
    const entityManager = repoFactory(db);
    const repo = entityManager.create('shows');
    const podcastsRepo = entityManager.create('podcasts');
    return {
        async getOneBySlug(slug) {
            const show = await repo.findBy({ field: 'slug', value: slug });

            if (!show) {
                return null;
            }
            show.podcasts = await podcastsRepo.get({ filters: { showId: show.id } });
            return show;
        },
        async getOneByFeedUrl(feedUrl) {
            return await repo.findBy({ field: 'feedUrl', value: feedUrl });
        },
        async getOneById(id) {
            const show = await repo.find(id);

            if (!show) {
                return null;
            }
            show.podcasts = await podcastsRepo.get({ filters: { showId: id } });
            return show;
        },
        async upsertFromFeed(show, existingShow) {
            let showId = null;
            if (existingShow) {
                await this.update(existingShow.id, show);
                await podcasts(db, podcastsRepo).upsertFromFeed(show.podcasts, existingShow.id)
                showId = parseInt(existingShow.id);
            } else {
                showId = await this.insert(show);
            }

            return this.getOneById(showId);
        },
        async update(id, show) {
            return await repo.update(id, Show.prepareForUpdate(show));
        },
        async insert(show) {
            const showId = await repo.create(Show.prepareForInsert(show));
            await podcastsRepo.createMany(Podcast.prepareForUpsert(show.podcasts, parseInt(showId)));
            return showId;
        },
        destroy() {
            db.destroy();
        }
    }
};

const podcasts = (db, repo = null) => {
    if (!repo) {
        repo = (repoFactory(db)).create('podcasts');
    }

    return {
        async upsertFromFeed(newPodcasts, showId) {
            newPodcasts = Podcast.prepareForUpsert(newPodcasts, showId);
            const podcasts = [];
            for (index in newPodcasts) {
                const savedP = await repo.db.rawMySqlUpser('podcasts', newPodcasts[index], ['slug']);
                podcasts.push(savedP);
            }

            return podcasts;
        }
    }
}


module.exports = {
    shows
}

