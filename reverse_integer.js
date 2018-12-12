// Given a 32-bit signed integer, reverse digits of an integer.
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    fin = [];
    splitStr = x.toString().split('');
    console.log(splitStr);
    for (i = splitStr.length - 1; i >= 0; i--){
        fin.push(splitStr[i]);
        console.log(fin);
        
    }
    res = parseInt(fin.join(''));
    // console.log(res, 2^2, "jello");
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)){return 0};
    if (splitStr[0] == "-"){
        return "-" + res;
    }
    return res;
};