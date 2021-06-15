var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let cur = head;
  while (cur) {
    if (cur.hasVisited) return cur;
    cur.hasVisited = true;
    cur = cur.next;
  }
  return null;
};
