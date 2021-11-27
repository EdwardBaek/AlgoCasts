// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function selfVowels2(str) {
  const regex = /[aeiou]/gi;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

function selfVowels1(str) {
  const regex = /[a|e|i|o|u]/i;
  let vowelCount = 0;
  for (let char of str) {
    if(char.match(regex)){
      vowelCount++;
    }
  }
  return vowelCount;
}

function vowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for( let char of str ) {
    if( vowels.includes(char.toLowerCase()) ) vowelCount ++;
  }
  return vowelCount;
}

module.exports = selfVowels2;
