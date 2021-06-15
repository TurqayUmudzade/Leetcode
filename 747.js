// Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) return 0;

  let max = Math.max(...nums);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max) {
      if (nums[i] == max) index = i;
      else return -1;
    }
  }

  return index;
};

let arr = [1, 2, 3, 4];
console.log(dominantIndex(arr));
