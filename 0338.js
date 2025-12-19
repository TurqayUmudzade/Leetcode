var countBits = function (n) {
  let ans = [];
  for (let i = 0; i < n + 1; i++) {
    ans.push(numberOfOnes(i));
  }
  return ans;
};

const numberOfOnes = (n) => {
  let counter = 0;
  [...n.toString(2)].forEach((e) => {
    if (e == 1) counter++;
  });
  return counter;
};

console.log(Number(8).toString(2).replace("0", ""));
