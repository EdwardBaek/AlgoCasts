// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {}

// Self Answer 1 
function selfPalindrome(str) {
  const reversedStr = str.split('').reduce((pre, cur) => cur + pre, '');
  return (str == reversedStr);
}

// Self Answer 2
function selfPalindrome2(str) {
  const reversedStr = str.split('').reverse().join('');
  return (str == reversedStr);
}

// Self Answer 3
function selfPalindrome3(str) {
  let reversedStr = '';
  for (let i=0; i < str.length; ++i) {
    reversedStr = str[i] + reversedStr;
  }
  return (str == reversedStr);
}

// Self Answer 4
function selfPalindrome4(str) {
  let reversedStr = '';
  for (let i in str) {
    reversedStr = str[i] + reversedStr;
  }
  return (str == reversedStr);
}

// Self Answer 5
function selfPalindrome5(str) {
  let reversedStr = '';
  for (let i in str) {
    reversedStr = str[i] + reversedStr;
  }
  return (str == reversedStr);
}

// Self Answer 6 with recursive
/* 
RATER   ROTOR
 ATE     OTO
 (X)      T
         (O)

If the string is made of no letters or just one letter,
then it is a palindrome. Otherwise, compare the first 
and last letters of the string.

If the first letters differ, then the string is not a 
palindrome. Otherwise, the first and last letters are 
the same. Strip them from the string, and determine 
whether the string that remains is a palindrome. Take 
the answer for the smaller string and use it as the 
answer for the original string.

https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/using-recursion-to-determine-whether-a-word-is-a-palindrome
*/
function selfPalindrome6(str) {
  if(str.length < 2) {
    return true;
  }
  if(str[0] == str[str.length -1]) {
    const slicedStr = str.slice(1, str.length -1);
    return selfPalindrome6(slicedStr);
  }
  return false;
}

// Answer 1
function palindrome1(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

// Answer 2 
function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


module.exports = selfPalindrome6;
