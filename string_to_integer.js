/**
 * @param {string} str
 * @return {number}
 */

// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
// Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
// and interprets them as a numerical value.
// The string can contain additional characters after those that form the integral number, 
// which are ignored and have no effect on the behavior of this function.
// If the first sequence of non-whitespace characters in str is not a valid integral number, 
// or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

var myAtoi = function(str) {
    let i = 0;
    let res = 0;
    let isNegative = false;
    
    // 1. Skip spaces
    while (str[i] === ' ') {
        i += 1;
    }
    
    // 2. Optional +/-
    const maybeSign = str[i];
    if (maybeSign === '+' || maybeSign === '-') {
        isNegative = maybeSign === '-';
        i += 1;
    }

    // 3. Process numbers and stop once an invalid character is found
    for (; i < str.length; i += 1) {
        const code = str.charCodeAt(i) - 48; // '0' is 48
        if (code < 0 || code > 9) {
            break;
        }
        res *= 10;
        res += code;
    }
    
    if (isNegative) {
        res = -res;
    }
    
    return Math.max(-(2**31), Math.min(2**31 - 1, res));
};