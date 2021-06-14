let Node = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return -1;

  let cur = this.head;
  for (let i = 0; i < index; i++) cur = cur.next;
  return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  this.size++;
  return this;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let node = new Node(val);

  if (this.size < index) return;
  if (index == 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) cur = cur.next;

  node.next = cur.next ? cur.next : null;
  cur.next = node;

  this.size++;

  return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return this;
  }

  let cur = this.head;

  for (let i = 0; i < index - 1; i++) cur = cur.next;
  cur.next = cur.next?.next;

  if (!cur.next) this.tail = cur;

  this.size--;

  return this;
};

let list = new MyLinkedList();
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
//console.log(list.get(1));
console.log(list);
list.deleteAtIndex(1);
//console.log(list.get(1));
console.log(list);

// var param_1 = obj.get(1);
// obj.addAtHead(val);
// obj.addAtTail(val);
// obj.deleteAtIndex(index);
