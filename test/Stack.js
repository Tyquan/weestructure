const assert = require('assert');
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
        it("should have an empty storage property by default", () => {
            const stack = new Stack();
            assert.deepEqual(stack.storage, {});
        });
        it("should have a count set to zero property by default", () => {
            const stack = new Stack();
            assert.deepEqual(stack.count, 0);
        });
        it('Should take an array as an argument on initialization and save it to the collection',
        () => {
            const sampleArray = [1,2,3,4,5];
            const stack = new Stack(sampleArray);
            assert.deepEqual(stack.collection, sampleArray);
        });
        it("should have a push method", () => {
            const stack = new Stack();
            stack.push(6);
            assert.deepEqual(stack.storage, {'0': 6});
        })

        // it("push method should take arrays", () => {
        //     const sampleArray = [1,2,3,4,5];
        //     const stack = new Stack(sampleArray);
        //     stack.push([6,7,8,9,10]);
        //     assert.deepEqual(stack.collection, [1,2,3,4,5,6,7,8,9,10]);
        // })
        // it("", () => {
        //     // const sampleArray = [1,2,3,4,5];
        //     // const stack = new Stack(sampleArray);
        //     // stack.push(6);
        //     // assert.deepEqual(stack.collection, [1,2,3,4,5,6]);
        // });
    });
});