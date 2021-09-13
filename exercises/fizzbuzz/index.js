// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Self Answer 1
function selfFizzBuzz1 (n) {
  const isFizz = (n) => {
    return (n % 3 == 0 );
  }
  const isBuzz = (n) => {
    return (n % 5 == 0 );
  }
  let result = '';
  for( let i=1; i <= n; ++i ) {
    if(isFizz(i) && isBuzz(i)) {
      result = 'fizzbuzz';
    }else if(isFizz(i)) {
      result = 'fizz';
    }else if(isBuzz(i)) {
      result = 'buzz';
    }else{
      result = i;
    }
    console.log(result);
  }
}

// Self Answer2
function selfFizzBuzz2 (n) {
  const isFizz = (n) => {
    return (n % 3 == 0 );
  }
  const isBuzz = (n) => {
    return (n % 5 == 0 );
  }
  const printConsole = (i) => {
    if(isFizz(i) && isBuzz(i)) {
      result = 'fizzbuzz';
    }else if(isFizz(i)) {
      result = 'fizz';
    }else if(isBuzz(i)) {
      result = 'buzz';
    }else{
      result = i;
    }
    console.log(result);
  }
  Array.from({length: n}, (_, i) => i + 1).map(i => {
    printConsole(i);
  });
}

// Self Answer3
function selfFizzBuzz3 (n, i=1) {
  if(i > n) {
    return;
  }
  const isFizz = (n) => {
    return (n % 3 == 0 );
  }
  const isBuzz = (n) => {
    return (n % 5 == 0 );
  }
  const printConsole = (i) => {
    if(isFizz(i) && isBuzz(i)) {
      result = 'fizzbuzz';
    }else if(isFizz(i)) {
      result = 'fizz';
    }else if(isBuzz(i)) {
      result = 'buzz';
    }else{
      result = i;
    }
    console.log(result);
  }
  printConsole(i)
  selfFizzBuzz3(n, i+1);
}

function fizzBuzz(n) {
  for( let i = 1; i <= n; ++i ) {
    let result;
    if ( i % 15 === 0 ) {
      result = 'fizzbuzz';
    } else if ( i % 3 === 0 ) {
      result = 'fizz';
    } else if ( i % 5 === 0 ) {
      result = 'buzz';
    } else {
      result = i;
    }
    console.log(result); 
  }
}

module.exports = selfFizzBuzz3;
