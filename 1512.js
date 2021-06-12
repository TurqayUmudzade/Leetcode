var numIdenticalPairs = function (nums) {
  let map = new Map();
  let pairs = 0;
  nums.forEach((n) => {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  });

  for (let val of map.values()) {
    if (val > 1) pairs += val - 1;
    for (let i = 0; i < val - 1; i++) {
      pairs = pairs + i;
    }
  }

  return pairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
