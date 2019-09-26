class DataBase extends Exception {
    constructor(message, code) {
        super(message, code);
    }

    static errorConnection() {
        return new this("Couldn't connect to the database!", 1);
    }
}