const jwt = require('jwt-simple');
const dayjs = require('dayjs');
const { db } = require('../../libs');
const { userModel } = require('../../models/users');

const { JWT_SECRET, JWT_TTL } = process.env;

const auth = {
    async check({ username, password }) {
        const userRepo = userModel(db());
        const result = await userRepo.check(username, password);
        userRepo.destroy();

        return result;
    },
    encode(user) {
        return jwt.encode({ user, expires: dayjs().unix() + JWT_TTL }, JWT_SECRET);
    },
    decode(token) {
        token = token.replace('Bearer ', '');
        return jwt.decode(token, JWT_SECRET);
    }

}
module.exports = {
    auth
}