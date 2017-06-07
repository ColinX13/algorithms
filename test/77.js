const expect = require('chai').expect;
let solution = require('../solutions/77').solution;
// solution = require('./yourSolution').solution;

describe('vowel and consonant', () => {
  it('by has 0 vowel and 2 consonant', () => {
    expect(solution('by')).eql({'vowel': 0, 'consonant': 2});
  });
  it('head has 2 vowels and 2 consonants', () => {
    expect(solution('head')).eql({'vowel': 2, 'consonant': 2});
  });
  it('jacques has 3 vowels and 4 consonants', () => {
    expect(solution('jacques')).eql({'vowel': 3, 'consonant':4});
  });
 it('everything has 3 vowels and 7 consonants', () => {
    expect(solution('everything')).eql({'vowel': 3, 'consonant': 7});
  });
it('titans has 2 vowel and 4 consonant', () => {
    expect(solution('titans')).eql({'vowel': 2, 'consonant': 4});
  });
it('silence has 3 vowel and 4 consonant', () => {
    expect(solution('silence')).eql({'vowel': 3, 'consonant': 4});
  });
});
