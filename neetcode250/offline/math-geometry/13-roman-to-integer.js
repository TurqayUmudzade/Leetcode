/**
 * 13. Roman to Integer
 *
 * Given a roman numeral string, convert it to an integer.
 *
 * Symbol values: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.
 * Subtractive notation: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900.
 *
 * Examples:
 *   "III"     → 3
 *   "IV"      → 4
 *   "IX"      → 9
 *   "LVIII"   → 58
 *   "MCMXCIV" → 1994
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

};

// Tests
console.assert(romanToInt("III") === 3, "Test 1 failed");
console.assert(romanToInt("IV") === 4, "Test 2 failed");
console.assert(romanToInt("LVIII") === 58, "Test 3 failed");
console.assert(romanToInt("MCMXCIV") === 1994, "Test 4 failed");
