// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Self Answer 1
function selfChunk1 (array, size) {
  let chunk = [];
  let tempArray = [];
  array.map(value => {
    if(tempArray.length == size) {
      chunk.push(tempArray);
      tempArray = [];
    }
    tempArray.push(value);
  });
  
  if(tempArray.length > 0) {
    chunk.push(tempArray);
  }
  
  return chunk;
}

// Self Answer 2
function selfChunk2 (array, size) {
  let chunk = [];
  const tempArray = [...array];
  while (tempArray.length > 0) {
    chunk.push(tempArray.splice(0, size));
  }
  return chunk;
}

// Self Answer 3
function selfChunk3 (array, size, chunk=[], remain=array) {
  if(remain.length > size) {
    chunk.push(remain.splice(0, size));
    return selfChunk3(array, size, chunk, remain);
  }else{
    chunk.push(remain);
    return chunk;
  }
}

function chunk(array, size) {
  let chunk = [];
  let tempArray = [...array];
  while( tempArray.length > 0 ) {
    chunk.push(tempArray.splice(0, size));
  }
  return chunk;
}

module.exports = selfChunk3;
