const Show = require('./valueObjects').Show;
const feedParser = require('./feedParser').feedParser;
const db = require('./db');
const parser = async url => {
    try {
        const showPayload = await feedParser(url);
        const show = Show.fromFeed(showPayload);
        return show.toJs();
    } catch (error) {
        console.error("Error", error);
        throw 'Wrong Url';
    }
}

module.exports = {
    parser,
    db
};