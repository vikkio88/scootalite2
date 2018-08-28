const {CACHE_TIME} = require('../../config');
const {send} = require('micro');
const cache = require('micro-cacheable');
const {showService} = require('../../models/shows');

const showsGet = async (req, res) => {
    const show = await showService.getAll();
    return send(res, 200, show);
};
const showGetBySlug = async (req, res) => {
    const show = await showService.getBySlug(req.params.slug);
    return send(res, 200, show);
};

module.exports = {
    showsGet: cache(CACHE_TIME, showsGet),
    showGetBySlug
};
