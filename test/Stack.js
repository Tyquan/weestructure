const assert = require('assert');
const Stack = require('../libs/Stack');

describe('Stack Module', () => {
    console.log("Stack Class:", Stack);
    describe('Stack.js is a Class Object', () => {
        it("should be equal to a class", () => {
            assert.deepEqual(Stack, {});
        });
    })
});