
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

//!READ THE QUESTION
function oddEvenList(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  while (odd.next && odd.next.next) {
    let tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
}

