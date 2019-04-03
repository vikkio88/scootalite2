const { send, json } = require('micro');
const { parser } = require('../../libs');
const { response, unprocessable } = require('../../libs/formatters');

const parse = async (req, res) => {
    const body = await json(req);
    try {
        const feed = await parser(body.feed);
        return response(res, feed, { count: feed.podcasts.length });
    } catch (error) {
        return unprocessable(res, error);
    }
};



module.exports = {
    parse
};
