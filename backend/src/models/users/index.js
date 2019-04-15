const { compareCrypt } = require('../../libs/utils')
const { repoFactory } = require('../entityManager');

const users = db => {
    const entityManager = repoFactory(db);
    const repo = entityManager.create('users');

    return {
        async check(username, password) {
            const resultSet = await repo.select().where({ username });
            if (!resultSet || resultSet.length < 1) {
                return false;
            }

            return await compareCrypt(password, resultSet[0].password);
        },
        destroy() {
            db.destroy();
        }
    };

};

module.exports = {
    userModel: users
}

