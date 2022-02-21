const assert = require('assert');
const index = require('../index');

describe("Index Module", () => {
    describe("Index.js is a Object", () => {
        it('should return {}', () => {
            assert.deepEqual(index, {});
        });
    });
});

// const Stack = require('../libs/Stack');

// describe('Stack Module', () => {
//     console.log("Stack Class:", Stack);
//     describe('Stack.js is a Class Object', () => {
//         it("should be equal to a class", () => {
//             assert.equal(Stack, {});
//         });
//     })
// });