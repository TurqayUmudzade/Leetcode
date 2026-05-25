/**
 * 168. Excel Sheet Column Title
 *
 * Given an integer columnNumber, return its corresponding column title as it
 * appears in an Excel spreadsheet.
 *
 * Excel columns use a base-26 system with letters A-Z, but there is no zero
 * digit — column 1 is "A", 26 is "Z", 27 is "AA", 52 is "AZ", 53 is "BA", etc.
 *
 * Examples:
 *   1   → "A"
 *   26  → "Z"
 *   27  → "AA"
 *   701 → "ZY"
 *
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

};

// Tests
console.assert(convertToTitle(1) === "A", "Test 1 failed");
console.assert(convertToTitle(26) === "Z", "Test 2 failed");
console.assert(convertToTitle(27) === "AA", "Test 3 failed");
console.assert(convertToTitle(701) === "ZY", "Test 4 failed");
