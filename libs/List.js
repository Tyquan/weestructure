class List {
    constructor(startingArray = []) {
        this.dataStore = startingArray;
        this.listSize = this.dataStore.length;
        this.position = 0;
    }

    append(elementToAppend) {
        this.dataStore[this.listSize++] = elementToAppend;
    }
}

module.exports = List;