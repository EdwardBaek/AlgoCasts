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
// function reverseInt(n) {
//     let isMinus = false;
//     if( n < 0 ){ isMinus = true; }

//     let tempArr = String(n).split('');
    
//     if( isMinus ){ tempArr.shift(); }
    
//     let reversedInt = parseInt( tempArr.reverse().join('') );
    
//     if( isMinus ){ reversedInt = reversedInt * -1; }
    
//     return reversedInt;
// }

// Answer 1
function reverseInt(n) {
    const reversed =  n
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

module.exports = reverseInt;
