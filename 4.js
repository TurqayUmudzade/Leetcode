var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2]
    arr.sort((a, b) => a - b)
    if (arr.length % 2 === 0) return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    else return arr[parseInt(arr.length / 2)]
};


console.log(findMedianSortedArrays([1, 3], [2]));


