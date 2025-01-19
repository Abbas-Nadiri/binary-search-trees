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
}



let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.buildTree(tree.array));