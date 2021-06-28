var reverseList = function (head) {
  let prev = null;

  while (head) {
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }

  return prev;
};


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