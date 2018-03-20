var expect    = require("chai").expect;
var factorial = require("../app/factorial");

describe('test factorial of for zero', function () {
    it('should work for test data', function () {
        expect(factorial.factorial(0)).eql(1);
    });

    it('test factorial of for one', function () {
        expect(factorial.factorial(1)).eql(1);
    });

    it('test factorial for 4', function () {
        expect(factorial.factorial(4)).eql(24);
    });

});