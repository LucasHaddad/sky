const Service = require('../services/OAuth2.js');
/**
 * Defines the OAuth2 controller.
 */
module.exports = class OAuth2 {
    /**
     * Signs the user.
     * @param {Object} request 
     * @param {Object} response 
     */
    static signin(request, response) {
        response.status(200);
        response.json(Service.signin(request.body));
    }

    /**
     * Registers the user.
     * @param {Object} request 
     * @param {Object} response 
     */
    static signup(request, response) {
        response.status(200);
        response.json(Service.signup(request.body));
    }
}