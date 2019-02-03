var search = function(nums, target) {
    let i = 0, j = nums.length - 1, noRotate = false;
    
    while (i < j) {
        let m = Math.floor((i + j) / 2);
        if (nums[m] <= nums[i]) {
            j = m;
        } else if (nums[m] > nums[j]) {
            i = m;
        } else {
            noRotate = true; break;
        }
    }
    
    if (noRotate) {
        return binarySearch(nums, 0, nums.length-1, target);
    } else if (target >= nums[0] && target <= nums[i]) {
        return binarySearch(nums, 0, i, target);
    } else {
        return binarySearch(nums, i+1, nums.length-1, target);
    }
};

// both start and end are inclusive
function binarySearch(nums, start, end, target) {
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}