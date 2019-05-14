// Given an array of integers, find if the array contains any duplicates.
//
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    if (nums.length == 0){
        return false;
    }
    for (i = 0; i < nums.length ; i++){
        if(obj[nums[i]] == undefined){
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]] += 1
        }
    }
    console.log(obj, 'obj');
    var keys = Object.keys(obj);
    console.log(keys, 'keys');
    for (i = 0; i <= keys.length ; i++){
        if (obj[keys[i]] > 1){
            console.log(i, '1');
            console.log(obj[keys[i]], 'keys');
            return true;
        } else {
            console.log(i, '2');
            console.log(obj[keys[i]], 'keys');

        }

    }
    return false;
};