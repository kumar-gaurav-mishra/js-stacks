'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    if (!value) return undefined;
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let first = this.first;
      this.first = node;
      this.first.next = first;
    }
    this.size += 1;
    return this.size;
  }
  pop() {
    if (this.size === 0) return undefined;
    let node = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.slze -= 1;
    return node.value;
  }
}
module.exports = Stack;
