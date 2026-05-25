/**
 * 721. Accounts Merge
 *
 * Given a list of accounts where each element accounts[i] is a list of strings,
 * where the first element accounts[i][0] is a name, and the rest of the elements
 * are emails representing emails of the account.
 *
 * Now, we would like to merge these accounts. Two accounts definitely belong to
 * the same person if there is some common email to both accounts. After merging
 * the accounts, return the accounts in the following format: the first element
 * of each account is the name, and the rest of the elements are emails in sorted
 * order. The accounts themselves can be returned in any order.
 *
 * Example:
 *   accounts = [
 *     ["John","johnsmith@mail.com","john_newyork@mail.com"],
 *     ["John","johnsmith@mail.com","john00@mail.com"],
 *     ["Mary","mary@mail.com"],
 *     ["John","johnnybravo@mail.com"]
 *   ]
 *   => [
 *     ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
 *     ["Mary","mary@mail.com"],
 *     ["John","johnnybravo@mail.com"]
 *   ]
 *
 * Constraints:
 *   - 1 <= accounts.length <= 1000
 *   - 2 <= accounts[i].length <= 10
 *   - 1 <= accounts[i][j].length <= 30
 *   - accounts[i][0] consists of English letters.
 *   - accounts[i][j] (for j > 0) is a valid email.
 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {

};

// Helper: normalize result for comparison (sort accounts by first email after name)
function normalize(result) {
  if (!result) return null;
  return result
    .map(acc => [acc[0], ...acc.slice(1).sort()])
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
      return a[1].localeCompare(b[1]);
    });
}

// Test 1: standard merge
const r1 = accountsMerge([
  ["John","johnsmith@mail.com","john_newyork@mail.com"],
  ["John","johnsmith@mail.com","john00@mail.com"],
  ["Mary","mary@mail.com"],
  ["John","johnnybravo@mail.com"]
]);
console.assert(
  JSON.stringify(normalize(r1)) === JSON.stringify(normalize([
    ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
    ["Mary","mary@mail.com"],
    ["John","johnnybravo@mail.com"]
  ])),
  'Test 1 failed'
);

// Test 2: no merging needed
const r2 = accountsMerge([["Alice","alice@x.com"],["Bob","bob@x.com"]]);
console.assert(
  r2 != null && r2.length === 2,
  'Test 2 failed: expected 2 separate accounts'
);

// Test 3: all same person
const r3 = accountsMerge([
  ["A","a@x.com","b@x.com"],
  ["A","b@x.com","c@x.com"]
]);
console.assert(
  r3 != null && r3.length === 1 && r3[0][0] === "A" && r3[0].slice(1).sort().join() === "a@x.com,b@x.com,c@x.com",
  'Test 3 failed: expected one merged account with 3 emails'
);

// Test 4: single account
const r4 = accountsMerge([["Solo","only@mail.com"]]);
console.assert(
  r4 != null && r4.length === 1 && r4[0][0] === "Solo" && r4[0][1] === "only@mail.com",
  'Test 4 failed: expected unchanged single account'
);

console.log('All tests passed for 721-accounts-merge');
