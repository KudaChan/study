/*
 * Doubly Linked List
 * A doubly linked list is a linked list that has two pointers,
 * one pointing to the next node and the other pointing to the previous node.
 * The main advantage of a doubly linked list is that it can be traversed in both directions.
 */

class Node {
    constructor(next = null, data, prev = null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/*
 * Traversal in doubly linked list
 * Traversal in a Doubly Linked List is similar to that of a Singly Linked List.
 * The only difference is that we can traverse in both directions.
 *
 * stps:
 * 1. Create a temporary node and assign the head to it.
 * 2. Traverse the list until the temporary node is not null.
 * 3. Print the data of the temporary node.
 * 4. Move the temporary node to the next node.
 */

// Traversal in a Doubly Linked List Iterative
// Time Complexity: O(n)
// Space Complexity: O(1)

function iterativeTraversalForward(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

function iterativeTraversalBackward(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.prev;
    }
}

// Traversal in a Doubly Linked List Recursive
// Time Complexity: O(n)
// Space Complexity: O(n)

function recursiveTraversalForward(head) {
    if (head === null) {
        return;
    }
    console.log(head.data);
    recursiveTraversalForward(head.next);
}

function recursiveTraversalBackward(head) {
    if (head === null) {
        return;
    }
    console.log(head.data);
    recursiveTraversalBackward(head.prev);
}

/*
 * Length of a Doubly Linked List
 * The length of a Doubly Linked List is the number of nodes in the list.
 *
 * steps:
 * 1. Create a temporary node and assign the head to it.
 * 2. Traverse the list until the temporary node is not null.
 * 3. Increment the count.
 * 4. Move the temporary node to the next node.
 * 5. Return the count.
 */

// Length of a Doubly Linked List Iterative
// Time Complexity: O(n)
// Space Complexity: O(1)

function iterativeLength(head) {
    let current = head;
    let count = 0;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}

// Length of a Doubly Linked List Recursive
// Time Complexity: O(n)
// Space Complexity: O(n)

function recursiveLength(head) {
    if (head === null) {
        return 0;
    }
    return 1 + recursiveLength(head.next);
}

/*
 * Insertion in a Doubly Linked List
 * Insertion in a Doubly Linked List is similar to that of a Singly Linked List.
 *
 * steps:
 * 1. Create a new node.
 * 2. If the list is empty, make the new node as head and return.
 * 3. If the list is not empty, traverse the list until the last node.
 * 4. Insert the new node.
 * 5. Return the head.
 */

// Insertion at the beginning of a Doubly Linked List
// Time Complexity: O(1)
// Space Complexity: O(1)

function insertAtBeginning(head, data) {
    const newNode = new Node(null, data, null);
    if (head === null) {
        head = newNode;
        return head;
    }
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return head;
}

// Insertion at the end of a Doubly Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)

function insertAtEnd(head, data) {
    const newNode = new Node(null, data, null);
    if (head === null) {
        head = newNode;
        return head;
    }
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    return head;
}

// Insertion at a given position in a Doubly Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)

function insertAtPosition(head, data, position) {
    const newNode = new Node(null, data, null);
    if (head === null) {
        head = newNode;
        return head;
    }
    let current = head;
    let count = 1;
    while (current.next !== null && count < position - 1) {
        current = current.next;
        count++;
    }
    newNode.next = current.next;
    current.next = newNode;
    newNode.prev = current;
    return head;
}

/*
 * Deletion in a Doubly Linked List
 * Deletion in a Doubly Linked List is similar to that of a Singly Linked List.
 *
 * steps:
 * 1. If the list is empty, return.
 * 2. If the list is not empty, traverse the list until the node to be deleted is found.
 * 3. Delete the node.
 * 4. Return the head.
 */

// Deletion at the beginning of a Doubly Linked List
// Time Complexity: O(1)
// Space Complexity: O(1)

function deletionAtBeginning(head) {
    if (head === null) {
        return;
    }
    head = head.next;
    head.prev = null;
    return head;
}

// Deletion at the end of a Doubly Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)

function deletionAtEnd(head) {
    if (head === null) {
        return;
    }
    let current = head;
    while (current.next.next !== null) {
         current = current.next;
    }
    current.next = null;
    return head;
}

// Deletion at a given position in a Doubly Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)

function deletionAtPosition(head, position) {
    if (head === null) {
        return;
    }
    let current = head;
    let count = 1;
    while (current.next !== null && count < position - 1) {
        current = current.next;
        count++;
    }
    current.next = current.next.next;
    return head;
}

function main() {
    const head = new Node(null, 10, null);
    const node2 = new Node(null, 20, null);
    const node3 = new Node(null, 30, null);
    const node4 = new Node(null, 40, null);
    const node5 = new Node(null, 50, null);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    node5.prev = node4;
    node4.prev = node3;
    node3.prev = node2;
    node2.prev = head;

    //console.log("Iterative Traversal")
    //iterativeTraversalForward(head);
    //iterativeTraversalBackward(node5);
    //console.log("Length of the list: " + iterativeLength(head));

    //console.log("Recursive Traversal")
    //recursiveTraversalForward(head);
    //recursiveTraversalBackward(node5);
    //console.log("Length of the list: " + recursiveLength(head));

    //console.log("Insertion at the beginning");
    //const head1 = insertAtBeginning(head, 5);
    //iterativeTraversalForward(head1);
    //console.log("Length of the list: " + iterativeLength(head1));

    //console.log("Insertion at the end");
    //const head2 = insertAtEnd(head1, 55);
    //iterativeTraversalForward(head2);
    //console.log("Length of the list: " + iterativeLength(head2));

    //console.log("Insertion at a given position");
    //const head3 = insertAtPosition(head2, 15, 3);
    //iterativeTraversalForward(head3);
    //console.log("Length of the list: " + iterativeLength(head3));

    //console.log("Deletion at the beginning");
    //const head4 = deletionAtBeginning(head);
    //iterativeTraversalForward(head4);

    //console.log("Deletion at the end");
    //const head5 = deletionAtEnd(head4);
    //iterativeTraversalForward(head5);

    //console.log("Deletion at a given position");
    //const head6 = deletionAtPosition(head5, 3);
    //iterativeTraversalForward(head6);
}

main();
