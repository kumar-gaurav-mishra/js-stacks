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
      this.last = node;
      while (first.next) {
        first = first.next;
      }
      first.next = node;
    }
    this.size += 1;
    return this.size;
  }
  pop() {
    if (this.size === 0) return undefined;
    let node = this.first;
    let prev = null;
    if (this.size <= 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
    } else {
      while (node) {
        if (node.next) {
          prev = node;
        }
        node = node.next;
      }
      this.size -= 1;
      node = prev.next;
      this.last = prev;
      prev.next = null;
    }
    return node.value;
  }
}
module.exports = Stack;
