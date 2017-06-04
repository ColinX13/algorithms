//Sum of its factors
//Write a function that given a number returns the sum of all of its factors.
//input [2,4,10,24]
//output [3,7,18,60]

// Solution by Colin Xie @ColinX13

// @param {number[]} x - A number input
// @returns {number[]} sum - The sum of all the factors of a number
const solution = (x) => {
  let sum = 0
  for(let i = x; i >= 1; i--){
    if(x % i === 0){
      sum = sum + i
    };
  };
  return sum
};
module.exports = {
  solution
};

