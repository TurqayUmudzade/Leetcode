const isSameTree = (a, b) => {
  if (!a && !b) return true
  if (!a || !b) return false
  if (a.val !== b.val) return false
  else return isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
}
