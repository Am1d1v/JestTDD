


export function valudatePassword(password){

    // Password has less than 8 characters
    if(password.length < 8){
        return {
            success: false,
            error: 'Password must be at least 8 characters length'
        }
    }

    // If password doesnt contain LowerCase and UpperCase characters return false
    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password)){
        return {
            success: false,
            error: 'Password must contain both upper and lower case letters'
        }
    };

    // If password doesnt contain digits return false
    if(!/[0-9]/.test(password)){
        return {
            success: false,
            error: 'Password must contain at least one number'
        }
    }

    // If password doesnt contain specials return false
    if(!/[^A-Za-z0-9]/.test(password)){
        return {
            success: false,
            error: 'Password must contain at least one special character'
        }
    }

    return {
        success: true,
        error: null
    }
}