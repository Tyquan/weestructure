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
        for (let foundElementIndex = 0; foundElementIndex <  this.listSize; foundElementIndex++) {
            if (this.dataStore[foundElementIndex] == elementToBeFound) {
                return foundElementIndex;
            }
        }
        return -1;
    }

    remove(elementToBeRemoved) {
        let foundElementIndex = this.find(elementToBeRemoved);
        if (foundElementIndex > -1) {
            this.dataStore.splice(foundElementIndex, 1);
            this.listSize--;
            return 1;
        }
        return -1;
    }
}

module.exports = List;