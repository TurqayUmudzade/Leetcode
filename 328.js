var oddEvenList = function (head) {
  if (!head) return null;

  const isEven = (n) => {
    if (n % 2 === 0) return true;
    else return false;
  };

  let cur = head;
  if (odd.next)
    while (cur) {
      if (!isEven(cur.val)) {
        odd.next;
      }
      cur = cur.next;
    }
};
