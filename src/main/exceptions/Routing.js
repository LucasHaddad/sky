class Routing extends Exception {
    constructor(message, code) {
        super(message, code);
    }

    static badRequest() {
        return new this("Bad request!", 400);
    }
    
    static unauthorized() {
        return new this("Unauthorized!", 401);
    }
    
    static forbidden() {
        return new this("Forbidden!", 403);
    }

    static notFound() {
        return new this("Not found!", 404);
    }
    
    static methodNotAllowed() {
        return new this("Method not allowed!", 405);
    }
}