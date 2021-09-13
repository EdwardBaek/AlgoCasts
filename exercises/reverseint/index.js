// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Self Answer 1
function selfReverseInt1(n) {
  let isMinus = false;
  if (n < 0) { isMinus = true; }

  let tempArr = String(n).split('');

  if (isMinus) { tempArr.shift(); }

  let reversedInt = parseInt(tempArr.reverse().join(''));

  if (isMinus) { reversedInt = reversedInt * -1; }

  return reversedInt;
}

// Self Answer 2
function selfReverseInt2(n) {
  const isMinus = (n) => {
    return (n < 0);
  };
  if(n == 0) {
    return n;
  }
  const reversedInt = parseInt(n.toString(10).split('').reverse().join(''));
  return isMinus(n) ? reversedInt * -1 : reversedInt;
  
}

// Self Answer 3
function selfReverseInt3(n) {
  const isMinus = (n) => {
    return (n < 0);
  };
  if(n == 0) {
    return n;
  }
  const str = n.toString(10);
  let reversedStr = '';
  
  for(let i=0; i < str.length; ++i) {
    reversedStr = str[i] + reversedStr;
  }
  const reversedInt = parseInt(reversedStr);
  return isMinus(n) ? reversedInt * -1 : reversedInt;
  
}

// Answer 1
function reverseInt(n) {
  const reversed = n
    .toString().
    split('').
    reverse().
    join('');

  // if( n < 0 ){
  //     return parseInt(reversed) * -1;
  // }
  // return parseInt(reversed);

  return parseInt(reversed) * Math.sign(n);
}
// TODO: understand clearly about spect of each function such as parseInt
//      parseInt('400') -> 400
//      parseInt('004') -> 4
//      parseInt('004-') -> 4

module.exports = selfReverseInt3;
