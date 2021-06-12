var minPartitions = function (n) {
  let max = 0;
  for (let i = 0; i < n.length; i++)
    if (parseInt(n[i]) > max) max = parseInt(n[i]);
  return max;
};

let n = "32131";
//const minPartitions = (n) => Math.max(...n);

const largestDigit = (num) => Math.max(...String(num));

console.log(largestDigit(12331923123));
