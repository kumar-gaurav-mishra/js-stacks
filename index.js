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
    this.length = 0;
  }
  push(value) {
    if (!value) return undefined;
    let node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      let first = this.first;
      this.last = node;
      while (first.next) {
        first = first.next;
      }
      first.next = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let node = this.first;
    let prev = null;
    while (node) {
      if (node.next) {
        prev = node;
      }
      node = node.next;
    }
    this.length -= 1;
    node = prev.next;
    this.last = prev;
    prev.next = null;
    return node;
  }
}
module.exports = Stack;
