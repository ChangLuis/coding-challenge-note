class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
};

class Stack {
  constructor() {
    this.last = null;
    this._size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.last) {
      this.last = newNode;
    } else {
      const temp = this.last;

      this.last.next = newNode;
      newNode.prev = temp;
      this.last = newNode;
    }

    return this._size++
  }

  pop() {
    if (!this.last) return null;

    const temp = this.last;

    this.last = temp.prev;
    this.last.next = null;
    this._size--;

    return temp.value
  }

  size() {
    return this._size
  }
};

const myStack = new Stack();

console.log(myStack)
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop());
console.log(myStack.size());
