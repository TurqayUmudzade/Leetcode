
const twoSum = (arr, sum) => {

  let l = 0
  let r = arr.length - 1

  while (l < r) {
    if (arr[l] + arr[r] === sum) return [l + 1, r + 1]
    else if (arr[l] + arr[r] > sum) r--
    else l++
  }
};


twoSum([2, 7, 11, 15], 9)