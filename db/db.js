require('dotenv').config();
const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
const knex = require('knex');

const db = (driver = knex({
    client: 'pg',
    connection: { host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_NAME }
})) => {
    return {
        driver,
        select({ table, fields = '*' }) {
            return driver.select(fields).from(table);
        },
        async create(table, row, returning = 'id') {
            return await driver(table).insert(row, returning);
        },
        async deleteOne(table, id) {
            return this.delete(table, { field: 'id', value: id });
        },
        async delete(table, condition = { field: 1, value: 1 }) {
            return await driver(table).where(condition.field, condition.value).delete();
        },
        async find(table, id) {
            const rowSet = await this.select({ table }).where('id', id);
            if (rowSet.length) {
                return rowSet[0];
            }

            return null;
        },
        async getFiltered({ table, fields = '*', filters = null, orderBy = { field: 'id', asc: true }, offset = 0, limit = 30 }) {
            const query = this.select({ table, fields });
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