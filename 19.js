var removeNthFromEnd = function (head, n) {
  let slow = head, fast = head

  while (n-- > 0) fast = fast.next

  if (!fast) return head.next;

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next

  return head
};