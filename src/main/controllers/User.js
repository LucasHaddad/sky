const RoutingException = require('../exceptions/Routing.js');
const Service = require('../exceptions/Routing.js');
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
        let token = verify(request.body.token, 'secret')
            .then(decoded => decoded)
            .catch((error) => {
                RoutingException.forbidden(response);
            });
        let id = request.params.id;
        if (token) {
            Service.get(id).then((doc) => {
                response.status(200);
                response.json(doc);
            });
        } else {
            RoutingException.unauthorized(response);
        }
    }
}