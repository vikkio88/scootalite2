const jwt = require('jwt-simple');
const dayjs = require('dayjs');
const { db } = require('../../libs');
const { userModel } = require('../../models/users');

const SECRET = 'ciao';
const TTL = 3600;
const auth = {
    async check({ username, password }) {
        const userRepo = userModel(db());
        const result = await userRepo.check(username, password);
        userRepo.destroy();

        return result;
    },
    encode(user) {
        return jwt.encode({ user, expires: dayjs().unix() + TTL }, SECRET);
    },
    decode(token) {
        token = token.replace('Bearer ', '');
        return jwt.decode(token, SECRET);
    }

}
module.exports = {
    auth
}