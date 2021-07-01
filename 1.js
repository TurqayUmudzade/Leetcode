// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++)
//     for (let k = 0; k < nums.length; k++)
//       if (nums[i] + nums[k] === target && i !== k) return [i, k];
// };


const twoSum = (arr, target) => {
  arr.sort((a, b) => a - b)

}



// var twoSum = function (nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++)
//     if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
//     else map.set(nums[i], i);

//   return [];
// };

console.log(twoSum([3, 3, 4, 5, 4], 8));
