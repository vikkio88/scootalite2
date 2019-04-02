const Parser = require('rss-parser');
const parser = new Parser()


const feedParser = async url => {
    const feed = await parser.parseURL(url);
    return feed;
};

module.exports = {
    feedParser
};