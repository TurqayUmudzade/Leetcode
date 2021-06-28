function main(root) {
  if (!root) return;

  let q = [root];
  let levels = []
  while (q.length > 0) {
    let len = q.length
    levels.push(q)
    for (let i = 0; i < len; i++) {
      let cur = q.shift()
      if (cur.left) q.push(cur.left)
      if (cur.rigth) q.push(cur.rigth)
    }
  }
  return levels
}
