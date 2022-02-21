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

    pop() {
        if (this.count == 0) {
            return {};
        }
        this.count--;
        delete this.storage[this.count];
    }
}

module.exports = Stack;