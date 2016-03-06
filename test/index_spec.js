var fn = require('../index.js')
  , expect = require('chai').expect;

describe('Test', function () {

  it('should return what its passed', function () {
    expect(fn.identity(2)).to.equal(2);
  });

});
