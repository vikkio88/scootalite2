const { db } = require('../../libs');
const { getQueryParams } = require('../../libs/utils');
const { showsModel } = require('../../models/podcasts');
const { response, unprocessable, notFound } = require('../../libs/formatters');

const getOneShow = async (req, res) => {
    const showRepo = showsModel(db());
    const slug = await req.params.slug;
    let show = null;
    try {
        show = await showRepo.getOneBySlug(slug);
    } catch (error) {
        console.log(error);
        return unprocessable(res, error);
    } finally {
        showRepo.destroy();
    }

    if (!show) {
        return notFound(res, 'Show not found');
    }

    return response(res, show, { count: show.podcasts.length });
}

const getShows = async (req, res) => {
    const showRepo = showsModel(db());
    const params = getQueryParams(req, ['title', 'explicit', 'limit', 'offset']);
    let shows = [];
    try {
        shows = await showRepo.getAll({...params});
    } catch (error) {
        console.log(error);
        return unprocessable(res, error);
    } finally {
        showRepo.destroy();
    }

    return response(res, shows, { count: shows.length });
};

module.exports = {
    getShows,
    getOneShow
};
