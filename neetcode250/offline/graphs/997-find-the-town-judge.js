/**
 * 997. Find the Town Judge
 *
 * In a town, there are n people labeled from 1 to n. There is a rumor that one
 * of these people is secretly the town judge.
 *
 * If the town judge exists, then:
 *   1. The town judge trusts nobody.
 *   2. Everybody (except for the town judge) trusts the town judge.
 *   3. There is exactly one person that satisfies properties 1 and 2.
 *
 * You are given an array trust where trust[i] = [a, b] representing that the
 * person labeled a trusts the person labeled b. If a trust relationship does
 * not exist in trust array, then such a trust relationship does not exist.
 *
 * Return the label of the town judge if the town judge exists and can be
 * identified, or return -1 otherwise.
 *
 * Example 1:
 *   n = 2, trust = [[1,2]] => 2
 *
 * Example 2:
 *   n = 3, trust = [[1,3],[2,3]] => 3
 *
 * Example 3:
 *   n = 3, trust = [[1,3],[2,3],[3,1]] => -1
 *
 * Constraints:
 *   - 1 <= n <= 1000
 *   - 0 <= trust.length <= 10^4
 *   - trust[i].length == 2
 *   - All the pairs of trust are unique.
 *   - a != b
 *   - 1 <= a, b <= n
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

};

// Tests
console.assert(
  findJudge(2, [[1,2]]) === 2,
  'Test 1 failed: expected 2'
);

console.assert(
  findJudge(3, [[1,3],[2,3]]) === 3,
  'Test 2 failed: expected 3'
);

console.assert(
  findJudge(3, [[1,3],[2,3],[3,1]]) === -1,
  'Test 3 failed: expected -1'
);

console.assert(
  findJudge(1, []) === 1,
  'Test 4 failed: expected 1'
);

console.log('All tests passed for 997-find-the-town-judge');
