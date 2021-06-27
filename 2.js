function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//overflow
var addTwoNumbers = function (l1, l2) {
  let n = 0;
  for (let i = 0, cur = l1; cur; i++) {
    n = cur.val * 10 ** i + n;
    cur = cur.next;
  }

  for (let i = 0, cur = l2; cur; i++) {
    n = cur.val * 10 ** i + n;
    cur = cur.next;
  }
  let answer = new ListNode();
  let cur = answer;

  if (n === 0) return new ListNode();

  while (n > 0) {
    cur.next = new ListNode(n % 10);
    n = (n - (n % 10)) / 10;
    cur = cur.next;
  }

  return answer.next;
};

var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};
