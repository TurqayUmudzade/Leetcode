const findMaxConsecutiveOnes = (arr) => {
  let max = 0
  let cur = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) cur++
    else cur = 0
    max = Math.max(max, cur)
  }
  return max
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
