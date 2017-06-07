const expect = require('chai').expect;
let solution = require('../solutions/16').solution;
solution = require('../yourSolution').solution;

describe('check duplicates', () => {
  it('should return true since array has duplicates [1,2,3,3,4] ', () => {
    const array = [1,2,3,3,4];
    expect(solution(array)).to.be.true;
  });
  it('should return false because array does not have duplicates [1,2,3,4]', () => {
    const array = [1,2,3,4];
    expect(solution(array)).to.be.false;
  });
  it('should return false because array is emptyi []', () => {
    const array = [];
    expect(solution(array)).to.be.false;
  });
});
