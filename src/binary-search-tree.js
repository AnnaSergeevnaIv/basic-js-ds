const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    this.rootElement = addInside(this.rootElement, data)

    function addInside(node, value) {

      if (node === null) return new Node(value)

      if (node.data === value) return root
      if (node.data > value) {
        node.left = addInside(node.left, value)
      } else if (node.data < value) {
        node.right = addInside(node.right, value)
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false
  }

  find(data) {
    function lookingFor(node, value) {
      let smth = null;
      if (node === null) return null;

      if (node.data === value) return node;

      if (node.data < value) {
        smth = lookingFor(node.right, value)
      } else if (node.data > value) {
        smth = lookingFor(node.left, value)
      }

      return smth
    }
    return lookingFor(this.rootElement, data)
  }

  remove(data) {
    if (!this.find(data)) return;

    this.rootElement = this.removeData(this.rootElement, data);
  }

  removeData(node, value) {

    if (node.data === value) {
      if (!node.left && !node.right) {
        return null;
      }
      if (node.right && node.left) {
        console.log('node.right', node.right, 'node.left', node.left, node)
        let minValue = this.minimum(node.right)
        console.log('minValue', minValue)
        this.removeData(node, minValue)
        node.data = minValue
        return node;

      } else {
        return node.left ?? node.right
      }
    } else if (node.data > value) {
      node.left = this.removeData(node.left, value)
    } else node.right = this.removeData(node.right, value)

    return node;
  }
  minimum(node) {
    function lookingForMin(node) {
      if (!node) return node;
      if (node.left === null) {
        return node.data
      } else {
        return lookingForMin(node.left)
      }
    }
    return lookingForMin(node)
  }


  min() {
    return this.minimum(this.rootElement)
  }

  max() {
    function lookingForMax(node) {
      if (!node) return node;
      if (node.right === null) {
        return node.data
      } else {
        return lookingForMax(node.right)
      }
    }
    return lookingForMax(this.rootElement)
  }
}

module.exports = {
  BinarySearchTree
};