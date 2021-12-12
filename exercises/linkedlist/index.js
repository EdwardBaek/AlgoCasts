// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

const { thisExpression } = require("@babel/types");

class Node {
  constructor(data, node) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);

    // Without insertAt
    // let nextNode = null;
    // if(this.head) {
    //   nextNode = this.head;
    // }
    // this.head = new Node(data, nextNode);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    return this.getAt(this.size() - 1);

    // without getAt
    // let node = this.head;
    // let last = node;
    // while(node) {
    //   last = node;
    //   node = node.next;
    // }
    // return last;
  }
  clear() {
    this.head = null
  }
  removeFirst() {
    this.head = this.head.next;
  }
  removeLast() {
    this.removeAt(this.size() -1);

    // without removeAt
    // if(!this.head) {
    //   return;
    // }
    // if(!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let previousNode = this.head;
    // let node = this.head.next;
    // while(node.next) {
    //   previousNode = node;
    //   node = node.next;
    // }
    // previousNode.next = null;
    // return;
  }
  insertLast(data) {
    const lastNode = this.getLast();
    if(lastNode) {
      lastNode.next = new Node(data, null);
    }else{
      this.head = new Node(data, null);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if(index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if(index < 0 || !this.head) {
      return;
    }
    if(index == 0) {
      this.head = this.head?.next;
      return;
    }
    const beforeAtNode = this.getAt(index - 1);
    beforeAtNode.next = beforeAtNode.next?.next;
  }
  insertAt(data, index) {
    if(!this.head || index === 0) {
      const nextNode = this.head ?? null;
      this.head = new Node(data, nextNode);
      return;
    }
    
    const beforeAtNode = this.getAt(index - 1) ?? this.getAt(this.size() - 1);
    const nextNode = beforeAtNode.next;
    const newNode = new Node(data, nextNode);
    beforeAtNode.next = newNode;
  }
  forEach(func) {
    let node = this.head;
    let counter = 0;
    while(node) {
      func(node, counter);
      node = node.next;
      counter++
    }
  }
  // generator and yield
  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
