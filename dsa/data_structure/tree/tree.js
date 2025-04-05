/*
 * Tree Data Structure
 * Tree data strucure is a non-linea hierarchical data structure that is used to represent the data in a tree-like structure.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.child = [];
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNode(data, parentData) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            const parent = this.findNode(this.root, parentData);
            parent.child.push(newNode);
        }
        return newNode;
    }

    findNode (node, data) {
        if (node.data === data) {
            return node;
        }
        for (let i = 0; i < node.child.length; i++) {
            const foundNode = this.findNode(node.child[i], data);
            if (foundNode) {
                return foundNode;
            }
        }
        return null;
    }


}
