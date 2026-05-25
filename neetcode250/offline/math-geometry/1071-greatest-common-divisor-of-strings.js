/**
 * 1071. Greatest Common Divisor of Strings
 *
 * For two strings s and t, we say "t divides s" if s can be formed by
 * concatenating t one or more times. Given two strings str1 and str2, return
 * the largest string t that divides both str1 and str2. If no such t exists,
 * return "".
 *
 * Examples:
 *   str1="ABCABC", str2="ABC"   → "ABC"
 *   str1="ABABAB", str2="ABAB"  → "AB"
 *   str1="LEET",   str2="CODE"  → ""
 *
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

};

// Tests
console.assert(gcdOfStrings("ABCABC", "ABC") === "ABC", "Test 1 failed");
console.assert(gcdOfStrings("ABABAB", "ABAB") === "AB", "Test 2 failed");
console.assert(gcdOfStrings("LEET", "CODE") === "", "Test 3 failed");
console.assert(gcdOfStrings("ABAB", "AB") === "AB", "Test 4 failed");
