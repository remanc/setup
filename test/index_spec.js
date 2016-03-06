var fn = require('../index.js')
  , expect = require('chai').expect;

describe('Test', function () {

  it('identity should return what its passed', function () {
    expect(fn.identity(2)).to.equal(2);
  });

  it('subtract should subtract', function () {
    expect(fn.subtract(2, 1)).to.equal(1);
  });



});
