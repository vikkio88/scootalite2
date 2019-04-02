const cors = require('micro-cors')();
const { send } = require('micro');
const { router, get, post } = require('microrouter');

const { users } = require('./actions')
const { authguard, getUser } = require('./middlewares');


module.exports = cors(router(
    get('/ping', () => ({ pong: true })),

    post('/login', users.login),

    get('/ciao', getUser(users.stuff)),

    get('/user', authguard(users.stuff)),



    get('/*', (req, res) => send(res, 404)),
    post('/*', (req, res) => send(res, 404)),
));