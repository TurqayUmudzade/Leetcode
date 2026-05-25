/**
 * 207. Course Schedule
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi]
 * indicates that you must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first
 * take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 * (i.e., return true if no cycle exists in the prerequisite graph)
 *
 * Example 1:
 *   numCourses = 2, prerequisites = [[1,0]] => true
 *   (Take course 0 first, then course 1)
 *
 * Example 2:
 *   numCourses = 2, prerequisites = [[1,0],[0,1]] => false
 *   (Cycle: course 0 depends on 1, course 1 depends on 0)
 *
 * Constraints:
 *   - 1 <= numCourses <= 2000
 *   - 0 <= prerequisites.length <= 5000
 *   - prerequisites[i].length == 2
 *   - 0 <= ai, bi < numCourses
 *   - All the pairs prerequisites[i] are unique.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

};

// Tests
console.assert(
  canFinish(2, [[1,0]]) === true,
  'Test 1 failed: expected true'
);

console.assert(
  canFinish(2, [[1,0],[0,1]]) === false,
  'Test 2 failed: expected false (cycle)'
);

console.assert(
  canFinish(1, []) === true,
  'Test 3 failed: single course no prerequisites, expected true'
);

console.assert(
  canFinish(4, [[1,0],[2,1],[3,2],[1,3]]) === false,
  'Test 4 failed: expected false (cycle 1->2->3->1)'
);

console.log('All tests passed for 207-course-schedule');
