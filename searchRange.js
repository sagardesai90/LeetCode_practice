var searchRange = function(nums, target) {
    // 1. find starting position
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
      // left bias
      const mid = (left + right) >> 1
      
      if (nums[mid] >= target) right = mid
      else left = mid + 1
    }
    
    const start = left
    if (nums[start] !== target) return [-1, -1]
    
    // 2. find ending position
    right = nums.length - 1
    
    while (left < right) {
      // right bias
      const mid = ((left + right) >> 1) + 1
      
      if (nums[mid] > target) right = mid - 1
      else left = mid
    }
    
    const end = right
    
    return [start, end]
  };