/*
 * Generic n-ary tree
 * Generic tree are a collection of nodes where each node is a data structure that consists
 * of records and a list of references to its children (set of nodes).
 * Unlike linkedlist, each node stores the address of its child nodes. Every node stores address
 * of its children and the very first node's address stored in a separate pointer called root.
 *
 * The generic trees are the N-ary trees which have the folling properties:
 * - A node can have arbitrary number of children.
 * - The number of children is generally fixed for all nodes.
 * - The number of nodes for each node is not known in advance.
 */

class Node {
    constructor(data, n) {
        this.data = data;
        this.children = new Array(n);
    }
}

class Tree {
    constructor(N) {
        this.root = null;
        this.N = N;
    }

    insert (data, root) {
        if (this.root == null) {
            this.root = new Node(data, this.N);
            return this.root;
        }

        const node = root || this.root;
        let queue = [node];
        while (queue.length > 0) {
            let current = queue.shift();

            for (let i = 0; i < this.N; i++) {
                if (current.children[i] == null) {
                    current.children[i] = new Node(data, this.N);
                    return;
                } else {
                    queue.push(current.children[i]);
                }
            }
        }
        return root;
    }

    delete (data, root) {
        if (this.root == null) {
            return;
        }

        const node = root || this.root;
        let queue = [node];
        while (queue.length > 0) {
            let current = queue.shift();

            for (let i = 0; i < this.N; i++) {
                if (current.children[i] != null) {
                    if (current.children[i].data == data) {
                        current.children[i] = null;
                        return;
                    } else {
                        queue.push(current.children[i]);
                    }
                }
            }
        }
    }

    /*
     * Inorder traversal of n-ary tree
     * In this traversal, the root node is visited after the left most child and before the right most child.
     */
    inorder(root) {
        if (root == null) {
            return;
        }

        var noOfChild = root.children.length;
        for (let i = 0; i < noOfChild - 1; i++) {
            this.inorder(root.children[i]);
        }

        console.log("" + root.data + " ");

        if (noOfChild > 0) {
            this.inorder(root.children[noOfChild - 1]);
        }
    }

    /*
     * Preorder traversal of n-ary tree
     * In this traversal, the root node is visited before the left most child and before the right most child.
     */
    preorder(root) {
        if (root == null) {
            return;
        }

        var noOfChild = root.children.length;
        console.log("" + root.data + " ");

        for (let i = 0; i < noOfChild; i++) {
            this.preorder(root.children[i]);
        }
    }

    /*
     * Postorder traversal of n-ary tree
     * In this traversal, the root node is visited after the left most child and after the right most child.
     */
    postorder(root) {
        if (root == null) {
            return;
        }

        var noOfChild = root.children.length;
        for (let i = 0; i < noOfChild; i++) {
            this.postorder(root.children[i]);
        }

        console.log("" + root.data + " ");
    }

    /*
     * Level order traversal of n-ary tree
     * In this traversal, each level of the tree is visited one by one.
     */
    levelorder(root) {
        if (root == null) {
            return;
        }

        var queue = [root];
        while (queue.length > 0) {
            var current = queue.shift();
            console.log("" + current.data + " ");

            for (let i = 0; i < this.N; i++) {
                if (current.children[i] != null) {
                    queue.push(current.children[i]);
                }
            }
        }
    }

    printTree() {
        const printNode = (node, prefix = "", isLast = true) => {
            console.log(prefix + (isLast ? "└── " : "├── ") + node.data);
            const childPrefix = prefix + (isLast ? "   ": "│  ");
            const children = node.children.filter(child => child != null);

            children.forEach((child, index) => {
                const isLastChild = index === children.length - 1;
                printNode(child, childPrefix, isLastChild);
            });
        };

        console.log("Tree: ");
        printNode(this.root);
    }
}

function main() {
    var tree = new Tree(3);
    tree.root = tree.insert(10, null);
    tree.insert(20, tree.root);
    tree.insert(30, tree.root);
    tree.insert(40, tree.root);
    tree.insert(50, tree.root);
    tree.insert(60, tree.root);
    tree.insert(70, tree.root);
    tree.insert(80, tree.root);

    tree.printTree();

    console.log("Inorder Traversal: ");
    tree.inorder(tree.root);
    console.log("Preorder Traversal: ");
    tree.preorder(tree.root);
    console.log("Postorder Traversal: ");
    tree.postorder(tree.root);
    console.log("Levelorder Traversal: ");
    tree.levelorder(tree.root);
}

main();

