var removeElements = function (head, val) {
  if (!head) return null;
  let cur = head;

  while (cur) {
    if (cur?.next?.val == val) cur.next = cur?.next?.next;
    else cur = cur.next;
  }

  if (head.val == val) return head.next;
  return head;
};
