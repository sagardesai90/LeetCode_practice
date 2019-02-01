var nextPermutation = function(nums) {
    // 1. find the swapIdx no.1
    // if swapIdx is undefined, skip to step 4
    // 2. find the swapIdx no.2
    // 3. swap 2 swapId
    // 4. flip the elements after the swapIdx no.1 
    
    let swapIdx1,
        swapIdx2;
    for(let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i-1]) {
            swapIdx1 = i - 1;
            break;
        }
    }
    if (swapIdx1 === undefined) {
        nums.reverse();
        return;
    }
    swapIdx2 = swapIdx1 + 1;
    for(let i = swapIdx1 + 2; i < nums.length; i++) {
        // smallest or equal after nums[swapIdx2] but nums[i] is greater than nums[swapIdx1]
        if (nums[i] <= nums[swapIdx2] && nums[swapIdx1] < nums[i]) {
            swapIdx2 = i;
        }
    }
    
    // swap
    const temp = nums[swapIdx1];
    nums[swapIdx1] = nums[swapIdx2];
    nums[swapIdx2] = temp;
    
    let left = swapIdx1 + 1,
        right = nums.length - 1;
    // flip the elements after the swapIdx no.1 
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left += 1;
        right -= 1;
    }
};