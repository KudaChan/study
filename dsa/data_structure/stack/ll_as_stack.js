/*
 * Linked list as stack
 *
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    push(ele) {
        let node = new Node(ele);

        if (this.isEmpty()) {
            this.top = node;
            return;
        }
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        let temp = this.top.data;
        this.top = this.top.next;
        return temp;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        return this.top.data;
    }

    print() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

function main() {
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    console.log("---------------")
    stack.print();
    console.log("---------------")
    console.log(stack.pop());
    console.log("Peek: "+stack.peek());
    console.log("---------------")
    stack.print();
}

main();
