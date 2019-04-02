const Show = require('./valueObjects').Show;
const feedParser = require('./feedParser').feedParser;
(async () => {
    try {
        const showPayload = await feedParser(process.argv[2]);
        const show = Show.fromFeed(showPayload);
        if(!process.argv[3]){
            show.podcasts = null;
        }
        console.log(show.toJs());
    } catch (error) {
        console.error("Error", error, process.argv);
    }
})();