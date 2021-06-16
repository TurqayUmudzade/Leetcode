var findMaxConsecutiveOnes = function (arr) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      temp++;
    } else if (max < temp) {
      max = temp;
      temp = 0;
    } else temp = 0;
  }

  return max > temp ? max : temp;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
