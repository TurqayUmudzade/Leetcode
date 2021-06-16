// var arrayPairSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 == 0) sum += nums[i];
//   }
//   return sum;
// };

const arrayPairSum = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr.reduce((sum, n, i) => (i % 2 == 0 ? sum + n : sum), 0);
};

console.log(arrayPairSum([1, 4, 3, 2]));
