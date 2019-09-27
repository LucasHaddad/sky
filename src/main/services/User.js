const MongoConnection = require('../dbal/MongoConnection.js');
const mongoose = require('mongoose');
/**
 * Defines the User service.
 */
module.exports = class User {
    /**
     * 
     */
    static dataSourceName = 'users';

    /**
     * Retrieves the data base connection.
     * @return {Object} 
     */
    static getDB() {
        let schema = new mongoose.Schema({
            name: String,
            id: String,
            email: String,
            password: String,
            contacts: Array,
        });
        return new MongoConnection('mongo://localhost:27017/sky', schema);
    }

    /**
     * Retrieves a user.
     * @param {String} id
     * @return {Promise} 
     */
    static get(id) {
        return getDB().get({id: id});
    }

    /**
     * 
     */
    static save(data) {
        return getDB().post(dataSourceName, data);
    }
}