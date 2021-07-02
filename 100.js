var isSameTree = function (a, b) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


var isSameTree = function (a, b) {
  if (!a && !b) return true
  if (!a || !b) return false
  let q = [a, b]

  while (q.length > 0) {
    let t1 = q.shift()
    let t2 = q.shift()
    if (!t1 && !t2) continue
    else if (!t1 || !t2 || t1.val !== t2.val) return false

    q.push(t1.right)
    q.push(t2.right)
    q.push(t1.left)
    q.push(t2.left)
  }

  return true
};

const isSameTree = (a, b) => {
  let tree1 = []
  let tree2 = []

  const traverse = (root, arr) => {
    if (!root) return
    traverse(root.left)
    traverse(root.right)
    arr.push(root.val)

  }
}