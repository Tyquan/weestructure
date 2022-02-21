const assert = require('assert');
const expect = require('chai').expect;
const Stack = require('../libs/Stack');

describe('Stack Module', () => {

    describe('Stack.js is a Class Object', () => {
        it("should be equal to a class not {}", () => {
            assert.notEqual(Stack, {});
        });
        it("should have a an empty collection property by default", () => {
            const stack = new Stack();
            assert.deepEqual(stack.collection, []);
        });
        it("should have a count set to the length of the collection by default", () => {
            const sampleArray = [1,2,3,4,5];
            const stack = new Stack(sampleArray);
            assert.deepEqual(stack.count, stack.collection.length);
        });
        it('Should take an array as an argument on initialization and save it to the collection',
        () => {
            const sampleArray = [1,2,3,4,5];
            const stack = new Stack(sampleArray);
            assert.deepEqual(stack.collection, sampleArray);
        });
        it("should have a push method", () => {
            const stack = new Stack();
            expect(stack.push).to.be.a("function");
        })
        it("should have a pop method", () => {
            const stack = new Stack();
            expect(stack.pop).to.be.a("function");
        });
    });

    describe("push method", () => {
        it("should add an element to the collection array", () => {
            const stack = new Stack();
            stack.push(6);
            assert.deepEqual(stack.collection, [6]);
        });
        it("count should add 1 every time push is called", () => {
            const stack = new Stack();
            stack.push(6);
            assert.deepEqual(stack.count, 1);
        });
    });

    describe("pop method", ()=> {
        it("return [] if no elements are in the stack collection", () => {
            const stack = new Stack();
            stack.pop();
            assert.deepEqual(stack.collection, []);
        });
        it("should decrease the count everytime the pop method is called", () => {
            const stack = new Stack();
            stack.push(6);
            stack.pop();
            assert.deepEqual(stack.count, 0);
        });
        it("should remove the last element on the stack collection", () => {
            const sampleArray = [1,2,3]
            const stack = new Stack(sampleArray);
            stack.push(6);
            stack.pop();
            assert.deepEqual(stack.collection, sampleArray);
        });
    });

});