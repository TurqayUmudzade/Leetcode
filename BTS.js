var treeify = require("treeify");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

let tree = new Tree();
// tree.add(1); //F
// tree.add(80); //B
// tree.add(120); //G
// tree.add(60); //A
// tree.add(90); //D
// tree.add(95); //E
// tree.add(85); //C
// tree.add(130); //I
// tree.add(125); //H

let arr = [1, 2, 2, 3, 4, 4, 3];

arr.forEach((e) => {
  tree.add(e);
});

const preorderTraversal = (root) => {
  let out = [];
  const traverse = (root) => {
    if (!root) return;
    out.push(root.val);
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return out;
};

const inorderTraversal = (root) => {
  let out = [];
  const traverse = (root) => {
    if (!root) return;
    traverse(root.left);
    out.push(root.val);
    traverse(root.right);
  };
  traverse(root);
  return out;
};

const postorderTraversal = (root) => {
  let out = [];

  const traverse = (root) => {
    if (!root) return;
    traverse(root.left);
    traverse(root.right);
    out.push(root.val);
  };
  traverse(root);
  return out;
};

var BFS = function (root) {
  let out = [];
  if (!root) return out;
  let q = [root];

  while (q[0]) {
    let temp = [];
    for (let i = 0; i < q.length; i++) {
      let curr = q.shift();
      temp.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    out.push(temp);
  }

  return out;
};

var levelOrder = function (root) {
  if (!root) return [];

  const q = [root];
  const levels = [];

  while (q.length !== 0) {
    const queueLength = q.length;
    const temp = [];
    for (let i = 0; i < queueLength; i++) {
      const current = q.shift();
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
      temp.push(current.val);
    }
    levels.push(temp);
  }
  return levels;
};

//using BFS
var maxDepth = function (root) {
  if (!root) return 0;
  let level = 1;
  let q = [root];
  while (q.length !== 0) {
    let size = q.length;

    for (let i = 0; i < size; i++) {
      let current = q.shift();
      if (current.right) q.push(current.right);
      if (current.left) q.push(current.left);
    }
    level++;
  }

  return level;
};

const depth = (root) => {
  if (!root) return 0;

  return Math.max(depth(root.left), depth(root.right)) + 1;
};

const isSymmetric = (root) => {
  if (!root) return false;
};
console.log(isSymmetric(tree.root));
