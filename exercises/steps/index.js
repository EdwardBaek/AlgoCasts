// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function selfSteps1(n) {
  const getPrintStr = (i, length) => {
    return new Array(i).fill('#').join('').padEnd(length, ' ');
  };
  for( let i = 1; i <= n; ++i) {
    console.log(getPrintStr(i, n));
  }
}

function selfSteps2(n) {
  const getPrintStr = (i, length) => {
    return ('#').repeat(i).padEnd(length, ' ');
  };
  for( let i = 1; i <= n; ++i) {
    console.log(getPrintStr(i, n));
  }
}

function selfSteps3(n) {
  const getPrintStr = (n, i) => {
    const remainNum = n - i;
    const item1 = '#';
    const item2 = ' ';
    return item1.repeat(i) + item2.repeat(remainNum);
  };
  for( let i = 1; i <= n; ++i) {
    console.log(getPrintStr(n, i));
  }
}

function selfSteps4(n) {
  const getSpaceStr = (n) => {
    let str = '';
    for (let i = 0; i < n; ++i) {
      str += ' ';
    }
    return str;
  }
  const getPrintStr = (spaceStr, cnt) => {
    let char = '';
    for( let i = 0; i < cnt; ++i) {
      char += '#';
    }
    return char + spaceStr.slice(cnt);
  };
  const spaceStr = getSpaceStr(n);
  for( let i = 1; i <= n; ++i) {
    console.log(getPrintStr(spaceStr, i));
  }
}

function selfSteps5(n, i=0) {
  if(n == i) {
    return;
  }
  ++i;
  
  console.log('#'.repeat(i) + ' '.repeat(n -i));
  
  selfSteps5(n, i);
}

function selfStep6(n, i=0, str='') {
  if( n == i ) {
    return;
  }
  
  if( n == str.length ) {
    console.log(str);
    return selfStep6(n, ++i, '');
  }
  
  const addition = str.length <= i ? '#' : ' ';
  str = str + addition;
  return selfStep6(n, i, str);
}

function selfStep7(n) {
  const getStr = (n, i) => {
    return '#'.repeat(i).padEnd(n, ' '); 
  }
  let i = 0;
  while(i < n) {
    ++i;
    console.log(getStr(n, i));
  }
}


module.exports = selfStep6;
