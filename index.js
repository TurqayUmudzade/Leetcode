function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  let out = [];

  function checkNode(node) {
    if (node !== null && typeof node.val === "number") out.push(node.val);
    if (node.left !== null) checkNode(node.left);
    if (node.right !== null) checkNode(node.right);
  }

  if (root !== null && root !== undefined) checkNode(root);
  return out;
};

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) {
        return this;
      }
      if (val < current.val) addSide("left");
      else addSide("right");
    }
  }
}

let tree = new BST();
tree.add(1);
tree.add(null);
tree.add(2);
tree.add(3);

console.log(preorderTraversal(tree.root));
