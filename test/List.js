const assert = require('assert');
const expect = require('chai').expect;
const List = require('../libs/List');

describe("List Module", () => {

    const numberList = new List([1,2,3,4,5]);
    const emptyList = new List();

    describe("List is a class object", () => {
        it("should be equal to a class not {}", () => {
            assert.notEqual(List, {});
        });
        it("should have a dataStore property that takes a starting array by default", () => {
            assert.deepEqual(numberList.dataStore, [1,2,3,4,5]);
        });
        it("should have a dataStore property that returns [] if no startingArray is given by default", () => {
            assert.deepEqual(emptyList.dataStore, []);
        });
        it("should have a listSize property set to dataStore.length by default", () => {
            assert.deepEqual(numberList.listSize, numberList.dataStore.length);
        });
        it("should have a position property set to 0 by default", () => {
            assert.deepEqual(emptyList.position, 0);
        });
    });

});