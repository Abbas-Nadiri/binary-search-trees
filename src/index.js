class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array, root = null) {
        this.array = array;
        this.root = root;
        
    }
    sortArray(arr) {    //sorts array and removes duplicates
        let sorted = arr.sort((a,b) => a - b);
        return [...new Set(sorted)];

    }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(tree.sortArray(tree.array));