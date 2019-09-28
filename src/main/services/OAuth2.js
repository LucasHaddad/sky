const jwt = require('jsonwebtoken');
const User = require('./User.js');
const sha256 = require('sha256');
/**
 * Defines the OAuth2 service.
 */
module.exports = class OAuth2 {
    /**
     * Logs in the user and retirves a JWS.
     * @param {Object} user 
     * @return {String|Boolean}
     */
    static signin(user) {
        let db = User.getDB();
        return db.get({password: sha256(user.password)})
            .then(data => {
                return {
                    token: jwt.sign({
                    email: data.email, 
                        iat: Math.floor(Date.now() / 1000) - 30
                    }, 'secret'),
                    ...data
                };
            })
            .catch(error => false);
    }

    /**
     * Creates a new user.
     * @param {Object} user 
     * @return {String|Boolean}
     */
    static signup(user) {
        if(User.getDB().get({email: user.email}).then(data => data).length > 0) 
            return false;
        return User.save(user)
            .then(data => {
                return {
                    token: jwt.sign({
                    email: data.email, 
                        iat: Math.floor(Date.now() / 1000) - 30
                    }, 'secret'),
                    ...data
                };
            })
            .catch(error => false)
    }
}