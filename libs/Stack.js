// Last In First Out Structure Array Like

class Stack {
    constructor(startingArray = []){
        this.collection = startingArray;
        this.count = this.collection.length;
    }

    push(element){
        this.collection[this.count] = element;
        this.count++;
    }

    pop() {
        return this.collection[--this.count];
    }
}

module.exports = Stack;