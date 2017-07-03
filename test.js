'use strict';

const userCode = require('./src.js');
const expect = require('chai').expect;

describe('Sorting function', function() {
  it('should sort an array of integers from lowest to highest', function() {
    const sortedArray = userCode.sorted([1, 123, 31, 32, 8]);
    expect(sortedArray[0]).to.equal(1);
    expect(sortedArray[1]).to.equal(8);
    expect(sortedArray[2]).to.equal(31);
    expect(sortedArray[3]).to.equal(32);
    expect(sortedArray[4]).to.equal(123);
  });
});
