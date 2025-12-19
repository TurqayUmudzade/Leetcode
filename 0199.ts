function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  let out = []
  const q = [root]
  while (q.length) {
    const len = q.length
    const rightNode = q[len - 1]
    out.push(rightNode.val)
    for (let i = 0; i < len; i++) {
      let cur = q.shift()
      if (cur.left) q.push(cur.left)
      if (cur.right) q.push(cur.right)
    }
  }

  return out
}
