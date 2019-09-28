const User = require('../../main/controllers/User.js');
const sha256 = require('sha256');
describe('Test User controller', () => {

    it('get user without errors', () => {
        const response = {
            status: (status) => {
                expect(status).not.toBe(401);
            },
            jsonp: (json) => {
                expect(json.message).toBe(undefined);
            },
        };
        const request = {
            params: {
                id: "1",
                token: sha256("secret"),
            },
        };
        User.get(request, response);
    });

    it('get user without token', () => {
        const response = {
            status: (status) => {
                expect(status).toBe(401);
            },
            jsonp: (json) => {
                expect(json.message).toBe("Unauthorized");
            },
        };
        const request = {
            params: {
                id: "1",
            },
        };
        User.get(request, response);
    });
});