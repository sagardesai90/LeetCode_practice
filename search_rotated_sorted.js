// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

var search = function(nums, target) {
    // 1. Find min's index
    let left = 0
    let right = nums.length - 1
  
    while (left < right) {
      let mid = (left + right) >> 1
  
      if (nums[mid] > nums[right]) left = mid + 1
      else right = mid
    }
  
    const rotation = left
    
    // 2. Standard binary search with rotation factor
    left = 0
    right = nums.length - 1
    
    while (left <= right) {
      const mid = (left + right) >> 1
      const realMid = (mid + rotation) % nums.length
      
      if (nums[realMid] === target) return realMid
      else if (nums[realMid] > target) right = mid - 1
      else left = mid + 1
    }
    
    return -1
  };