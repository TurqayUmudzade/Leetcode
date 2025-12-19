function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0
  const dfs = (root) => {
    if (!root) return 0
    let left = dfs(root.left)
    let right = dfs(root.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }

  dfs(root)
  return max
}

