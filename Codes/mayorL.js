//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co

const { cons, first, rest, isEmpty, isList, length } = require('functional-light');


/**
 * Search the biggest number in a list. 
 * @param {Array} list
 * @returns {*}
 * @example mayorL([1,2,3]) // => 3
 */

function mayorL(list) {
  if (length(list) == 1) return first(list);
  if (isEmpty(list)) return null;
  else return Math.max(first(list), mayorL(rest(list)));
}


console.log(mayorL([]));
console.log(mayorL([1, 6, 2]));
console.log(mayorL([-9]));
console.log(mayorL([1, 6, 20, 3, -6, 8, 9]));