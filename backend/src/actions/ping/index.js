const {
    send
} = require('micro');

const pingGet = (req, res) => send(res, 200, {
    status: 'up'
});

module.exports = {
    pingGet
};