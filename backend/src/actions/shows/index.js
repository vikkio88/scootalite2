const {send} = require('micro');

const {show} = require('../../models/shows');

const showsGet = async (req, res) => {
    const {data} = await show.getAll();
    return send(res, 200, data.payload);
};
const showGetBySlug = async (req, res) => {
    const {slug} = req.params;
    const {data} = await show.getBySlug(slug);
    return send(res, 200, data.payload);
};

module.exports = {
    showsGet,
    showGetBySlug
};
