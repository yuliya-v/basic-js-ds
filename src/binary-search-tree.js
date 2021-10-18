const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

module.exports = class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (!node) return new Node(data);
    if (node.data === data) return;
    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    }
    if (data > node.data) {
      node.right = this.addNode(node.right, data);
    }
    return node;
  }

  has(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (!node) return false;
    if (data < node.data) {
      return this.search(node.left, data);
    }
    if (data > node.data) {
      return this.search(node.right, data);
    }
    return true;
  }

  find(data, node = this.rootNode) {
    if (!node) return null;
    if (data < node.data) {
      return this.find(data, node.left);
    }
    if (data > node.data) {
      return this.find(data, node.right);
    }
    return node;
  }

  remove(data) {
    this.rootNode = this.removeElem(this.rootNode, data);
  }

  removeElem(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.removeElem(node.left, data);
      return node;
    } 
    if (data > node.data) {
      node.right = this.removeElem(node.right, data);
      return node;
    } 

    if (data === node.data) {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      if (node.left && node.right) {

        let substitute = node.right;
        while (substitute.left) {
          substitute = substitute.left;
        }
        node.data = substitute.data;
        node.right = this.removeElem(node.right, substitute.data);
        return node;
      }
    }

  }

  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode; 
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode; 
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

}