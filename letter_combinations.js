var letterCombinations = function(digits) {
    if(!digits) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    let arr = [''];
    for(let i = 0; i < digits.length; i++) {
        const arr2 = [];
        while(arr.length) {
            const ele = arr.shift();
            for(let letter of map[digits[i]]) {
                arr2.push(ele + letter);
            }
        }
        arr = arr2.slice();
    }
    return arr;
};