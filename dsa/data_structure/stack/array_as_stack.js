/*
 * Stack
 * Stack is a linear data structure which follows LIFO prinicple.
 * To implement stack using an array, and treat its end as top.
 * We have to use push and pop methods of array.
 *
 * steps:
 * 1. Initialize an array.
 * 2. Use the end of the array to represent the top of the stack.
 * 3. Implement push, pop, peek, isEmpty, isFull and size.
 */

// Fixed size array as stack
class fixedArrayStack {
    constructor(size) {
        this.stack = new Array(size);
        this.size = size;
        this.top = -1;
    }

    push(ele) {
        if (this.top === this.size - 1) {
            console.log("Stack is full");
            return;
        }

        this.stack[++this.top] = ele;
        return;
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }

        let popData = this.stack[this.top--];
        return popData;
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }

        return this.stack[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.size - 1;
    }

    size() {
        return this.top + 1;
    }

    print() {
        console.log(this.stack);
    }
}

// Dynamic array as stack
class dynamicArrayStack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    push(ele) {
        this.stack[++this.top] = ele;
        return;
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }

        let popData = this.stack[this.top--];
        return popData;
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }

        return this.stack[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    size() {
        return this.top + 1;
    }

    print() {
        console.log(this.stack);
    }
}


function main() {
    let stack = new fixedArrayStack(5);
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.push(60);

    console.log("Fixed size stack");
    stack.print();
    console.log("-------------------------");
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());

    console.log("-------------------------");
    stack.print();

    console.log("Dynamic size stack");
    stack = new dynamicArrayStack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.push(60);

    stack.print();
    console.log("-------------------------");
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());

    console.log("-------------------------");
    stack.print();
}

main();
