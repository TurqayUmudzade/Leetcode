const reverseList = (head) => {
  let reverse = null

  while (head) {
    let temp = head.next
    head.next = reverse
    reverse = head
    head = temp
  }

  return reverse
}

//recursion
var reverseList = function (head) {

  let ans = null
  const helper = (node, next) => {
    if (!node) return
    let temp = node.next
    node.next = ans
    ans = node
    helper(temp, ans)
  }

  helper(head, ans)
  return ans
};


var reverseList = function (head) {

  if (head == null || head.next == null) {
    return head;
  }
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};