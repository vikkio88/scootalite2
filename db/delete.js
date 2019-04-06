const dbInstance = require('./db')();

(async () => {
    try {
        const found = await dbInstance.find('shows', 3);
        console.log(found);
        const rows = await dbInstance.deleteOne('shows', 3);
        console.log(rows);
    } catch (error) {
        console.error(error);
    }
    dbInstance.destroy();
})();