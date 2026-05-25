/**
 * 1462. Course Schedule IV
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi]
 * indicates that you must take course ai first if you want to take course bi.
 *
 * Prerequisite relationships are transitive: if course a is a prerequisite of b,
 * and b is a prerequisite of c, then a is a prerequisite of c.
 *
 * You are also given an array queries where queries[j] = [uj, vj]. For the jth
 * query, you should answer whether course uj is a prerequisite of course vj or not.
 *
 * Return a boolean array answer, where answer[j] is the answer to the jth query.
 *
 * Example 1:
 *   numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]] => [false,true]
 *   (1 must be taken before 0, so 1 is a prerequisite of 0. 0 is NOT a prereq of 1)
 *
 * Example 2:
 *   numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]] => [false,false]
 *
 * Example 3:
 *   numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]],
 *   queries = [[1,0],[1,2]] => [true,true]
 *
 * Constraints:
 *   - 2 <= numCourses <= 100
 *   - 0 <= prerequisites.length <= (numCourses * (numCourses - 1) / 2)
 *   - prerequisites[i].length == 2
 *   - 0 <= ai, bi < numCourses
 *   - ai != bi
 *   - All the pairs [ai, bi] are unique.
 *   - 1 <= queries.length <= 10^4
 *   - queries[j].length == 2
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {

};

// Tests
console.assert(
  JSON.stringify(checkIfPrerequisite(2, [[1,0]], [[0,1],[1,0]])) === JSON.stringify([false,true]),
  'Test 1 failed: expected [false,true]'
);

console.assert(
  JSON.stringify(checkIfPrerequisite(2, [], [[1,0],[0,1]])) === JSON.stringify([false,false]),
  'Test 2 failed: expected [false,false]'
);

console.assert(
  JSON.stringify(checkIfPrerequisite(3, [[1,2],[1,0],[2,0]], [[1,0],[1,2]])) === JSON.stringify([true,true]),
  'Test 3 failed: expected [true,true]'
);

console.assert(
  JSON.stringify(checkIfPrerequisite(3, [[0,1],[1,2]], [[0,2],[2,0]])) === JSON.stringify([true,false]),
  'Test 4 failed: expected [true,false]'
);

console.log('All tests passed for 1462-course-schedule-iv');
