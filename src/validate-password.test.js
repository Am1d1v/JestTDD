import { valudatePassword } from "./validate-password";
import { passwordValidationErrors } from "./constants";


describe('Password Palidation', () => {

    // Valid Password
    it('Should return {success: true, error: null} for a valid password', () => {

        const validPassword = 'MyPassword123!'

        expect(valudatePassword(validPassword)).toEqual({success: true, error: null});
    });


    it('Should validate a password contains minimum 8 characters and return error message', () => {

        const invalidPassword = 'MyPs123';

        const expectedError = {
            success: false,
            error: passwordValidationErrors.length
        }

        expect(valudatePassword(invalidPassword)).toEqual(expectedError);
    })


    it('Should validate a password contains mixed cases and return error message', () => {

        const invalidPassword = 'mypassword123';
        const invalidPassword2 = 'MYPASSWORD123';

        const expectedError = {
            success: false,
            error: passwordValidationErrors.case
        }

        expect(valudatePassword(invalidPassword)).toEqual(expectedError);
        expect(valudatePassword(invalidPassword2)).toEqual(expectedError);

    });


    it('Should validate a password contains digits and characters and return error message', () => {

        const invalidPassword = 'myPassword!@#';

        const expectedError = {
            success: false,
            error: passwordValidationErrors.number
        }


        expect(valudatePassword(invalidPassword)).toEqual(expectedError);

    });


    it('Should validate a password contains special characters and return error message', () => {

        const invalidPassword = 'mYpassword123';

        const expectedError = {
            success: false,
            error: passwordValidationErrors.special
        }


        expect(valudatePassword(invalidPassword)).toEqual(expectedError);

    })

});