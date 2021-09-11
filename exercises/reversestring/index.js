// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Answer 1
function reverse1(str) {   
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    return str
        .split('')
        .reverse()
        .join('');
}

// Answer 2 without reverse funciton
function reverse2(str) {   
    let reversed = '';
    
    // Avoid use below for loop
    // for ( var i = 0; i < str.length; i++ ){
    // }

    for ( let character of str ) {
        reversed = character + reversed;
    }
    return reversed;
}

// Answer 3
function reverse3(str) {
    return str.split('').reduce( ( reversed, character ) => {
        return character + reversed;
    } ,'' );
    debugger;
    return str.split('').reduce(  (rev, char) => char + rev, '');
}
// debug mode
// node inspect index.js


// Answer 2 without reverse funciton
// Array.prototype.reverse()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
function reverse2withoutReverse(str) {   
    let reversed = '';
    
    // Avoid use below for loop
    // for ( var i = 0; i < str.length; i++ ){
    // }

    for ( let character of str ) {
        reversed = character + reversed;
        debugger;
    }
    return reversed;
}

/*
1. set debugger in the code
2. get into debugger
    node inspect script.js
3. Continue by command continue or c
4. check by repl
*/


function reverse(str) {   
    // self 1
    return str.split("").reverse().join("");
}

module.exports = reverse;
