// Given two strings s and t , write a function to determine if t is an anagram of s.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    console.log(s, t);
    var splitS = s.split("").sort();
    var splitT = t.split("").sort();
    console.log(splitS, splitT);
    var objS = {};
    var objT = {};
    for (i = 0; i < splitS.length; i++){
        if(objS[splitS[i]] == undefined){
            objS[splitS[i]] = 1;
        } else {
            objS[splitS[i]] += 1;
        }
    }
    
    for (i = 0; i < splitT.length; i++){
        if(objT[splitT[i]] == undefined){
            objT[splitT[i]] = 1;
        } else {
            objT[splitT[i]] += 1;
        }
    }
    console.log(objS, objT);
    console.log(JSON.stringify(objS) == JSON.stringify(objT));
    if (JSON.stringify(objS) == JSON.stringify(objT)){return true} else { return false};
    
};