/**
 * 287. Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 *
 * Given an array of integers nums containing n+1 integers where each integer
 * is in the range [1, n] inclusive, there is only one repeated number.
 * Return that repeated number.
 *
 * You must solve the problem WITHOUT modifying the array and uses O(1) extra
 * space. Use Floyd's cycle detection (tortoise and hare) by treating the
 * array as an implicit linked list where i → nums[i].
 *
 * Example 1: nums=[1,3,4,2,2]  →  2
 * Example 2: nums=[3,1,3,4,2]  →  3
 *
 * Constraints:
 *   - 1 <= n <= 10^5
 *   - nums.length == n + 1
 *   - 1 <= nums[i] <= n
 *   - All integers appear only once except for exactly one integer which appears two or more times.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {};

// --- Tests ---
console.assert(
  findDuplicate([1,3,4,2,2]) === 2,
  'Test 1 failed: [1,3,4,2,2] duplicate is 2'
);

console.assert(
  findDuplicate([3,1,3,4,2]) === 3,
  'Test 2 failed: [3,1,3,4,2] duplicate is 3'
);

console.assert(
  findDuplicate([1,1]) === 1,
  'Test 3 failed: [1,1] duplicate is 1'
);

console.assert(
  findDuplicate([2,2,2,2,2]) === 2,
  'Test 4 failed: [2,2,2,2,2] duplicate is 2'
);

console.log('All tests passed!');
