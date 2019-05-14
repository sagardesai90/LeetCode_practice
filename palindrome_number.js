/**
 * @param {number} x
 * @return {boolean}
 */

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
    return x.toString().split('').reverse().toString().split(',').join('') === x + '' ? true : false; 
};