// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

var findMedianSortedArrays = function (nums1, nums2) {
    var tempArr = [...nums1, ...nums2].sort((a, b) => a - b);
    var middle = Math.floor(tempArr.length / 2);
    if (tempArr.length % 2 === 0) {
      return (tempArr[middle - 1] + tempArr[middle]) / 2;
    } else {
      return tempArr[middle];
    }
  };