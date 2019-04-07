const { repoFactory } = require('../entityManager');

const shows = db => {
    const entityManager = repoFactory(db);
    const repo = entityManager.create('shows');
    const podcasts = entityManager.create('podcasts');
    return {
        async getOneBySlug(slug) {
            const show = await repo.findBy({ field: 'slug', value: slug});

            if (!show) {
                return null;
            }
            show.podcasts = await podcasts.get({ filters: { showId: show.id } });
            return show;
        },
        async getOneById(id) {
            const show = await repo.find(id);

            if (!show) {
                return null;
            }
            show.podcasts = await podcasts.get({ filters: { showId: id } });
            return show;
        },
        destroy() {
            db.destroy();
        }
    }
};


module.exports = {
    shows
}

