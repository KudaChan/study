/*
 * Linked list as queue
 *
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(cap) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.cap = cap;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.cap;
    }

    getSize() {
        return this.size;
    }

    enqueue(data) {
        if (this.isFull()){
            console.log('Queue is full');
            return;
        }

        if (this.isEmpty()) {
            this.head = new Node(data);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }

        if (this.size === 1) {
            this.tail = null;
        }

        let temp = this.head.data;

        this.head = this.head.next;
        this.size--;
        return temp;
    }

    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

function main() {
    let queue = new Queue(5);
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    console.log('-----------------');
    console.log(queue.getSize())
    queue.print();
    console.log('-----------------');
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log('-----------------');
    console.log(queue.getSize())
}

main();
