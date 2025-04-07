/*
 * Binary Tree
 * Binary Tree is a non-linear and hierarchical data structure where each node has at most two children.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data, root) {
        if (this.root === null) {
            this.root = new Node(data);
            return this.root;
        }

        let current = root || this.root;
        let queue = [current];

        while(queue.length > 0) {
            let node = queue.shift();

            if (node.left === null) {
                node.left = new Node(data);
                return node.left;
            } else {
                queue.push(node.left);
            }

            if (node.right === null) {
                node.right = new Node(data);
                return node.right;
            } else {
                queue.push(node.right);
            }
        }
    }

    delete(data, root) {
        if (this.root === null) {
            return null;
        }

        let current = root || this.root;
        let queue = [current];

        while (queue.length > 0) {
            let node = queue.shift();

            if (node.left !== null) {
                if (node.left.data === data) {
                    node.left = null;
                    return;
                } else {
                    queue.push(node.left);
                }
            }

            if (node.right !== null) {
                if (node.right.data === data) {
                    node.right = null;
                    return;
                } else {
                    queue.push(node.right);
                }
            }
        }
    } 
}

/*
 * Full Binary Tree
 * A full binary tree is a special type of binary tree in which 
 * every parent node/internal node has either two or no children.
 */
class FullBinaryTree {
    constructor(root) {
        this.root = null;
    }

    isFullBinaryTree(root) {
        if (root === null) {
            return true;
        }

        if(root.left === null && root.right === null) {
            return true;
        }

        if (root.left !== null && root.right !== null) {
            return this.isFullBinaryTree(root.left) && this.isFullBinaryTree(root.right);
        }

        return false;
    }
}

/*
 * Degenerate Tree
 * A degenerate tree is the tree having a single child either left or right.
 */

class DegenerateTre {
    constructor(root) {
        this.root = null;
    }

    insertRight(data, root) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }

        let current = root || this.root;
        if (current.right === null) {
            current.right = new Node(data);
            return current.right;
        } else {
            return this.insertRight(data, current.right);
        }
    }

    insertLeft(data, root) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }

        let current = root || this.root;
        if (current.left === null) {
            current.left = new Node(data);
            return current.left;
        } else {
            return this.insertLeft(data, current.left);
        }
    }
}

/*
 * Binary Search Tree
 * A binary search tree is a binary tree in which for each node, 
 * the values of all the keys in the left subtree are less than the key value of the node, 
 * and the values of all the keys in the right subtree are greater than the key value of the node.
 */

class BST {
    constructor(root) {
        this.root = null;
    }

    insert (data, root = this.root) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }

        if (data === root.data) {
            return root;
        }

        if (data < root.data) {
            if (root.left === null) {
                root.left = new Node(data);
                return root.left;
            } else {
                return this.insert(data, root.left);
            }
        }

        if (data > root.data) {
            if (root.right === null) {
                root.right = new Node(data);
                return root.right;
            } else {
                return this.insert(data, root.right);
            }
        }
    }

    delete(data, root = this.root) {
        if (root === null) {
            return null;
        }

        if (data < root.data) {
            root.left = this.delete(data, root.left);
        } else if (data > root.data) {
            root.right = this.delete(data, root.right);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.data = this.minValue(root.right);
            root.right = this.delete(root.data, root.right);
        }

        return root;
    }

    minValue(node) {
        if (node === null) {
            return null;
        }

        if (node.left === null) {
            return node.data;
        }
        return this.minValue(node.left);
    }

    maxValue(node) {
        if (node === null) {
            return null;
        }

        if (node.right === null) {
            return node.data;
        }
        return this.maxValue(node.right);
    }

    search(data, root = this.root) {
        if (root == null) {
            return root;
        }

        if (root.data === data) {
            return root;
        }

        if (data < root.data) {
            return this.search(data, root.left);
        }
        return this.search(data, root.right);
    }

    floor(data, root = this.root) {
        if (root === null) {
            return null;
        }

        if (root.data === data) {
            return root;
        }

        if (data < root.data) {
            return this.floor(data, root.left);
        }

        let floor = this.floor(data, root.right);
        if (floor !== null) {
            return floor;
        }
        return root.data;
    }

    ceil(data, root = this.root) {
        if (root === null) {
            return null;
        }

        if (root.data === data) {
            return root;
        }

        if (data > root.data) {
            return this.ceil(data, root.right);
        }

        let ceil = this.ceil(data, root.left);
        if (ceil !== null) {
            return ceil;
        }
        return root.data;
    }
}

