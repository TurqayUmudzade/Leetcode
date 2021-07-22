/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {

    let tree = []
    let traverse = (root) => {
        if (!root) return
        traverse(root.left)
        tree.push(root.val)
        traverse(root.right)
    }

    traverse(root)
    this.arr = tree
    this.pointer = -1
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    this.pointer = this.pointer + 1
    return this.arr[this.pointer]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    if (this.arr.length - 1 > this.pointer) return true
    else return false
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */