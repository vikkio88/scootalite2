const { send, json } = require('micro');
const { auth } = require('../../libs/auth');
const { response, unauthorized } = require('../../libs/formatters');

const login = async (req, res) => {
    const body = await json(req);
    if (auth.check(body)) {
        return unauthorized(res, 'Invalid username/password');
    }

    return response(res, { token: auth.encode({ username: body.username }) });
};

const stuff = (req, res) => {
    return response(res, { user: req.user });
};


module.exports = {
    login,
    stuff
};
