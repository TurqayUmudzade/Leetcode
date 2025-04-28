// /
//   Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function verticalOrder(root: TreeNode | null): number[][] {
  let q = [[root, 0]]
  let distanceMap = new Map<number, number[]>()
  while (q.length) {
    let len = q.length
    for (let i = 0; i < len; i++) {
      const [node, position] = q.shift()
      distanceMap.set(position, [
        ...(distanceMap.has(position) ? distanceMap.get(position) : []),
      ])
      if (node?.left) q.push([node.left, position - 1])
      if (node?.right) q.push([node.right, position + 1])
    }
  }

  const sortedList = [...distanceMap.entries()].sort((a, b) => a[0] - b[0])
  const out: number[][] = []
  for (const element of sortedList) {
    out.push(element[1])
  }
  return out
}

