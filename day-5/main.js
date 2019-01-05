class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        } else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        } else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        } else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        } else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value) {
        if (this.value == value) {
            return true
        } else if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value)
        } else if (value <= this.value && this.leftChild) {
            return this.leftChild.findNode(value)
        } else {
            return false
        }
    }

    findfather(value) {
        if (this.leftChild.value == value || this.rightChild.value == value) {
            return this
        } else if (value > this.value && this.rightChild) {
            return this.rightChild.findfather(value)
        } else if (value <= this.value && this.leftChild) {
            return this.leftChild.findfather(value)
        } else {
            return false
        }
    }

    findCommonParent(value1, value2) {
        let father1 = this.findfather(value1)
        let father2 = this.findfather(value2)
        console.log(father1)
        console.log(father2)
        if (father1.value == father2.value) {
            return father1
        } else if (father1.value < father2.value && father2.leftChild) {
            console.log("yse")
            return this.rightChild.findCommonParent(father1.leftChild , father2)
        }// else if (father1 <= father2 && father1.leftChild) {
        //     return this.rightChild.findCommonParent(father1.leftChild , father2)
        // }
    }
}

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))

//Use the following to test
// console.log(bSTree.findNode("H")) // should print true
// console.log(bSTree.findNode("G")) // should print true
// console.log(bSTree.findNode("Z")) // should print false
// console.log(bSTree.findNode("F")) // should print false
// console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!

console.log(bSTree.findCommonParent("B", "I")) //should return "H"
// console.log(bSTree.findCommonParent("B", "G") )//should return "E"
// console.log(bSTree.findCommonParent("B", "L")) //should return "J"
// console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
// console.log(bSTree.findCommonParent("E", "H")) //should return "H"