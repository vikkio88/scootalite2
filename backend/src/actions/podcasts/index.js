const { db } = require('../../libs');
const { shows } = require('../../models/podcasts');
const { response, unprocessable } = require('../../libs/formatters');

const getOneShow = async (req, res) => {
    const showRepo = shows(db());
    const showId = await req.params.id;
    try {
        const show = await showRepo.getOne(showId);
        showRepo.destroy();
        return response(res, show, { count: show.podcasts.length });
    } catch (error) {
        console.error(error);
        return unprocessable(res, error);
    }
};



module.exports = {
    getOneShow
};
