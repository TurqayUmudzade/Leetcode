// const findKthLargest1 = (arr, k) => arr.sort((a, b) => b - a)[k - 1]

// import {
//     MinPriorityQueue
// } from '@datastructures-js/priority-queue';

// function findKthLargest(arr, k) {

//     let heap = new MinPriorityQueue()

//     for (let i = 0; i < arr.length; i++) {
//         heap.enqueue(arr[i])
//         if (heap.size() > k) heap.dequeue

//     }


//     return heap.front().element
// }



var findKthLargest = function (nums, k) {
    const finalIdx = nums.length - k;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotIdx = pivotHelper(pivot, left, right);
        if (pivotIdx === finalIdx) return nums[finalIdx];

        if (pivotIdx < finalIdx) left = pivotIdx + 1;
        else right = pivotIdx - 1;
    }

    function pivotHelper(pivot, start, end) {
        swap(pivot, end);

        let i = start;
        let j = start;

        while (j < end) {
            if (nums[j] <= nums[end]) {
                swap(i, j);
                i++;
            }
            j++;
        }
        swap(i, end);
        return i;
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};



console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));