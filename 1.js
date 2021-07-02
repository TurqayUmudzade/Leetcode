


var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++)
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    else map.set(nums[i], i);

  return [];
};

console.log(twoSum([3, 3, 4, 5, 4], 8));

var twoSum = function (nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.target; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    else map.set(nums[i], i);
  }
  return []
};