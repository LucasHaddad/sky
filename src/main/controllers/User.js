const RoutingException = require('../exceptions/Routing.js');
const Service = require('../exceptions/Routing.js');
const jwt = require('jsonwebtoken');
/**
 * Defines the User controller.
 */
module.exports = class User {
    /**
     * Retrieves a user.
     * @param {Object} request 
     * @param {Object} response 
     */
    static get(request, response) {
        let token = jwt.verify(request.params.token, 'secret')
            .then(decoded => decoded)
            .catch((error) => {
                RoutingException.forbidden(response);
            });
        let id = request.params.id;
        let now = Math.floor(Date.now() / 1000) - 30;
        let allowed = token && ((now - token.iat)/60) < 30;
        if (allowed) {
            Service.get(id).then((doc) => {
                response.status(200);
                response.json(doc);
            });
        } else {
            RoutingException.unauthorized(response);
        }
    }
}