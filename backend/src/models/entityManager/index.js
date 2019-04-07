class Model {
    constructor(db, table) {
        this.db = db;
        this.table = table;
    }

    async find(id) {
        return await this.db.find(this.table, id);
    }

    async findBy(condition = { field: 1, value: 1 }) {
        return await this.db.findBy(this.table, condition);
    }

    async get({ fields = '*', filters = null, orderBy = { field: 'id', asc: true }, offset = 0, limit = 30 }) {
        const query = { table: this.table, fields, filters, orderBy, offset, limit };
        return await this.db.getFiltered(query);
    }

    async delete(id) {
        return await this.db.deleteOne(this.table, id);
    }

    async update(id, row) {
        return await this.db.updateOne(this.table, id, row);
    }

    async create(row) {
        return await this.db.create(this.table, row);
    }
    
    async createMany(rows) {
        return await this.db.createMany(this.table, rows);
    }
}

const repoFactory = db => {
    return {
        create(table) {
            return new Model(db, table);
        },
        destroy() {
            db.destroy();
        }
    }
}

module.exports = {
    Model,
    repoFactory
};