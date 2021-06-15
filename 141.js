var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let cur = head;
  while (cur) {
    if (cur.hasVisited) return true;
    cur.hasVisited = true;
    cur = cur.next;
  }
  return false;
};
