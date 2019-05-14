// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    console.log(s);
    if (s == "") {return -1};
    for(i = 0; i < s.length; i++){
        if(obj[s[i]] == undefined){
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    console.log(obj);
    var keys = Object.keys(obj);
    console.log(keys, 'keys');
    var firstOne = undefined;
    for (i = 0; i < keys.length; i++){
        if(obj[keys[i]] == 1){
            console.log(keys[i]);
            firstOne = keys[i];
            break;
        }
    }
    console.log(firstOne, 'firstOne');
    for (i = 0; i < s.length; i++){
        if(s[i] == firstOne){
            console.log(i, "i");
            return i;
        }
    }
    return -1;
};

