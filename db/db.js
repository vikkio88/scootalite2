require('dotenv').config();
const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
const knex = require('knex');

const db = (driver = knex({
    client: 'pg',
    connection: { host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_NAME }
})) => {
    console.log('here');
    return {
        driver,
        async getFiltered({ table, fields = '*', filters = null, orderBy = { field: 'id', asc: true }, offset = 0, limit = 30 }) {
            const query = driver.select(fields).from(table);
            if (filters) {
                filters.forEach(field => query.where(field, filters[field]));
            }

            if (orderBy) {
                query.orderBy(orderBy.field, orderBy.asc ? 'asc' : 'desc');
            }
            
            return await query.limit(limit).offset(offset);
        },
        destroy() {
            driver.destroy();
        }
    }
};

module.exports = db;