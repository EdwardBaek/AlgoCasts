// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Self Answer 1
function selfAnagrams1 (stringA, stringB) {
  const refineData = (str) => {
    return str.toLowerCase().match(/[a-z]/ig).sort().join('');
  }
  return (refineData(stringA) == refineData(stringB));
}

// Self Answer 2
function selfAnagrams2 (stringA, stringB) {
  
}

function anagrams(stringA, stringB) {
  const reform = (string) =>string.toLowerCase().match(/[a-z]/gi)
    .sort().join('');
  let arrayA = reform(stringA);
  let arrayB = reform(stringB);
  return arrayA === arrayB;
}

module.exports = selfAnagrams2;