/*
 * AVL Tree
 * An AVL tree is a self-balancing binary search tree where the difference between
 * heights of left subtree and right subtree is not more than one for all nodes.
 */

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    getBalance(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rightRotate(node) {
        let newNode = node.left;
        let tempRight = newNode.right;

        newNode.right = node;
        node.left = tempRight;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        newNode.height = Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right)) + 1;

        return newNode;
    }

    leftRotate(node) {
        let newNode = node.right;
        let tempLeft = newNode.left;

        newNode.left = node;
        node.right = tempLeft;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        newNode.height = Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right)) + 1;

        return newNode;
    }

    insert(data, root = this.root) {
        if (root === null) {
            const newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            }
            return newNode;
        }

        if ( data < root.data) {
            root.left = this.insert(data, root.left);
        } else if (data > root.data) {
            root.right = this.insert(data, root.right);
        } else {
            return root;
        }

        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        let balance = this.getBalance(root);

        if (balance > 1 && data < root.left.data) {
            return this.rightRotate(root);
        }

        if (balance < -1 && data > root.right.data) {
            return this.leftRotate(root);
        }

        if (balance > 1 && data > root.left.data) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        if (balance < -1 && data < root.right.data) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    delete(data, root = this.root) {
        if (root === null) {
            return null;
        }

        if (data < root.data) {
            root.left = this.delete(data, root.left);
        } else if (data > root.data) {
            root.right = this.delete(data, root.right);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.data = this.minValue(root.right);
            root.right = this.delete(root.data, root.right);
        }

        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        let balance = this.getBalance(root);

        if (balance > 1 && data < root.left.data) {
            return this.rightRotate(root);
        }

        if (balance < -1 && data > root.right.data) {
            return this.leftRotate(root);
        }

        if (balance > 1 && data > root.left.data) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        if (balance < -1 && data < root.right.data) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    minValue(node) {
        if (node === null) {
            return null;
        }

        if (node.left === null) {
            return node.data;
        }
        return this.minValue(node.left);
    }

    search(data, root = this.root) {
        if (root == null) {
            return root;
        }

        if (root.data === data) {
            return root;
        }

        if (data < root.data) {
            return this.search(data, root.left);
        }
        return this.search(data, root.right);
    }
}

class Traversal {
    constructor (root) {
        this.root = root;
        this.resultInOrder = [];
        this.resultPreOrder = [];
        this.resultPostOrder = [];
        this.resultBfs = [];
    }

    preOrder(node = this.root) {
        if (node === null) {
            return;
        }

        this.resultPreOrder.push(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);

        return this.resultPreOrder;
    }

    inOrder(node = this.root) {
        if (node === null) {
            return;
        }

        this.inOrder(node.left);
        this.resultInOrder.push(node.data);
        this.inOrder(node.right);

        return this.resultInOrder;
    }

    postOrder(node = this.root) {
        if (node === null) {
            return;
        }

        this.postOrder(node.left);
        this.postOrder(node.right);
        this.resultPostOrder.push(node.data);

        return this.resultPostOrder;
    }

    bfs(node = this.root) {
        if (node === null) {
            return;
        }

        let queue = [node];

        while (queue.length > 0) {
            let current = queue.shift();
            this.resultBfs.push(current.data);
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }

        return this.resultBfs;
    }
}

function search(node, data) {
    if (node === null) {
        return false;
    }

    if (node.data === data) {
        return true;
    }

    return search(node.left, data) || search(node.right, data);
}

function treeImplement() {
    const tree = new BinaryTree();
    tree.insert(1);
    tree.insert(2, tree.root);
    tree.insert(3, tree.root);
    tree.insert(4, tree.root);
    tree.insert(5, tree.root);
    tree.insert(6, tree.root);
    tree.insert(7, tree.root);

    console.log("Traversal: \n")
    const traversal = new Traversal(tree.root);
    console.log(traversal.preOrder());
    console.log(traversal.inOrder());
    console.log(traversal.postOrder());
    console.log(traversal.bfs());

    const isFullBinaryTree = new FullBinaryTree(tree.root);
    console.log(isFullBinaryTree.isFullBinaryTree(tree.root));

    tree.delete(5, tree.root);

    console.log("Traversal After Delete: \n")
    const traversalAfterDelete = new Traversal(tree.root);
    console.log(traversalAfterDelete.preOrder());
    console.log(traversalAfterDelete.inOrder());
    console.log(traversalAfterDelete.postOrder());
    console.log(traversalAfterDelete.bfs());

    console.log(isFullBinaryTree.isFullBinaryTree(tree.root))
}

function bstImplement () {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5, bst.root);
    bst.insert(15, bst.root);
    bst.insert(3, bst.root);
    bst.insert(7, bst.root);
    bst.insert(13, bst.root);
    bst.insert(17, bst.root);
    bst.insert(1, bst.root);
    bst.insert(4, bst.root);

    traversal = new Traversal(bst.root);
    console.log(traversal.preOrder());
    console.log(traversal.inOrder());
    console.log(traversal.postOrder());

    console.log(bst.search(1, bst.root));
    console.log(bst.floor(12, bst.root));
    console.log(bst.ceil(12, bst.root));
    console.log(bst.minValue(bst.root));
    console.log(bst.maxValue(bst.root));
    bst.delete(1, bst.root);
    console.log(traversal.postOrder());
}

function avlImplement() {
    const avl = new AVLTree();
    avl.root = avl.insert(10);
    avl.root = avl.insert(20, avl.root);
    avl.root = avl.insert(30, avl.root);
    avl.root = avl.insert(40, avl.root);
    avl.root = avl.insert(50, avl.root);
    avl.root = avl.insert(25, avl.root);

    const traversal = new Traversal(avl.root);
    console.log(traversal.preOrder());
    console.log(traversal.inOrder());
    console.log(traversal.postOrder());
    console.log(traversal.bfs());

    console.log(avl.search(10, avl.root));

    traversalAfterDelete = new Traversal(avl.delete(10, avl.root));
    console.log(traversalAfterDelete.postOrder());
}

function main() {
    // treeImplement();
    // bstImplement();
    avlImplement();
}

main();
