const OAuth2 = require('../controllers/OAuth2.js');
const User = require('../controllers/User.js');
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
        server.get('/user/:id/:token', function (request, response) {
            User.get(request, response);
        });
        
        server.post('/signin', function (request, response) {
            OAuth2.signin(request, response);
        });
        
        server.post('/signup', function (request, response) {
            OAuth2.signup(request, response);
        });
        
        server.all(['/:route', '/', '/:route/:param'], (request, response) => {
            RoutingException.badRequest(response);
        });
        
        server.listen(3000, () => {
            console.log('TechMahindra/SKY API listening on port 3000!');
        });
    }
}