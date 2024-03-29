


export function valudatePassword(password){

    const hasMinimumLength = password.length >= 8
    if(!hasMinimumLength) return false;

    return hasMinimumLength
}