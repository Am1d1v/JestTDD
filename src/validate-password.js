


export function valudatePassword(password){

    // Password has less than 8 characters
    if(password.length < 8) return false;

    // If password doesnt contain LowerCase and UpperCase characters return false
    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password)) return false;

    // If password doesnt contain digits return false
    if(!/[0-9]/.test(password)) return false

    // If password doesnt contain specials return false
    if(!/[^A-Za-z0-9]/.test(password)) return false

    return true
}