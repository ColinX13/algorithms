// Take a string, returns an object that shows how many vowels and consonants are in the string

// Input: "head"
// Output:
// {vowel: 2
// consonant:3
// }

// Solutions by Colin Xie @ColinX13
/**
* @param {string} string - the string Input
* @param {object{}} letterObj - the object containing the number of consonants and vowels
*/
const solution = (string) => {
  let letterObj = {'vowel': 0,
                   'consonant': 0};
  for(let i = 0; i < string.length; i++){
    if(string[i] === 'a' ||  string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
      letterObj['vowel'] = letterObj['vowel'] + 1;
    }else{
      letterObj['consonant'] = letterObj['consonant'] + 1
    }
  }
  return letterObj;
};
module.exports = {
  solution
};
