// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    // Known conditions
    if (!strs || strs.length == 0) return ""
    if (strs.length == 1) return strs[0]

    // Initialize the result with first string from list
    let result = strs[0]

    // Loop through all the strings from list
    // starting from second since first string initilized to result 
    for (let i = 1; i < strs.length; i++) {

        // At any point if length of current string is 0 then return empty        
        if (strs[i].length == 0) return ""

        /*
        If current string starts with "result" string then, continue with next string
        If it doesn't start with "result", then remove the last char from "result" string and try again
        At any point if "result" length ==0 - it means the starting pattern 
        from current string doesnt have any chars from "result"
        */        
        while (!strs[i].startsWith(result)) {
            result = result.substring(0, result.length - 1)
            if (result.length == 0)
                return ""
        }
    }    
    return result
};