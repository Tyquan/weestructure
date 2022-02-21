const assert = require('assert');
const index = require('../index');
const Stack = require('../libs/Stack');

describe("Index Module", () => {
    console.log("Index Module", index)
    describe("Index.js is a Object", () => {
        it('should return {}', () => {
            assert.deepEqual(index, {});
        });
    });
});