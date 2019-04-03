const Show = require('./valueObjects').Show;
const feedParser = require('./feedParser').feedParser;
const parser = async url => {
    try {
        console.log(url);
        const showPayload = await feedParser(url);
        const show = Show.fromFeed(showPayload);
        return show.toJs();
    } catch (error) {
        console.error("Error", error);
        throw 'Wrong Url';
    }
}

module.exports = {
    parser
};