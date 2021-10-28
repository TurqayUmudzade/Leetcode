var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode()
  let p = ans
  let carry = 0
  let sum = 0
  while (l1 || l2) {
    sum = 0
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    if (carry === 1) {
      sum += carry
      carry = 0
    }
    if (sum > 9) {
      sum = sum % 10
      carry = 1
    }


    p.next = new ListNode(sum)
    p = p.next
  }

  if (carry === 1) {
    p.next = new ListNode(1)

  }

  return ans.next
};

