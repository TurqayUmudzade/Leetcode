var smallerNumbersThanCurrent = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) counter++;
    }
    ans.push(counter);
  }
  return ans;
};

function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  //overrwites dublicated
  const map = new Map(
    sorted.map((num, index) => [num, nums.length - index - 1])
  );
  return nums.map((num) => map.get(num));
}
