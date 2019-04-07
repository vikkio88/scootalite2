const { repoFactory } = require('../entityManager');
const db = require('../../libs/db');

const entityManager = repoFactory(db());
const showsRepo = entityManager.create('shows');
const podcastsRepo = entityManager.create('podcasts');

const shows = (repo = showsRepo, podcasts = podcastsRepo) => {
    return {
        async getOne(id) {
            const show = repo.find(id);

            if (!show) {
                return null;
            }
            const podcasts = podcastsRepo.get(filters({ showId: id }))
            show.podcasts = podcasts
            return show;

        }
    }
}

