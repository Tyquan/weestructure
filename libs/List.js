class List {
    constructor(startingArray = []) {
        this.dataStore = startingArray;
        this.listSize = this.dataStore.length;
        this.position = 0;
    }

    append(elementToAppend) {
        this.dataStore[this.listSize++] = elementToAppend;
    }

    find(elementToBeFound) {
        for (let i = 0; i <  this.listSize; i++) {
            if (this.dataStore[i] == elementToBeFound) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = List;