/*
 * Singly Linked List
 * A single linked list is a fundamental data structure, it consists of nodes
 * where each node contains a data field and a reference(link) to the next node in the list.
 * The next of the last node points to null.
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/*
 * Traversal of Singly Linked List
 * Traversal is the process of visiting each node in the linked list.
 *
 * steps:
 * 1. Create a temporary node pointing to head node.
 * 2. Traverse the list till temp != null
 * 3. Process data of each node visited.
 * 4. Move temp to next node.
 */

// Iterative Approach
// Time Complexity: O(n)
// Space Complexity: O(1)

function iterativeTraversel(head) {
    let curr = head;
    while (curr != null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

// Recursive Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function recursiveTriversal(head) {
    if (head == null) {
        return;
    }
    console.log(head.data);
    recursiveTriversal(head.next);
}

/*
 * Searching in Singly Linked List
 * Searching is the process of finding a node with a given value in the linked list.
 * 
 * steps:
 * 1. Create a temporary node pointing to head node.
 * 2. Traverse the list till temp != null
 * 3. If temp.data == key, return true
 * 4. Move temp to next node.
 */

// Iterative Approach
// Time Complexity: O(n)
// Space Complexity: O(1)

function iterativeSearch(head, key) {
    let curr = head;
    while (curr != null) {
        if (curr.data == key) {
            console.log("Found");
            return;
        }
        curr = curr.next;
    }
    console.log("Not Found");
    return;
}

// Recursive Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function recursiveSearch(head, key) {
    if (head == null) {
        console.log("Not Found");
        return;
    }
    if (head.data == key) {
        console.log("Found");
        return;
    }
    recursiveSearch(head.next, key);
}

/*
 * Length of Singly Linked List
 * Length is the number of nodes in the linked list.
 *
 * steps:
 * 1. Create a temporary node pointing to head node and counter.
 * 2. Traverse the list till temp != null
 * 3. Increment count by 1
 * 4. Move temp to next node.
 */

// Iterative Approach
// Time Complexity: O(n)
// Space Complexity: O(1)

function iterativeLength(head) {
    let count = 0;
    let curr = head;

    while (curr != null) {
        count++;
        curr = curr.next;
    }

    return count;
}

// Recursive Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function recursiveLength(head) {
    if (head == null) {
        return 0;
    }
    return 1 + recursiveLength(head.next);
}

/*
 * Insertion in Singly Linked List
 * Insertion is the process of adding a new node in the linked list.
 *
 * -> Insertion at the beginning of the linked list.
 *  steps:
 *  1. Create a new node with the given data.
 *  2. Make the next of new node point to head.
 *  3. Move head to point to new node.
 *
 *  -> Insertion at the end of the linked list.
 *  steps:
 *  1. Create a new node with the given data.
 *  2. Find the last node of the linked list.
 *  3. Make the next of last node point to new node.
 *
 *  -> Insertion at a given position in the linked list.
 *  steps:
 *  1. Create a new node with the given data.
 *  2. Find the node at the given position.
 *  3. Make the next of new node point to next of given node.
 *  4. Make the next of given node point to new node.
 */

// Insertion at the beginning of the linked list
// Time Complexity: O(1)
// Space Complexity: O(1)

function insertAtBeginning(head, data) {
    let curr = head;
    console.log(iterativeLength(head));
    let newNode = new Node(data, curr);
    console.log("Inserted");
    console.log (iterativeLength(newNode))
    return;
}

// Insertion at the end of the linked list
// Time Complexity: O(n)
// Space Complexity: O(1)

function insertAtEnd(head, data) {
    let curr = head;
    while (curr.next != null) {
        curr = curr.next;
    }

    console.log(iterativeLength(head));
    curr.next = new Node(data);
    console.log("Inserted");
    console.log(iterativeLength(head));
    return;
}

// Insertion at a given position in the linked list
// Time Complexity: O(n)
// Space Complexity: O(1)

function insertAtPosition(head, data, pos) {
    let curr = head;
    let count = 1;

    while (count < pos - 1) {
        curr = curr.next;
        count++;
    }

    console.log(iterativeLength(head));
    curr.next = new Node(data, curr.next);
    console.log("Inserted");
    console.log(iterativeLength(head));
    return;
}

/*
 * Deletion in Singly Linked List
 * Deletion is the process of removing a node from the linked list.
 *
 * -> Deletion at the beginning of the linked list.
 *  steps:
 *  1. Make head point to next of head.
 *  2. Return the data of the node to be deleted.
 *
 *  -> Deletion at the end of the linked list.
 *  steps:
 *  1. Find the last node of the linked list.
 *  2. Make the next of second last node point to null.
 *  3. Return the data of the node to be deleted.
 *
 *  -> Deletion at a given position in the linked list.
 *  steps:
 *  1. Find the node at the given position.
 *  2. Make the next of previous node point to next of given node.
 *  3. Return the data of the node to be deleted.
 */

// Deletion at the beginning of the linked list
// Time Complexity: O(1)
// Space Complexity: O(1)

function deleteAtBeginning(head) {
    let curr = head;
    head = head.next;
    console.log("Deleted: " + curr.data);
    return curr.data;
}

// Deletion at the end of the linked list
// Time Complexity: O(n)
// Space Complexity: O(1)

function deleteAtEnd(head) {
    let curr = head;
    while (curr.next.next != null) {
        curr = curr.next;
    }
    console.log("Deleted: " + curr.next.data);
    curr.next = null;
    return curr.data;
}

// Deletion at a given position in the linked list
// Time Complexity: O(n)
// Space Complexity: O(1)

function deleteAtPosition(head, pos) {
    let curr = head;
    let count = 1;
    while (count < pos - 1) {
        curr = curr.next;
        count++;
    }
    console.log("Deleted: " + curr.next.data);
    curr.next = curr.next.next;
    return curr.data;
}

/*
 * Modify in Singly Linked List
 * Modify is the process of changing the data of a node in the linked list.
 *
 * steps:
 * 1. Find the node at the given position.
 * 2. Change the data of the node.
 */

// Modify at a given position in the linked list
// Time Complexity: O(n)
// Space Complexity: O(1)

function modifyAtPosition(head, data, pos) {
    let curr = head;
    let count = 1;
    while (count < pos - 1) {
        curr = curr.next;
        count++;
    }

    console.log("Modified: " + curr.data);
    curr.data = data;
    return curr.data;
}

/*
 * Reverse a Singly Linked List
 * Reverse is the process of reversing the linked list.
 *
 * steps:
 * 1. Create three pointers prev, curr, next.
 * 2. Initialize prev as null, curr as head and next as null.
 * 3. Traverse the list till curr != null
 * 4. Make next point to next of curr.
 * 5. Make next of curr point to prev.
 * 6. Move prev to curr.
 * 7. Move curr to next.
 */

// Reverse a Singly Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)

function reverse(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}


function main() {
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);


    //console.log("Iterative Method: ")
    //iterativeTraversel(head);
    //iterativeSearch(head, 30);
    //console.log(iterativeLength(head));

    //insertAtBeginning(head, 5);
    //insertAtEnd(head, 50);
    //insertAtPosition(head, 25, 3);

    //console.log("Delete: ")
    //deleteAtBeginning(head);
    //deleteAtEnd(head);
    //deleteAtPosition(head, 2);

    //console.log("Recursive Method: ")
    //recursiveTriversal(head);
    //recursiveSearch(head, 30);
    //console.log(recursiveLength(head));

    //console.log("Modify: ")
    //modifyAtPosition(head, 25, 3);

    //console.log("Reverse: ")
    //head = reverse(head);
    //iterativeTraversel(head);
}

main();
