const { repoFactory } = require('./entityManager');
const dbInstance = require('./db')();

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

(async () => {
    const entityManager = repoFactory(dbInstance);
    const showsRepo = entityManager.create('shows');
    try {
        /*
        const found = await showsRepo.find(1);
        console.log(found);

        const update = await showsRepo.update(1, { updated_at: new Date() });
        console.log(update);

        */
        const found2 = await shows(dbInstance).getOne(1);
        delete found2.podcasts;
        //console.log(found2);

        found2.title = "Banana";

        const ups = await dbInstance.rawUpsert('shows', found2, ['slug'], ['slug']);
        console.log('ups')
    } catch (error) {
        console.error(error);
    }
    dbInstance.destroy();
})();