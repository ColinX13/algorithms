// Takes in an array and finds the missing consecutive number

// input: [5,6,8,9]
// output: 7

// Solutions by Colin Xie @ColinX13

/**
 * @param {number[]} arr - an array of consecutive numbers inputted
 * @return {number} missingNum - the missing number or null if the array has no missing number
*/

const solution = (arr) => {
  let missingNum = null;
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] + 1 !== arr[i + 1]){
      missingNum = arr[i] + 1;
    }
  }
  return missingNum;
};

module.exports = {
  solution
};
