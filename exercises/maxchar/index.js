// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Self Answer 1
function selfMaxChar1 (str) {
  const getCharMap = (str) => {
    let charMap = {};
    str.split('').map(char => {
      if(!charMap[char] ) {
        charMap[char] = 0;
      }
      charMap[char] += 1;
    });
    return charMap;
  }
  const getMaxChar = (charMap) => {
    let maxChar = undefined;
    let maxCharCnt = 0;
    Object.keys(charMap).map(key => {
      if(charMap[key] > maxCharCnt) {
        maxChar = key;
        maxCharCnt = charMap[key];
      }
    });
    return maxChar;
  }
  const charMap = getCharMap(str);
  return getMaxChar(charMap);
}

function maxChar(str) {
  let charMap = {};
  let maxChar = '';
  
  for( let char of str ) {
    if( charMap[char] ) {
      charMap[char] ++;
    } else {
      charMap[char] = 1;
    }
  }
  
  let cnt = 0;
  for( let key in charMap ) {
    if( charMap[key] > cnt ) {
      cnt = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

// function maxChar(str) {
//   const strArray = str.split('');
//   const uniqObj = {};
//   strArray.map( v => {
//     if( uniqObj[v] ) {
//       uniqObj[v] += 1;
//     } else {
//       uniqObj[v] = 1;
//     }
//   });
//   let max = 0;
//   let maxChar;
//   for( let key in uniqObj ) {
//     if ( uniqObj[key] > max ) { 
//       max = uniqObj[key];
//       maxChar = key;
//     }
//   }
//   return maxChar;
// }

module.exports = selfMaxChar1;
