// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function selfMatrix3(n) {
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let count = 1;
  const maxNumber = n * n;
  const result = Array(n).fill(null).map( () => Array(n).fill(null));
  
  while (count <= maxNumber) {
    
    for (let i = startColumn; i <= endColumn; ++i) {
      if(!result[startRow][i]) {
        result[startRow][i] = count++;
      }
    }
    startRow++;
    
    for (let i = startRow; i <= endRow; ++i ) {
      if(!result[i][endColumn]){
        result[i][endColumn] = count++;
      }
    }
    endColumn--;
    
    for (let i = endColumn; i >= startColumn; --i) {
      if(!result[endRow][i]) {
        result[endRow][i] = count++;
      }
    }
    endRow--;
    
    for (let i = endRow; i >= startRow; --i) {
      if(!result[i][startColumn]) {
        result[i][startColumn] = count++;
      }
    }
    startColumn++;
  }
  return result;
  
}

function selfMatrix2(n) {
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let count = 1;
  const result = Array(n).fill(null).map( () => Array(n).fill(null));
  
  while (startColumn <= endColumn && startRow <= endRow) {
    
    for (let i = startColumn; i <= endColumn; ++i) {
      result[startRow][i] = count++;
    }
    startRow++;
    
    for (let i = startRow; i <= endRow; ++i ) {
      result[i][endColumn] = count++;
    }
    endColumn--;
    
    for (let i = endColumn; i >= startColumn; --i) {
      result[endRow][i] = count++;
    }
    endRow--;
    
    for (let i = endRow; i >= startRow; --i) {
      result[i][startColumn] = count++;
    }
    startColumn++;
  }
  return result;
  
}

function selfMatrix1(n) {
  let matrixArray = Array(n).fill(null).map( () => Array(n).fill(null) );
  const isValidPoint = (x, y) => {
    if( x < 0 || y < 0 || n <= x || n <= y) {
      return false;
    }
    return true;
  }
  const goRight = (x, y) => {
    return {
      x: x,
      y: y + 1
    }
  }
  const goLeft = (x, y) => {
    return {
      x: x,
      y: y - 1
    }
  }
  const goDown = (x, y) => {
    return {
      x: x + 1,
      y: y
    }
  }
  const goUp = (x, y) => {
    return {
      x: x - 1,
      y: y
    }
  }
  const directionMap = [goRight, goDown, goLeft, goUp];
  const changeDirectionId = (currentDirectionId) => {
    currentDirectionId++;
    if(currentDirectionId >= directionMap.length ) {
      currentDirectionId = 0;
    }
    return currentDirectionId;
  }
  const getNextMatrixPoints = (currentMatrixPointX, currentMatrixPointY, currentDirectionId) => {
    let getPosition = directionMap[currentDirectionId];
    let points = {
      x: undefined,
      y: undefined,
      direction: currentDirectionId
    }
    while(points.x == undefined) {
      const nextMatrixPoints = getPosition(currentMatrixPointX, currentMatrixPointY);
      if(isValidPoint(nextMatrixPoints.x, nextMatrixPoints.y) && !matrixArray[nextMatrixPoints.x][nextMatrixPoints.y]) {
        points.x = nextMatrixPoints.x;
        points.y = nextMatrixPoints.y;
      } else {
        points.direction = changeDirectionId(points.direction);
        getPosition = directionMap[points.direction];
      }
    }
    
    return points;
  }
  
  const lastNumber = n * n;
  let inputNumber = 1;
  let currentMatrixPointX = 0;
  let currentMatrixPointY = 0;
  let currentDirectionId = 0;
  matrixArray[currentMatrixPointX][currentMatrixPointY] = inputNumber++;
  while (inputNumber <= lastNumber) {
    const { x, y, direction } = getNextMatrixPoints(currentMatrixPointX, currentMatrixPointY, currentDirectionId);
    matrixArray[x][y] = inputNumber++;
    currentMatrixPointX = x;
    currentMatrixPointY = y;
    currentDirectionId = direction;
  }
  
  /*
  0,0(1)  0,1(2)
  1,0(4)  1,1(3)
  
  0,0(1)  0,1(2) 0,2(3)
  1,0(8)  1,1(9) 1,2(4)
  2,0(7)  2,1(6) 2,2(5)
  
  0,0(1)   0,1(2)  0,2(3)  0,3(4)
  1,0(12)  1,1(13) 1,2(14) 1,3(5)
  2,0(11)  2,1(16) 2,2(15) 2,3(6)
  3,0(10)  3,1(9)  3,2(8)  3,3(7)
  
  
  if meet the end of matrix or the next matrix is not empty,
  change the direction.
  the direction is changed by order of right, down, left, up, right,...
  */
  
  
  return matrixArray;
}

module.exports = selfMatrix2;
