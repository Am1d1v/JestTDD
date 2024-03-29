import { valudatePassword } from "./validate-password";

describe('Password Palidation', () => {

    // Valid Password
    it('Should return true for a valid password', () => {

        const validPassword = 'MyPassword123!'

        expect(valudatePassword(validPassword)).toBe(true);
    });


    it('Should validate a password contains minimum 8 characters', () => {

        const invalidPassword = 'MyPs123';

        expect(valudatePassword(invalidPassword)).toBe(false);
    })


    it('Should validate a password contains mixed cases', () => {

        const invalidPassword = 'mypassword123';
        const invalidPassword2 = 'MYPASSWORD123';

        expect(valudatePassword(invalidPassword)).toBe(false);
        expect(valudatePassword(invalidPassword2)).toBe(false);

    });


    it('Should validate a password contains digits and characters', () => {

        const invalidPassword = 'mypassword!@#';

        expect(valudatePassword(invalidPassword)).toBe(false);

    });


    it('Should validate a password contains special characters', () => {

        const invalidPassword = 'mypassword';

        expect(valudatePassword(invalidPassword)).toBe(false);

    })

});