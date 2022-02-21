// Last In First Out Structure Array Like

class Stack {
    constructor(startingArray = []){
        this.collection = startingArray;
        this.count = 0;
        this.storage = {}
    }

    push(element){
        this.storage[this.count] = element;
        this.count++;
    }
    
}

module.exports = Stack;