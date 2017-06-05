const expect = require('chai').expect;
let solution = require('../yourSolution').solution;
//solution = require('./yourSolution').solution;

describe('missing number', () => {
  it('the missing number is 7', () => {
    expect(solution([5,6,8,9])).eql(7);
  });
  it('there is no missing number', () => {
    expect(solution([7,8,9])).eql(null);
  });
  it('the missing number is 100', () => {
    expect(solution([99,101,102,103])).eql(100);
  });
  it('the missing number is 1023', () => {
    expect(solution([1020,1021,1022,1024])).eql(1023);
  });
  it('the missing number is -21', () => {
    expect(solution([-24,-23,-22,-20,-19])).eql(-21)
  });
});
