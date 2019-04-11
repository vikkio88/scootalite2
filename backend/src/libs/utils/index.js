const qs = require('querystring');
const url = require('url');

const slugger = (title, salter = true) => {
    let salt = '';
    if (salter) {
        salt = `-${Math.random().toString(36).substring(2)}`;
    }
    title = title.replace(/[^\w\s]/g, '').replace(/\s/g, '-').toLowerCase();
    return `${title}${salt}`;
}

const stringCleaner = {
    rmHtml(string) {
        return string.replace(/<(?:.|\n)*?>/gm, '').replace(/&\w+;/gm, ' ');
    },
    booleanize(string, fallback = false) {
        if (!string) {
            return fallback;
        }

        return string.toLowerCase() === 'yes' ? true : false;
    }
}

const getQueryParams = (req, only = null) => {
    const parsedUrl = url.parse(req.url);
    const params = parsedUrl.search ? qs.parse(parsedUrl.search.substr(1)) : {};

    if (!only) { // this as a placeholder to filter params
        return params;
    }

    return params;
};


module.exports = {
    slugger,
    stringCleaner,
    getQueryParams
}