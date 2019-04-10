const knex = require('./db')().driver;

/*
    "title": "Tutti Convocati",
    "slug": "tutti-convocati",
    "description": "Con Carlo Genta e Pierluigi Pardo, lo sport appassiona e diverte. Le voci e i suoni del calcio. Una lettura ironica e coinvolgente degli avvenimenti dell'attualità sportiva, senza fanatismi e senza tecnicismi. Commenti, interviste e soprattutto il dibattito con gli ascoltatori, che sono tutti convocati. E' come andare al bar sport: fra una risata, un commento, lo sport con Genta e Pardo è per tutti.E alla domenica, dopo le partite Tutti Convocati Weekend, condotto da Giovanni Capuano, con la partecipazione dell'immancabile Pierluigi Pardo per commentare insieme agli ascoltatori un rigore mancato, un gol rubato e un risultato con il cuore di chi la passione la vive, la racconta e ci gioca. Con imitazioni, tic, smorfie, scherzi da spogliatoio e ironia irriverente. L'unico programma in diretta sul calcio a partite appena finite, in cui da casa o dallo stadio gli ascoltatori possono dire la loro perché sono sempre convocati.",
    "link": "http://www.radio24.ilsole24ore.com/programma/tutti-convocati",
    "feedUrl": "http://www.radio24.ilsole24ore.com/podcast/tutti-convocati.xml",
    "copyright": "2008 Radio 24 Il Sole 24 ore",
    "image": "http://www.radio24.ilsole24ore.com//assets/img/Radio24/_Immagini/2018/01/tutticonv-itunes.jpg",
    "author": "Radio 24",
    "email": "tutticonvocati@radio24.it",
    "laguage": "it-it",
    "explicit": false
*/
const shows = knex.schema.createTable('shows', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('slug').notNullable();
    table.text('description');
    table.string('link');
    table.string('feedUrl').notNullable();
    table.string('copyright');
    table.string('image');
    table.string('author');
    table.string('email');
    table.string('language', 10);
    table.boolean('explicit').defaultTo(false);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.index('slug');
    table.unique('slug')
    table.unique('feedUrl')
});

/*
{
    "title": "Tutti Convocati del giorno 04/04/2019: Baci e abbracci, Icardi è tornato",
    "slug": "tutti-convocati-del-giorno-04042019-baci-e-abbracci-icardi--tornato-2d9c6fc2l0j",
    "pubDate": "Thu, 4 Apr 2019 15:02:41 +0200",
    "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190404-tutti-convocati-s.mp3",
    "content": "Nella notte di Marassi l'Inter ritrova la vittoria, un discreto vantaggio sulle quinte ...",
    "contentSnippet": "Nella notte di Marassi l'Inter ritrova la vittoria, un discreto vantaggio sulle quinte ...",
    "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190404-tutti-convocati-s.mp3",
    "isoDate": "2019-04-04T13:02:41.000Z"
 */

const podcasts = knex.schema.createTable('podcasts', function (table) {
    table.increments();
    table.text('title').notNullable();
    table.string('slug').notNullable();
    table.string('pubDate');
    table.string('fileUrl').notNullable();
    table.text('content');
    table.text('contentSnippet');
    table.string('guid').notNullable();
    table.date('isoDate');

    table.integer('showId').unsigned();
    table.foreign('showId').references('shows.id');


    table.index('slug');
    table.unique('slug')
    table.unique(['guid', 'showId']);
});



const dropPodcast = knex.schema.dropTableIfExists('podcasts');
const dropShow = knex.schema.dropTableIfExists('shows');

(async () => {
    try {
        await dropPodcast;
        await dropShow;
        console.log('tables dropped');

        await shows;
        await podcasts;
        console.log('tables created');
    } catch (error) {
        console.error('error', error);
    }

    knex.destroy();
})();