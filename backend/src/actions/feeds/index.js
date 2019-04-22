const { json } = require('micro');
const { Show } = require('../../libs/valueObjects');
const { parser } = require('../../libs');
const { stringCleaner } = require('../../libs/utils');
const { db } = require('../../libs');
const { showsModel } = require('../../models/podcasts');
const { response, unprocessable } = require('../../libs/formatters');

const parse = async (req, res) => {
    const body = await json(req);
    try {
        const feed = stringCleaner.cleanUrl(body.feed);
        
        const showRepo = showsModel(db());
        const existingShow = await showRepo.getOneByFeedUrl(feed);
        if (existingShow && Show.isUpdated(existingShow)) {
            const show = await showRepo.getOneById(existingShow.id);
            showRepo.destroy();
            return response(res, show);
        }
        const parsedFeed = await parser(feed);
        const show = await showRepo.upsertFromFeed(parsedFeed, existingShow);
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
