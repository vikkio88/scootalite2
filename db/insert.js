const db = require('./db')();

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

const podcasts = [
    {
        "title": "Tutti Convocati del giorno 05/04/2019: Le future panchine di Milan e Inter",
        "slug": "tutti-convocati-del-giorno-05042019-le-future-panchine-di-milan-e-inter-ht6wm4tzj7q",
        "pubDate": "Fri, 5 Apr 2019 15:05:12 +0200",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190405-tutti-convocati-s.mp3",
        "content": "Ieri si è chiuso il turno infrasettimanale si Serie A si è chiuso con la scintillante vittoria dell'Atalanta ...",
        "contentSnippet": "Ieri si è chiuso il turno infrasettimanale si Serie A si è chiuso con la scintillante vittoria dell'Atalanta ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190405-tutti-convocati-s.mp3",
        "isoDate": "2019-04-05T13:05:12.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 04/04/2019: Baci e abbracci, Icardi è tornato",
        "slug": "tutti-convocati-del-giorno-04042019-baci-e-abbracci-icardi--tornato-krpg3yzpx",
        "pubDate": "Thu, 4 Apr 2019 15:02:41 +0200",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190404-tutti-convocati-s.mp3",
        "content": "Nella notte di Marassi l'Inter ritrova la vittoria, un discreto vantaggio sulle quinte ...",
        "contentSnippet": "Nella notte di Marassi l'Inter ritrova la vittoria, un discreto vantaggio sulle quinte ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190404-tutti-convocati-s.mp3",
        "isoDate": "2019-04-04T13:02:41.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 03/04/2019: Kean come Koulibaly, ci risiamo ...",
        "slug": "tutti-convocati-del-giorno-03042019-kean-come-koulibaly-ci-risiamo--fums6pfdg5o",
        "pubDate": "Wed, 3 Apr 2019 15:04:37 +0200",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190403-tutti-convocati-s.mp3",
        "content": "Ci risiamo, sono passati solo tre mesi dal caso di Koulibaly in Inter-Napoli e i buu razzisti di San Siro ...",
        "contentSnippet": "Ci risiamo, sono passati solo tre mesi dal caso di Koulibaly in Inter-Napoli e i buu razzisti di San Siro ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190403-tutti-convocati-s.mp3",
        "isoDate": "2019-04-03T13:04:37.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 02/04/2019: Retromarcia Spalletti, torna Icardi",
        "slug": "tutti-convocati-del-giorno-02042019-retromarcia-spalletti-torna-icardi-pra3ngfciz",
        "pubDate": "Tue, 2 Apr 2019 15:03:29 +0200",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190402-tutti-convocati-s.mp3",
        "content": "L'ultimo capitolo della telenovela Icardi si è consumato oggi con la conferenza stampa di Spalletti  ...",
        "contentSnippet": "L'ultimo capitolo della telenovela Icardi si è consumato oggi con la conferenza stampa di Spalletti  ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190402-tutti-convocati-s.mp3",
        "isoDate": "2019-04-02T13:03:29.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 01/04/2019: Spalletti fa a fette Icardi",
        "slug": "tutti-convocati-del-giorno-01042019-spalletti-fa-a-fette-icardi-ixhxlz3n3kl",
        "pubDate": "Mon, 1 Apr 2019 15:03:18 +0200",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190401-tutti-convocati-s.mp3",
        "content": "È stato un super fine settimana di motori che però hanno regalato pochi sorrisi ai team italiani ...",
        "contentSnippet": "È stato un super fine settimana di motori che però hanno regalato pochi sorrisi ai team italiani ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190401-tutti-convocati-s.mp3",
        "isoDate": "2019-04-01T13:03:18.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 31/03/2019: Crisi giallo-rosso-nera",
        "slug": "tutti-convocati-del-giorno-31032019-crisi-giallorossonera-4tfz96zutde",
        "pubDate": "Sun, 31 Mar 2019 19:02:31 +0200",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190331-tutti-convocati-s.mp3",
        "content": "A Tutti convocati partiamo con il post partita di Roma-Napoli: aspettiamo le voci degli allenatori ...",
        "contentSnippet": "A Tutti convocati partiamo con il post partita di Roma-Napoli: aspettiamo le voci degli allenatori ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190331-tutti-convocati-s.mp3",
        "isoDate": "2019-03-31T17:02:31.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 29/03/2019: L'avvertimento di Scaroni",
        "slug": "tutti-convocati-del-giorno-29032019-lavvertimento-di-scaroni-grvxi27n1hj",
        "pubDate": "Fri, 29 Mar 2019 15:02:16 +0100",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190329-tutti-convocati-s.mp3",
        "content": "Sul dibattito che si è aperto in questi giorni su una possibile demolizione dello stadio Meazza ...",
        "contentSnippet": "Sul dibattito che si è aperto in questi giorni su una possibile demolizione dello stadio Meazza ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190329-tutti-convocati-s.mp3",
        "isoDate": "2019-03-29T14:02:16.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 28/03/2019: Costruiamo un nuovo Meazza",
        "slug": "tutti-convocati-del-giorno-28032019-costruiamo-un-nuovo-meazza-3dq9l5pq1wu",
        "pubDate": "Thu, 28 Mar 2019 15:03:55 +0100",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190328-tutti-convocati-s.mp3",
        "content": "Il dibattito intorno alla possibile demolizione dello stadio Meazza ...",
        "contentSnippet": "Il dibattito intorno alla possibile demolizione dello stadio Meazza ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190328-tutti-convocati-s.mp3",
        "isoDate": "2019-03-28T14:03:55.000Z"
    },
    {
        "title": "Tutti Convocati del giorno 27/03/2019: Una Milano senza San Siro?",
        "slug": "tutti-convocati-del-giorno-27032019-una-milano-senza-san-siro-royiaege6k",
        "pubDate": "Wed, 27 Mar 2019 15:04:42 +0100",
        "fileUrl": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190327-tutti-convocati-s.mp3",
        "content": "La Nazionale travolge il Liechtenstein 6-0 e si mette subito in testa al suo girone ...",
        "contentSnippet": "La Nazionale travolge il Liechtenstein 6-0 e si mette subito in testa al suo girone ...",
        "guid": "http://audio.radio24.ilsole24ore.com/radio24_audio/2019/190327-tutti-convocati-s.mp3",
        "isoDate": "2019-03-27T14:04:42.000Z"
    }
];

(async () => {
    const showId = await db.create('shows', show);
    console.log(`created show with id ${showId}`);
    const podcastIds = await db.createMany('podcasts', podcasts.map(p => {
        p.showId = parseInt(showId);
        return p;
    }));
    console.log('added podcasts', podcastIds);

    db.destroy();

})();