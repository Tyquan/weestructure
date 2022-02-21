// Last In First Out Structure Array Like

class Stack {
    constructor(startingArray = []){
        this.collection = startingArray;
        this.count = 0;
    }

    push(element){
        this.collection[this.count] = element;
        this.count++;
    }

    // pop() {
    //     if (this.count == 0) {
    //         return this.storage;
    //     }
    //     this.count--;
    //     delete this.storage[this.count];
    // }
}

module.exports = Stack;