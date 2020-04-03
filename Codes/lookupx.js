//Ingrid Echeverri Montoya ingrid.echeverri@correounivalle.edu.co

const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Looks up number position, if it doesn´t exist in the list returns -(n+1).
 * @param {Array} list1 
 * @param {*} number 
 * @returns {Array}
 * @example lookupx([1,2,3], 2)//=> 1
 * @example lookupx([1,2,3],2.5)//=> -2
 */

function lookupx(list1, number) {
   /**
    * Returns the last number in a list.
    * @param {Array} list1 
    * @returns {*}
    */
   const last = function (list1) {
      if (length(list1) == 1) return first(list1)
      else return last(rest(list1))
   }
   /**
    * Returns a boolean if number exist in list or not. 
    * @param {Array} list1 
    * @param {} number
    * @returns {boolean}
    */
   const includes = function (list1, number) {
      if (isEmpty(list1)) return false;
      if (first(list1) == number) return true;
      else return includes(rest(list1), number)
   }

   if (isEmpty(list1)) return -(0 + 1);
   if (number > last(list1)) return -(length(list1) + 1)
   if (includes(list1, number) == false) return -(lookupx(list1, Math.trunc(number)) + 2)
   if (first(list1) == number) return 0
   else return lookupx(rest(list1), number) + 1

}

console.log(lookupx([1, 2, 3, 4], 3.5));
console.log(lookupx([], 1.1));
console.log(lookupx([2, 4, 6, 10], 10));
console.log(lookupx([2, 4, 6, 10], 11));

