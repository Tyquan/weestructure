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

    peek() {
        return this.collection[this.count - this.count ];
    }

    clear(){
        this.collection = [];
        this.count = this.collection.length;
    }
}

module.exports = Stack;