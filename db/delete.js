const { repoFactory } = require('./entityManager');
const dbInstance = require('./db')();

const entityManager = repoFactory(dbInstance);
const showsRepo = entityManager.create('shows');
const podcastsRepo = entityManager.create('podcasts');

const shows = (repo = showsRepo, podcasts = podcastsRepo) => {
    return {
        async getOne(id) {
            const show = repo.find(id);

            if (!show) {
                return null;
            }
            show.podcasts = podcasts.get({ filters: { showId: id } });
            return show;
        }
    }
}

(async () => {
    const entityManager = repoFactory(dbInstance);
    const showsRepo = entityManager.create('shows');
    try {
        const found = await showsRepo.find(1);
        console.log(found);

        const update = await showsRepo.update(1, { updated_at: new Date() });
        console.log(update);

        const found2 = await shows().getOne(1);
        console.log(found2);
    } catch (error) {
        console.error(error);
    }
    entityManager.destroy();
})();