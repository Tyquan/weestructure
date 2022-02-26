const assert = require('assert');
const expect = require('chai').expect;
const List = require('../libs/List');

describe("List Module", () => {

    describe("List is a class object", () => {
        it("should be equal to a class not {}", () => {
            assert.notEqual(List, {});
        });
        it("should have a dataStore property that takes a starting array by default", () => {
            const list = new List([1,2,3,4,5]);
            assert.deepEqual(list.dataStore, [1,2,3,4,5]);
        });
        it("should have a dataStore property that returns [] if no startingArray is given by default", () => {
            const list = new List();
            assert.deepEqual(list.dataStore, []);
        });
        it("should have a listSize property set to dataStore.length by default", () => {
            const list = new List();
            assert.deepEqual(list.listSize, list.dataStore.length);
        });
        it("should have a position property set to 0 by default", () => {
            const list = new List();
            assert.deepEqual(list.position, 0);
        });
    });

});