/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = []
  const heap = new PriorityQueue((a, b) => b[0] - a[0]) // [value, index]

  let l = 0

  for (let r = 0; r < nums.length; r++) {
    heap.enqueue([nums[r], r])

    // ensure window size k
    if (r - l + 1 < k) continue

    // remove elements outside window
    while (heap.front()[1] < l) {
      heap.dequeue()
    }

    res.push(heap.front()[0])
    l++
  }

  return res
}

