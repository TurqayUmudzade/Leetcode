var getIntersectionNode = function (headA, headB) {
  const nodes = new Set();

  let curr = headA;
  while (curr) {
    nodes.add(curr);
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (nodes.has(curr)) return curr;
    curr = curr.next;
  }
  return null;
};
