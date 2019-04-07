const { json } = require('micro');
const { parser } = require('../../libs');
const { db } = require('../../libs');
const { shows } = require('../../models/podcasts');
const { response, unprocessable } = require('../../libs/formatters');

const parse = async (req, res) => {
    const body = await json(req);
    try {
        const feed = await parser(body.feed);
        const showRepo = shows(db());
        const showId = showRepo.upsertFromFeed(feed);
        const show = showRepo.getOneById(showId);
        showRepo.destroy();
        return response(res, show, { count: show.podcasts.length });
    } catch (error) {
        console.log(error);
        return unprocessable(res, error);
    }
};



module.exports = {
    parse
};
