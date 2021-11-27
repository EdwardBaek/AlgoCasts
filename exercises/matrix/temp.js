const matrix = require('./index');

// matrix(2);
const n = 3;
const isValidPoint = (x, y) => {
  if( x < 0 || y < 0 || n <= x || n <= y) {
    return false;
  }
  return true;
}

// console.log('0, 0', isValidPoint(0, 0));
// console.log('0, 1', isValidPoint(0, 1));
// console.log('0, 2', isValidPoint(0, 2));
// console.log('1, 0', isValidPoint(1, 0));
// console.log('1, 1', isValidPoint(1, 1));
// console.log('1, 2', isValidPoint(1, 2));
// console.log('2, 0', isValidPoint(2, 0));
// console.log('2, 1', isValidPoint(2, 1));
// console.log('2, 2', isValidPoint(2, 2));

matrix(6);