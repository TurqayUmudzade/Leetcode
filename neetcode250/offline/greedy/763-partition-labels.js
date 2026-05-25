/**
 * 763. Partition Labels
 *
 * You are given a string s. Partition the string into as many parts as possible so that each
 * letter appears in at most one part. Return a list of integers representing the size of
 * these parts. The greedy approach: for each character track its last occurrence, and extend
 * the current partition's end to the last occurrence of any character seen so far.
 *
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
};

console.assert(
  JSON.stringify(partitionLabels("ababcbacadefegdehijhklij")) === JSON.stringify([9, 7, 8]),
  "Test 1 failed"
);
console.assert(
  JSON.stringify(partitionLabels("eccbbbbdec")) === JSON.stringify([10]),
  "Test 2 failed"
);
console.assert(
  JSON.stringify(partitionLabels("a")) === JSON.stringify([1]),
  "Test 3 failed"
);
console.assert(
  JSON.stringify(partitionLabels("abcd")) === JSON.stringify([1, 1, 1, 1]),
  "Test 4 failed"
);
