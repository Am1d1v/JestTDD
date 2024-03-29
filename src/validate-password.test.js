import { valudatePassword } from "./validate-password";

describe('Password Palidation', () => {

    // Valid Password
    it('Should return true for a valid password', () => {

        const validPassword = 'MyPassword123!'

        expect(valudatePassword(validPassword)).toBe(true);
    });


    it.todo('Should validate a password contains minimum 8 characters', () => {

        const invalidPassword = '1234567';

        expect(valudatePassword(invalidPassword)).toBe(false);
    })


    it.todo('Should validate a password contains mixed cases')


    it.todo('Should validate a password contains digits and characters')


    it.todo('Should validate a password contains special characters')

});