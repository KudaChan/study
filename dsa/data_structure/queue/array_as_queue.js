/*
 * Array as Queue
 * Queue is a linear data structure which follows a particular order in which the operations are performed.
 * The order is First In First Out (FIFO).
 */

// Simple Array as Queue
//
// Time Complexity:
//  isEmpty() - O(1)
//  enqueue() - O(1)
//  dequeue() - O(n)
//  getFront() - O(1)
//  getRear() - O(1)

class ArrayAsQueue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(ele) {
        this.queue.push(ele);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        }
        return null;
    }

    getFront() {
        if (!this.isEmpty()) {
            return this.queue[0];
        }
        return null;
    }

    getRear() {
        if (!this.isEmpty()) {
            return this.queue[this.queue.length - 1];
        }
        return null;
    }

    showQueue() {
        console.log(this.queue);
    }
}

// Circular Array as Queue
//
// Time Complexity:
//  isEmpty() - O(1)
//  enqueue() - O(1)
//  dequeue() - O(1)
//  getFront() - O(1)
//  getRear() - O(1)

class CircularArrayAsQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    enqueue(ele) {
        if(this.isFull()) {
            console.log('Queue is full');
            return;
        }

        if(this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = ele;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }

        const ele = this.queue[this.front];
        this.front = (this.front + 1) % this.size;

        if(this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }

        return ele;
    }

    getFront() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }

        return this.queue[this.front];
    }

    getRear() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }

        return this.queue[this.rear];
    }

    showQueue() {
        console.log(this.queue);
    }
}


function main() {
    console.log('Simple Array as Queue');
    const queue = new ArrayAsQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    queue.showQueue();
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    queue.showQueue();

    console.log('Circular Array as Queue');
    const circularQueue = new CircularArrayAsQueue(5);
    circularQueue.enqueue(10);
    circularQueue.enqueue(20);
    circularQueue.enqueue(30);
    circularQueue.enqueue(40);
    circularQueue.enqueue(50);
    circularQueue.showQueue();
    console.log(circularQueue.dequeue());
    console.log(circularQueue.dequeue());
    circularQueue.enqueue(60);
    circularQueue.enqueue(70);
    circularQueue.showQueue();
}

main();
