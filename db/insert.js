const db = require('./db');
const { repoFactory } = require('./entityManager');

// insert
const show = {
    "title": "Tutti Convocati",
    "slug": "tutti-convocati",
    "description": "Con Carlo Genta e Pierluigi Pardo, lo sport appassiona e diverte. Le voci e i suoni del calcio. Una lettura ironica e coinvolgente degli avvenimenti dell'attualità sportiva, senza fanatismi e senza tecnicismi. Commenti, interviste e soprattutto il dibattito con gli ascoltatori, che sono tutti convocati. E' come andare al bar sport: fra una risata, un commento, lo sport con Genta e Pardo è per tutti.E alla domenica, dopo le partite Tutti Convocati Weekend, condotto da Giovanni Capuano, con la partecipazione dell'immancabile Pierluigi Pardo per commentare insieme agli ascoltatori un rigore mancato, un gol rubato e un risultato con il cuore di chi la passione la vive, la racconta e ci gioca. Con imitazioni, tic, smorfie, scherzi da spogliatoio e ironia irriverente. L'unico programma in diretta sul calcio a partite appena finite, in cui da casa o dallo stadio gli ascoltatori possono dire la loro perché sono sempre convocati.",
    "link": "http://www.radio24.ilsole24ore.com/programma/tutti-convocati",
    "feedUrl": "http://www.radio24.ilsole24ore.com/podcast/tutti-convocati.xml",
    "copyright": "2008 Radio 24 Il Sole 24 ore",
    "image": "http://www.radio24.ilsole24ore.com//assets/img/Radio24/_Immagini/2018/01/tutticonv-itunes.jpg",
    "author": "Radio 24",
    "email": "tutticonvocati@radio24.it",
    "language": "it-it",
    "explicit": false
};

const podcasts = require('./test.json').payload;
const factory = repoFactory(db());
const showRepo = factory.create('shows'); 
const podRepo = factory.create('podcasts'); 
(async () => {
    const showId = await showRepo.create(show);
    console.log(`created show with id ${showId}`);
    const podcastIds = await podRepo.createMany(podcasts.map(p => {
        p.showId = parseInt(showId);
        return p;
    }));
    console.log('added podcasts', podcastIds);

    factory.destroy();

})();