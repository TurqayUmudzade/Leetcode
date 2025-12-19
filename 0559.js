//BFS
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  let q = [root];
  while (q.length > 0) {
    let n = q.length;
    for (let i = 0; i < n; i++) {
      let cur = q.shift();
      for (let node of cur.children) q.push(node);
    }
    max++;
  }
  return max;
};
//DFS Recursion
var maxDepth = function (root) {
  if (!root) return 0;
  let max_depth = 0;

  for (const children of root.children) {
    max_depth = Math.max(max_depth, maxDepth(children));
  }
  return max_depth + 1;
};

///DFS helper function
var maxDepth = function (root) {
  if (!root) return 0;
  let max_depth = 0;

  const dsf = (node, depth) => {
    max_depth = Math.max(max_depth, depth);
    for (const children of node.children) {
      dsf(children, depth + 1);
    }
  };

  dsf(root, 1);
  return max_depth;
};
