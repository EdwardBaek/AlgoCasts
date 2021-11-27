// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibArray = [0, 1];
  for( let i = 2; i <= n; ++i ) {
    fibArray.push( parseInt(fibArray.slice(-2, -1)) + parseInt(fibArray.slice(-1)) );
  }
  return parseInt(fibArray.slice(-1));
}

function selfFib1(n) {
  const fibArray = [0, 1];
  for ( let i = 2; i <=n; ++i ) {
    const previousOfLastValue = fibArray[i - 2];
    const lastValue = fibArray[i - 1];
    fibArray.push(previousOfLastValue + lastValue);
  }
  return fibArray.pop();
}

function selfFib2(n) {
  if(n < 2) {
    return n;
  }
  return selfFib2(n - 2) + selfFib2(n - 1);
}

function slowFib(n) {
  if(n < 2) {
    return n;
  }
  return memoizeFib(n - 2) + memoizeFib(n - 1);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
    
    const result = fn.apply(this, args);
    cache[args] = result;
    
    return result;
  }
}
function fastFib(n) {
  const cache = [];
  const fibonacci = (n) => {
    if (n < 2) {
      return n;
    }
    const result1 = cache[n - 2] ? cache[n - 2] : fibonacci(n - 2);
    const result2 = cache[n - 1] ? cache[n - 1] : fibonacci(n - 1);
    const result = result1 + result2;
    cache[n] = result;
    return result;
  }
  return fibonacci(n);
}
const selfFib3 = fastFib;

const memoizeFib = memoize(slowFib);

module.exports = memoizeFib;
