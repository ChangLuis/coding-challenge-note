class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Stack {
  #size;

  constructor() {
    this.first = null;
    this.last = null;
    this.#size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;

      this.first = newNode;
      this.first.next = temp;
    }

    return this.#size ++
  }

  pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) this.last = null
    this.first = this.first.next;
    this.#size --;

    return temp.value
  }

  size() {
    return this.#size
  }
};

const myStack = new Stack();

console.log(myStack)
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop());
console.log(myStack.size());
