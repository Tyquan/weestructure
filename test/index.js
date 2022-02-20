const assert = require('assert');
const index = require('../index');

describe("Index Module", () => {
    describe("Index.js is a Object", () => {
        it('should return {}', () => {
            assert.deepEqual(index, {});
        });
    });
});