const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(this.array);
    }

    sortArray(array) {    //sorts array and removes duplicates
        let sorted = array.sort((a,b) => a - b);
        return [...new Set(sorted)];

    }

    buildTree(array) {
        if (array.length == 0) {
            return null;
        } else if (array.length == 1) {
            return new Node(array[0]);
        }

        array = this.sortArray(array);
        let mid = Math.floor((array.length) / 2);

        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid + 1);

        let rootNode = new Node(array[mid]);
        rootNode.left = this.buildTree(leftHalf);
        rootNode.right = this.buildTree(rightHalf);

        return rootNode;
    }

    insert(value) {
        this._insertRecursively(this.root, value);
    }

    _insertRecursively(node, value) {
        if (value < node.data) {
            if (node.left) {
                return this._insertRecursively(node.left, value);
            };
            node.left = new Node(value);
            return;
        } else if (value > node.data) {
            if (node.right) {
                return this._insertRecursively(node.right, value);
            };
            node.right = new Node(value);
            return;
        }
        console.log("Cannot add duplicate value to tree.");
    }

    remove(value) {
        this.root = this._removeRecursively(this.root, value);
    }

    _removeRecursively(node, value) {
        if (node === null) {
            return null; //node not found
        }

        if (value > node.data) {
            node.right = this._removeRecursively(node.right, value);
        } else if (value < node.data) {
            node.left = this._removeRecursively(node.left, value);
        } else {
            if (node.left === null && node.right === null) { //leaf node case
                return null;
            }

            if (node.left === null) { //only one child case
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            //two children case
            let tempNode = this._findMinNode(node.right);
            node.data = tempNode.data;
            node.right = this._removeRecursively(node.right, tempNode.data);
        } 
        return node;
    }

    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}


let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(24);
