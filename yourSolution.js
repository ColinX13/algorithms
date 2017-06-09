// Name
// Take a string and reverse the spelling

const solution = (str) => {
  let newStr = "";
  for(let i = str.length - 1; i > -1; i--){
    newStr = newStr + str[i];
  }
  //  console.log(newStr);
  return newStr;
};

module.exports = {
  solution
};
