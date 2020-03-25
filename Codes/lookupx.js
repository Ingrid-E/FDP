//Ingrid Echeverri Montoya ingrid.echeverri@correounivalle.edu.co

const { cons, first, rest, isEmpty, isList, length } = require('functional-light');
 
/**
 * 
 * @param {Array} list1 
 * @param {*} number 
 * @returns {Array}
 * @example lookupx([1,2,3], 2)//=> 1
 * @example lookupx([1,2,3],2.5)//=> -2
 */

function lookupx(list1, number) {
   if (isEmpty(list1)) return -(0 + 1);
   if (number >list1.slice(-1)[0]) return -(length(list1)+1)
   if(!list1.includes(number)) return -(lookupx(list1, Math.trunc(number))+2)
   if (first(list1) == number) return 0
      else return lookupx(rest(list1), number) + 1
   
}

console.log(lookupx([1, 2, 3, 4], 2));
console.log(lookupx([1, 2, 3, 4], 3.5));
console.log(lookupx([], 1.1));
console.log(lookupx([2, 4, 6, 10], 10));
console.log(lookupx([2, 4, 6, 10], 11));


