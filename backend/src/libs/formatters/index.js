const { send } = require('micro');
const response = (res, payload, meta = {}) => {
    return send(res, 200, {
        meta,
        payload
    });
}
module.exports = {
    response
}