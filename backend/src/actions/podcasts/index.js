const { db } = require('../../libs');
const { shows } = require('../../models/podcasts');
const { response, unprocessable, notFound } = require('../../libs/formatters');

const getOneShow = async (req, res) => {
    const showRepo = shows(db());
    const slug = await req.params.slug;
    try {
        const show = await showRepo.getOneBySlug(slug);
        showRepo.destroy();

        if (!show) {
            return notFound(res,'Show not found');
        }

        return response(res, show, { count: show.podcasts.length });
    } catch (error) {
        console.log(error);
        return unprocessable(res, error);
    }
};



module.exports = {
    getOneShow
};
