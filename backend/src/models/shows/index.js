const {service, payloadExtract} = require('../');
const showService = {
    getByFeedUrl: feedUrl =>{},
    getBySlug: slug => {},
    filter: (filters, page = 1, limit = 10) => {},
};

module.exports = {
    showService
};
