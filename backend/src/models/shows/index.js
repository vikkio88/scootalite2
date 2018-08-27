const {service} = require('../');
const show = {
    getBySlug: slug => service.get(`/shows/${slug}`),
    getAll: () => service.get(`/shows`),
};

module.exports = {
    show
};
