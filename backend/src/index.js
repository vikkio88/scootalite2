require('dotenv').config();
const cors = require('micro-cors')();
const { send } = require('micro');
const { router, get, post } = require('microrouter');

const { users, feeds, misc } = require('./actions')
const { authguard, getUser } = require('./middlewares');


module.exports = cors(router(
    get('/ping', misc.pong),

    post('/login', users.login),
    
    post('/feeds/parse', feeds.parse),

    get('/ciao', getUser(users.stuff)),

    get('/user', authguard(users.stuff)),
    
    
    get('/', misc.fallback),

    get('/*', (req, res) => send(res, 404)),
    post('/*', (req, res) => send(res, 404)),
));