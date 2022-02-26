const assert = require('assert');
const expect = require('chai').expect;
const List = require('../libs/List');

describe("List Module", () => {

    describe("List is a class object", () => {
        it("should be equal to a class not {}", () => {
            assert.notEqual(List, {});
        });
        it("should have a listSize property set to 0 by default", () => {
            const list = new List();
            assert.deepEqual(list.listSize, 0);
        });
    });

});