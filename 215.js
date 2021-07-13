const findKthLargest = (arr, k) => arr.sort((a, b) => b - a)[k - 1]




console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));