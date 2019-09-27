/**
 * Defines the Routing exceptions.
 */
module.exports = class Routing extends Exception {
    /**
     * Retrieves a bad request message JSON.
     * @param {Object} response 
     */
    static badRequest(response) {
        response.status(400);
        response.json({message: "Bad request!"});
    }

    /**
     * Retrieves a unauthorized message JSON.
     * @param {Object} response 
     */
    static unauthorized(response) {
        response.status(401);
        response.json({message: "Unauthorized!"});
    }
    
    /**
     * Retrieves a forbidden message JSON.
     * @param {Object} response 
     */
    static forbidden(response) {
        response.status(403);
        response.json({message: "Forbidden!"});
    }

    /**
     * Retrieves a not found message JSON.
     * @param {Object} response 
     */
    static notFound(response) {
        response.status(404);
        response.json({message: "Not found!"});
    }

    /**
     * Retrieves a method not allowed message JSON.
     * @param {Object} response 
     */
    static methodNotAllowed(response) {
        response.status(405);
        response.json({message: "Method not allowed!"});
    }
}