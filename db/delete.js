const dbInstance = require('./db')();

(async () => {
    try {
        const found = await dbInstance.find('shows', 1);
        console.log(found);

        const update = await dbInstance.updateOne('shows', 1, {updated_at: new Date()});
        console.log(update);

        const found2 = await dbInstance.find('shows', 1);
        console.log(found2);
    } catch (error) {
        console.error(error);
    }
    dbInstance.destroy();
})();