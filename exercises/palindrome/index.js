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
// function palindrome(str) {
//     const reversedStr = str.split('').reduce( ( pre, cur )=> cur + pre, '');
//     return ( str == reversedStr );
// }

// Answer 1
// functionf palindrome(str){
//     const reversed = str
//     .split('')
//     .reverse()
//     .join('');

//     return str === reversed;
// }

// Answer 2 
function palindrome(str){
    return str.split('').every((char, i) => {
        return char === str[ str.length - i -1];
    });
}


module.exports = palindrome;
