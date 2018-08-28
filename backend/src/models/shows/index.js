const {service, payloadExtract} = require('../');
const showService = {
    getBySlug: slug => service.get(`/shows/${slug}`).then(payloadExtract),
    getAll: () => service.get(`/shows`).then(payloadExtract),
};

module.exports = {
    showService
};
