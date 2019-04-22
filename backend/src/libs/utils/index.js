const qs = require('qs');
const url = require('url');
const bcrypt = require('bcrypt');

const queryDecoder = (str, decoder, charset) => {
    // https://github.com/ljharb/qs/issues/91#issuecomment-437926409
    const strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }

    if (/^(\d+|\d*\.\d+)$/.test(str)) {
        return parseFloat(str)
    }

    const keywords = {
        true: true,
        false: false,
        null: null,
        undefined,
    }
    if (str in keywords) {
        return keywords[str]
    }

    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
const filterObjectKeys = (object, allowed = []) => {
    return Object.keys(object)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = object[key];
            return obj;
        },
            {}
        );
}

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
    },
    cleanUrl(url) {
        return url.replace(/#.*$/, '').replace(/\?.*$/, '');
    }
}

const getQueryParams = (req, only = null) => {
    const parsedUrl = url.parse(req.url);
    const params = parsedUrl.search ? qs.parse(parsedUrl.search.substr(1), { decoder: queryDecoder }) : {};
    return !only ? params : filterObjectKeys(params, only);
};

const encrypt = async password => {
    return await bcrypt.hash(password, 10);
};

const compareCrypt = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};


module.exports = {
    slugger,
    stringCleaner,
    getQueryParams,
    encrypt,
    compareCrypt
}