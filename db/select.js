const dbInstance = require('./db')();

(async () => {
    try {
        const rows = await dbInstance.getFiltered({ table: 'shows' });
        console.log(rows);
    } catch (error) {
        console.error(error);
    }
    dbInstance.destroy();
})();