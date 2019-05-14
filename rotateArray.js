// Given an array, rotate the array to the right by k steps, where k is non-negative.
var rotate = function(nums, k) {
    console.log(nums[nums.length - 1 - k]);
    var first = nums.slice(k + 1);
    var second = nums.slice(0, k + 1);
    console.log(first);
    console.log(second);
    console.log(first.concat(second), 'concat');
    var fin = first.concat(second);
    console.log(fin);
    var nums = fin;
};