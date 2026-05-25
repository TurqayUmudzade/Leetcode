/**
 * 210. Course Schedule II
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi]
 * indicates that you must take course bi first if you want to take course ai.
 *
 * Return the ordering of courses you should take to finish all courses. If there
 * are many valid answers, return any of them. If it is impossible to finish all
 * courses (a cycle exists), return an empty array.
 *
 * Example 1:
 *   numCourses = 2, prerequisites = [[1,0]] => [0,1]
 *
 * Example 2:
 *   numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]] => [0,2,1,3] or [0,1,2,3]
 *
 * Example 3:
 *   numCourses = 1, prerequisites = [] => [0]
 *
 * Constraints:
 *   - 1 <= numCourses <= 2000
 *   - 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 *   - prerequisites[i].length == 2
 *   - 0 <= ai, bi < numCourses
 *   - ai != bi
 *   - All the pairs [ai, bi] are distinct.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

};

// Helper: verify topological ordering is valid
function isValidOrder(order, numCourses, prerequisites) {
  if (!order || order.length !== numCourses) return false;
  const pos = new Array(numCourses);
  order.forEach((c, i) => { pos[c] = i; });
  for (const [a, b] of prerequisites) {
    // b must come before a
    if (pos[b] >= pos[a]) return false;
  }
  return true;
}

// Test 1
const r1 = findOrder(2, [[1,0]]);
console.assert(
  isValidOrder(r1, 2, [[1,0]]),
  'Test 1 failed: invalid order for 2 courses'
);

// Test 2
const r2 = findOrder(4, [[1,0],[2,0],[3,1],[3,2]]);
console.assert(
  isValidOrder(r2, 4, [[1,0],[2,0],[3,1],[3,2]]),
  'Test 2 failed: invalid order for 4 courses'
);

// Test 3: cycle should return []
console.assert(
  JSON.stringify(findOrder(2, [[1,0],[0,1]])) === JSON.stringify([]),
  'Test 3 failed: cycle should return []'
);

// Test 4: single course
const r4 = findOrder(1, []);
console.assert(
  JSON.stringify(r4) === JSON.stringify([0]),
  'Test 4 failed: expected [0]'
);

console.log('All tests passed for 210-course-schedule-ii');
