const MongoConnection = require('../dbal/MongoConnection.js');
const mongoose = require('mongoose');
const sha256 = require('sha256');
/**
 * Defines the User service.
 */
module.exports = class User {
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
            createdAt: Number,
            updatedAt: Number,
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
     * Creeates a new user and retrieves it.
     * @param {Object} data
     * @return {Promise}
     */
    static save(data) {
        let now = Date.now().toString();
        data.id = now;
        data.password = sha256(data.password);
        data.createdAt = Math.floor(now / 1000) - 30;
        data.updatedAt = data.createdAt;
        return getDB().post('user', data);
    }
}