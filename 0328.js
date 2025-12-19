function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

//!READ THE QUESTION
function headEvenList(head) {
  let p = head
  if (!head) return head;

  let even = head.next;
  while (head.next && head.next.next) {
    let tmp = head.next;
    head.next = head.next.next;
    head = head.next;
    tmp.next = head.next;
  }
  head.next = even;
  return p;
}

