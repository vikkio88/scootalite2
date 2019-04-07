const { repoFactory } = require('../entityManager');

const shows = db => {
    const entityManager = repoFactory(db);
    const repo = entityManager.create('shows');
    const podcasts = entityManager.create('podcasts');
    return {
        async getOne(id) {
            const show = await repo.find(id);

            if (!show) {
                return null;
            }
            show.podcasts = await podcasts.get({ filters: { showId: id } });
            return show;
        }
    }
};


module.export = {
    shows
}

