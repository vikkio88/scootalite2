const { json } = require('micro');
const { Show } = require('../../libs/valueObjects');
const { parser } = require('../../libs');
const { db } = require('../../libs');
const { showsModel } = require('../../models/podcasts');
const { response, unprocessable } = require('../../libs/formatters');

const parse = async (req, res) => {
    const body = await json(req);
    try {
        const showRepo = showsModel(db());
        const existingShow = await showRepo.getOneByFeedUrl(body.feed);
        if (existingShow && Show.isUpdated(existingShow)) {
            const show = await showRepo.getOneById(existingShow.id);
            showRepo.destroy();
            return response(res, show);
        }
        const feed = await parser(body.feed);
        const show = await showRepo.upsertFromFeed(feed, existingShow);
        showRepo.destroy();
        return response(res, show);
    } catch (error) {
        console.log(error);
        return unprocessable(res, error);
    }
};



module.exports = {
    parse
};
