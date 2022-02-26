class List {
    constructor(startingArray = []) {
        this.dataStore = startingArray;
        this.listSize = this.dataStore.length;
        this.position = 0;
    }
}

module.exports = List;