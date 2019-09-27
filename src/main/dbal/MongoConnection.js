const mongoose = require('mongoose');
/**
 * Defines the Mongo Connection.
 */
module.exports = class MongoConnection {
    constructor(url, schema) {
        mongoose.connect(url);
        this.schema = schema;
    }

    /**
     * Fetches data from the database.
     * @param {Object} filter 
     * @return {Promise}
     */
    get(schema, filter = {}) {
        return this.schema.findOne(filter).exec();
    }

    /**
     * Persists data to the database.
     * @param {String} dataSourceName 
     * @param {Object} data 
     * @return {Promise}
     */
    post(dataSourceName, data) {
        let subject = mongoose.model(dataSourceName, this.schema);
        let dataSet = new subject(data);
        return dataSet.save();
    }
}