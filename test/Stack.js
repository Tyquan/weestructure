const assert = require('assert');
const Stack = require('../libs/Stack');

describe('Stack Module', () => {
    describe('Stack.js is a Class Object', () => {
        console.log("Stack:", Stack);
        it("should be equal to a class not {}", () => {
            assert.notEqual(Stack, {});
        });
        it("should have a an empty collection property", () => {
            const stack = new Stack();
            assert.deepEqual(stack.collection, []);
        });
    });
});