/**
 * 1871. Jump Game VII
 *
 * You are given a 0-indexed binary string s and two integers minJump and maxJump.
 * s consists only of '0' and '1'. You start at index 0 (which is always '0').
 * In one move, you can jump from index i to any index j where:
 *   i + minJump <= j <= min(i + maxJump, s.length - 1)  AND  s[j] === '0'
 * Return true if you can reach index s.length - 1, or false otherwise.
 *
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
};

console.assert(canReach("011010", 2, 3) === true, "Test 1 failed");
console.assert(canReach("01101110", 2, 3) === false, "Test 2 failed");
console.assert(canReach("0", 1, 2) === true, "Test 3 failed");
console.assert(canReach("00", 1, 1) === true, "Test 4 failed");
