'use strict';
const chai = require('chai');
chai.should();
let Stack = require('./index');
describe('Stack', () => {
  describe('Instantiation', () => {
    let stack = new Stack();
    it('stack should be object', () => {
      (typeof stack === 'object').should.be.equals(true);
    });
    it('stack should be instance of Stack', () => {
      (stack instanceof Stack).should.be.equals(true);
    });
  });
  describe('Push Method', () => {
    it('stack length should be 0 when stack is empty', () => {
      let stack = new Stack();
      stack.length.should.be.equals(0);
      (stack.pop() === undefined).should.be.equals(true);
    });
    it('stack length should be 1 when stack has one element', () => {
      let stack = new Stack();
      stack.push(1);
      (stack.length == 1).should.be.equals(true);
    });
    it('stack push method should push element at the end of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      (stack.last.value == 3).should.be.equals(true);
      (stack.push() === undefined).should.be.equals(true);
    });
  });
  describe('Pop Method', () => {
    it('stack pop method should pop element from the end of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      (stack.pop().value == 2).should.be.equals(true);
    });
  });
});
