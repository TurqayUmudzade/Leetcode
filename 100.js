var isSameTree = function (a, b) {
  if (!a || !b) return true;

  let out1 = []
  let out2 = []
  const traverse = (root, arr) => {
    if (!root) return
    traverse(root.left, arr)
    arr.push(root.val)
    traverse(root.right, arr)
  }

  traverse(a, out1)
  traverse(b, out2)
  if (out1.length === out2.length && out1.every((value, index) => value === out2[index])) return true
  else return false
};


