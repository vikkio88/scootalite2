const sqlString = require('sqlstring');
const { DB_DRIVER, DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
const knex = require('knex');

const db = (driver = knex({
    client: DB_DRIVER,
    connection: { host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_NAME }
})) => {
    return {
        driver,
        select({ table, fields = '*' }) {
            return driver.select(fields).from(table);
        },
        async create(table, row, returning = 'id') {
            const ids = await driver(table).insert(row, returning);
            if (ids && ids.length) {
                return ids[0];
            }
            throw 'db error: cannot create';
        },
        async createMany(table, rows, returning = 'id') {
            return await driver.batchInsert(table, rows).returning(returning);
        },
        async updateOne(table, id, row) {
            return await this.update(table, { field: 'id', value: id }, row);
        },
        async update(table, condition = { field: 1, value: 1 }, row) {
            return await driver(table).where(condition.field, condition.value).update(row);
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
        async findBy(table, condition) {
            const rowSet = await this.select({ table }).where(condition.field, condition.value);
            if (rowSet.length) {
                return rowSet[0];
            }

            return null;
        },
        async getFiltered({ table, fields = '*', filters = null, orderBy = { field: 'id', asc: true }, offset = 0, limit = 30 }) {
            const query = this.select({ table, fields });
            if (filters) {
                Object.keys(filters).forEach(field => query.where(field, filters[field]));
            }

            if (orderBy) {
                query.orderBy(orderBy.field, orderBy.asc ? 'asc' : 'desc');
            }

            return await query.limit(limit).offset(offset);
        },
        async rawPgUpsert(table, row, columnsToRetain, conflictOn) {
            // from https://stackoverflow.com/a/55019125/4023451
            const insert = driver(table)
                .insert(row)
                .toString();

            const rowsToUpdate = {};
            for (key in row) {
                if (!columnsToRetain.includes(key)) {
                    rowsToUpdate[key] = row[key];
                }
            }
            const update = driver(table)
                .update(rowsToUpdate)
                .toString();
            const keepValues = columnsToRetain.map(c => `"${c}"=${table}."${c}"`).join(',');
            const conflictColumns = conflictOn.map(c => `"${c.toString()}"`).join(',');
            let insertOrUpdateQuery = `${insert} ON CONFLICT( ${conflictColumns}) DO ${update}`;
            insertOrUpdateQuery = keepValues ? `${insertOrUpdateQuery}, ${keepValues}` : insertOrUpdateQuery;
            insertOrUpdateQuery = insertOrUpdateQuery.replace(`update "${table}"`, 'update');
            insertOrUpdateQuery = insertOrUpdateQuery.replace(`"${table}"`, table);
            return await driver.raw(insertOrUpdateQuery);
        },
        async rawMySqlUpser(table, row, columnsToRetain = []) {
            return driver.raw(driver(table).insert(row).toQuery()
                + " ON DUPLICATE KEY UPDATE " +
                Object.keys(row)
                    .filter(f => !columnsToRetain.includes(f))
                    .map(f => `${f}=${sqlString.escape(row[f])}`).join(", "));
        },
        destroy() {
            driver.destroy();
        }
    }
};

module.exports = db;