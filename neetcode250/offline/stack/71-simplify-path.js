/**
 * 71. Simplify Path
 *
 * Given a string `path`, which is an absolute path (starting with '/') to a
 * file or directory in a Unix-style file system, convert it to the simplified
 * canonical path.
 *
 * Rules:
 *   - A single period '.' refers to the current directory.
 *   - A double period '..' refers to the parent directory.
 *   - Multiple consecutive slashes are treated as a single slash.
 *   - The canonical path must start with '/' and not end with '/' (unless it
 *     is the root directory).
 *
 * Approach: split on '/', use a stack. Push non-empty, non-'.', non-'..'
 * components. On '..', pop from the stack if non-empty.
 *
 * Example:
 *   "/home/"          → "/home"
 *   "/../"            → "/"
 *   "/home//foo/"     → "/home/foo"
 *   "/a/./b/../../c/" → "/c"
 *
 * Constraints:
 *   1 <= path.length <= 3000
 *   path consists of English letters, digits, '.', '/', or '_'.
 *   path is a valid absolute Unix path.
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

};

// --- Tests ---
console.assert(simplifyPath("/home/")          === "/home",     'Test 1 failed');
console.assert(simplifyPath("/../")            === "/",         'Test 2 failed');
console.assert(simplifyPath("/home//foo/")     === "/home/foo", 'Test 3 failed');
console.assert(simplifyPath("/a/./b/../../c/") === "/c",        'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
