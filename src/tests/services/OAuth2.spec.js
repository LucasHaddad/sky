const OAuth2 = require('../../main/services/OAuth2.js');
describe('Test OAuth2 service', () => {
    const user = {
        name: 'lucas',
        email: 'lucasmh97@gmail.com',
        password: 'secret',
        contacts: [
            {
                number: "997990022",
                ddd: "31",
            },
        ],
    };

    it('sign in without errors', () => {
        OAuth2.signin(user).then(data => {
            expect(data).not.toBe(false)
        });
    });

    it('sign in with errors', () => {
        const wrongUser = {
            ...user,
        };
        delete email;
        OAuth2.signin(wrongUser).then(data => {
            expect(data).toBe(false)
        });
    });

    it('sign up without errors', () => {
        OAuth2.signup(user).then(data => {
            expect(data).not.toBe(false)
        });
    });

    it('sign up with errors', () => {
        const wrongUser = {
            ...user,
        };
        delete email;
        OAuth2.signup(wrongUser).then(data => {
            expect(data).toBe(false)
        });
    });
});