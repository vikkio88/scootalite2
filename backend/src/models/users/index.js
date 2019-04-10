const { repoFactory } = require('../entityManager');

const users = db => {
    const entityManager = repoFactory(db);
    const repo = entityManager.create('users');

    return {
        async check(email, password) {
            repo.get({ filters: { email, password } });
        },
    };

};

module.exports = {
    users
}

