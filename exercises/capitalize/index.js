// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Self Answer 1
function selfCapitalize1(str) {
  const separator = ' ' ;
  return str.split(separator).map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(separator);
}

function capitalize(str) {
  return str.split(' ').map( v => v[0] = v[0].toUpperCase());
}

module.exports = selfCapitalize1;
