const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.first = null;
    this.stack = [];
  }
  push(element) {
    this.first = element
    this.stack.push(element)
  }

  pop() {
    this.first = this.stack[1]
    return this.stack.pop()
  }

  peek() {
    return this.first;
  }
}

module.exports = {
  Stack
};
