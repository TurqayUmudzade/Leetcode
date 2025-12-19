var hasCycle = function (head) {

  let fast = head
  while (fast && fast.next && fast.next.next) {
    head = head.next
    fast = fast.next.next
    if (head == fast) return true
  }
  return false
};
