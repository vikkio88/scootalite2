if (process.env.NODE_ENV === 'development') require('dotenv').config();
const cors = require('micro-cors')();
const { send } = require('micro');
const { router, get, post } = require('microrouter');

const { users, feeds, podcasts, misc } = require('./actions')
const { authguard, getUser } = require('./middlewares');


module.exports = cors(router(
    get('/ping', misc.pong),

    post('/login', users.login),
    get('/user', authguard(users.stuff)),
    get('/getuser', getUser(users.stuff)),

    // Feeds
    post('/feeds/parse', feeds.parse),

    // Podcasts
    get('/shows/:id', podcasts.getOneShow),
    


    get('/', misc.fallback),

    get('/*', (req, res) => send(res, 404)),
    post('/*', (req, res) => send(res, 404)),
));