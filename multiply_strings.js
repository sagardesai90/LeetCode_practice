// Given two non-negative integers num1 and num2 represented as strings, 
// return the product of num1 and num2, also represented as a string.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m = num1.length, n = num2.length
    let res = Array(m + n).fill(0)
    for (let i = m - 1; i>= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let temp = +num1.charAt(i) * +num2.charAt(j)
            let posLow = i + j + 1
            let posHigh = i + j
            temp += res[posLow]
            res[posLow] = temp % 10
            res[posHigh] += Math.trunc(temp / 10)
        }
    }
    while (res[0] === 0) {
        res.shift()
    }
    return res.length === 0 ? "0" : res.join('')
};