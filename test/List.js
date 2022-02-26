const assert = require('assert');
const expect = require('chai').expect;
const List = require('../libs/List');

describe("List Module", () => {

    describe("List is a class object", () => {

        const numberArray = [1,2,3,4,5];
        const numberList = new List(numberArray);
        const emptyList = new List();   
        
        it("should be equal to a class not {}", () => {
            assert.notEqual(List, {});
        });
        it("should have a dataStore property that takes a starting array by default", () => {
            assert.deepEqual(numberList.dataStore, numberArray);
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
        it("should have an append method", () => {
            expect(emptyList.append).to.be.a("function");
        });
        it("should have an find method", () => {
            expect(emptyList.find).to.be.a("function");
        });
        it("should have an remove method", () => {
            expect(emptyList.remove).to.be.a("function");
        });
    });

    describe("append method", () => {
        it("should add an element to the list", () => {
            const emptyList = new List();
            emptyList.append(6);
            assert.deepEqual(emptyList.dataStore, [6]);
        });
        it("should add 1 to listSize every time append is called", () => {
            const emptyList = new List();
            emptyList.append(6);
            assert.deepEqual(emptyList.listSize, 1);
        });
    });

    describe("find method", () => {
        it("should return a Number if Element found", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            const foundElementIndex = numberList.find(2);
            expect(foundElementIndex).to.be.a("number");
        });
        it("should return -1 if Element not found", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            const foundElementIndex = numberList.find(10);
            assert.deepEqual(foundElementIndex, -1);
        });
        it("should return the index if Element found", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            const foundElementIndex = numberList.find(5);
            assert.deepEqual(foundElementIndex, 4);
        });
    });

    describe("remove method", () => {
        it("should return -1 if Element not found", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            const foundElementIndex = numberList.remove(10);
            assert.deepEqual(foundElementIndex, -1);
        });
        it("should return 1 if Element found", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            const foundElementIndex = numberList.remove(2);
            assert.deepEqual(foundElementIndex, 1);
        });
        it("should remove the Element if the index is found", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            numberList.remove(2);
            assert.deepEqual(numberList.dataStore, [1,3,4,5]);
        });
        it("should subtract 1 from listSize every time remove is called", () => {
            const numberArray = [1,2,3,4,5];
            const numberList = new List(numberArray);
            numberList.remove(2);
            assert.deepEqual(numberList.listSize, 4);
        });
    });

});