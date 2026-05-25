/**
 * 125. Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Examples:
 *   Input:  s = "A man, a plan, a canal: Panama"
 *   Output: true
 *   Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 *   Input:  s = "race a car"
 *   Output: false
 *   Explanation: "raceacar" is not a palindrome.
 *
 *   Input:  s = " "
 *   Output: true
 *   Explanation: After removing non-alphanumeric characters, s is an empty string "".
 *
 * Constraints:
 *   - 1 <= s.length <= 2 * 10^5
 *   - s consists only of printable ASCII characters
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
};

// Tests
console.assert(isPalindrome("A man, a plan, a canal: Panama") === true, "Test 1 failed");
console.assert(isPalindrome("race a car") === false, "Test 2 failed");
console.assert(isPalindrome(" ") === true, "Test 3 failed");
console.assert(isPalindrome("0P") === false, "Test 4 failed");

console.log("All tests passed for 125-valid-palindrome");
