const OAuth2 = require('../../main/controllers/OAuth2.js');
describe('Test OAuth2 controller', () => {
    const request = {
        body: {
            name: 'lucas',
            email: 'lucasmh97@gmail.com',
            password: 'secret',
            contacts: [
                {
                    number: "997990022",
                    ddd: "31",
                },
            ],
        },
        params: {
            id: "1"
        },
    };

    it('sign in without errors', () => {
        const response = {
            status: (status) => {
                expect(status).not.toBe(401);
            },
            jsonp: (json) => {
                expect(json.message).toBe(undefined);
            },
        };
        OAuth2.signin(request, response);
    });

    it('sign in without password should resolve error', () => {
        const response = {
            status: (status) => {
                expect(status).toBe(401);
            },
            jsonp: (json) => {
                expect(json.message).toBe("Unauthorized");
            },
        };
        const errorRequest = {
            ...request
        };
        delete errorRequest.password;
        OAuth2.signin(errorRequest, response);
    });

    it('sign up without errors', () => {
        const response = {
            status: (status) => {
                expect(status).not.toBe(401);
            },
            jsonp: (json) => {
                expect(json.message).toBe(undefined);
            },
        };
        OAuth2.signup(request, response);
    });

    it('sign up without password should resolve error', () => {
        const response = {
            status: (status) => {
                expect(status).toBe(400);
            },
            jsonp: (json) => {
                expect(json.message).toBe("Bad Request");
            },
        };
        const errorRequest = {
            ...request
        };
        delete errorRequest.password;
        OAuth2.signup(errorRequest, response);
    });
});