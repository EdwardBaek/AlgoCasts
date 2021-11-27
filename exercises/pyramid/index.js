// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {}

function selfPyramid1 (n) {
  const getStr = (currentLineNum) => {
    const charLength = currentLineNum * 2 -1;
    const paddingNum = n - currentLineNum;
    const padding = ' '.repeat(paddingNum);
    return padding + '#'.repeat(charLength) + padding;
  }
  
  for(let i = 1; i <= n; ++i) {
    console.log(getStr(i));
  }
}

function selfPyramid2 (n) {
  const getStr = (currentLineNum) => {
    const charLength = currentLineNum * 2 -1;
    const paddingNum = n - currentLineNum;
    return '#'.repeat(charLength).padStart(charLength + paddingNum, ' ').padEnd(charLength + paddingNum * 2, ' ')
  }
  for(let i = 1; i <= n; ++i) {
    console.log(getStr(i));
  }
}

function selfPyramid3 (n, i=0, str='') {
  if( n == i ) {
    return;
  }
  
  const maxStrLength = 2 * n - 1;
  if( str.length == maxStrLength ) {
    console.log(str);
    return selfPyramid3(n, ++i, '');
  }
  
  const getAddingStr = () => {
    if( n == 1 ) {
      return '#';
    }
    const charLength = 2 * i + 1;
    const padding = n - i;
    if( padding  <= str.length && str.length <= padding + charLength ) {
      return '#';
    } 
    return ' ';
  }
  
  return selfPyramid3(n, i, str + getAddingStr());
}

module.exports = selfPyramid3;
