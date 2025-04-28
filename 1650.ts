/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     parent: _Node | null
 *
 *     constructor(v: number) {
 *         this.val = v;
 *         this.left = null;
 *         this.right = null;
 *         this.parent = null;
 *     }
 * }
 */

function lowestCommonAncestor(p: _Node | null, q: _Node | null): _Node | null {
  let a = p
  let b = q
  while (a.val !== b.val) {
    a = a.parent ? a.parent : q
    b = b.parent ? b.parent : p
  }
  return a
}

