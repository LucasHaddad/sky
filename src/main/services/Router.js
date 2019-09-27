const OAuth2 = require('../constrollers/OAuth2.js');
const User = require('../constrollers/User.js');
const RoutingException = require('../exceptions/Routing.js');

/**
 * Defines the Router service.
 */
module.exports = class Router {
    /**
     * Routes requests to controllers.
     * @param {Object} server 
     */
    static serve(server) {
        server.get('/user/:id', function (request, response) {
            User.get(request, response);
        });
        
        server.post('/signin', function (request, response) {
            OAuth2.signin(request, response);
        });
        
        server.post('/signup', function (request, response) {
            OAuth2.signup(request, response);
        });
        
        server.all(['/:route', '/'], (request, response) => {
            RoutingException.badRequest(response);
        });
        
        server.listen(3000, () => {
            console.log('TechMahindra/SKY API listening on port 3000!');
        });
    }
}