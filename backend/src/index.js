const {send} = require('micro');

const {router, get} = require('microrouter');

const {pingGet} = require('./actions/ping');

const {showsGet, showGetBySlug} = require('./actions/shows');

const notfound = (req, res) => send(res, 404, 'Not found route');

module.exports = router(
    get('/ping', pingGet),
    get('/shows', showsGet),
    get('/shows/:slug', showGetBySlug),
    get('/*', notfound)
);
