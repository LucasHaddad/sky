const RoutingException = require('../exceptions/Routing.js');
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
        let body = Service.signin(request.body);
        if (body) {
            response.status(200);
            response.json(body);    
        } else {
            RoutingException.unauthorized(response);
        }
    }

    /**
     * Registers the user.
     * @param {Object} request 
     * @param {Object} response 
     */
    static signup(request, response) {
        let body = Service.signin(request.body);
        if (body) {
            response.status(200);
            response.json(body);    
        } else {
            RoutingException.badRequest(response);
        }
    }
}