//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Returns a list in orden 
 * @param {Array} list
 * @returns {Array} 
 * @example sortasc([3,1,2])//=> [1,2,3]
 */

function sortasc(list) {
  /**
   * Buscar el numero mayor en una lista
   * @param {Array} list
   * @returns {*}
   */
  const menorL = function (list) {
    if (length(list) == 1) return first(list);
    if (isEmpty(list)) return null;
    else return Math.min(first(list), menorL(rest(list)));
  }

  /**
 * Deletes a desire number from a list
 * @param {Array} list 
 * @param {*} number 
 * @returns {Array}
 */

  const delet = function (list, number, acc = [], c = 0) {
    if (includes(list, number) == false) return list;
    if (first(list) == number) return concat(invertir(acc), rest(list));
    else return delet(rest(list), number, cons(first(list), acc, c + 1));
  }

  /**
  * Concatenate 2 lists 
  * @param {Array} list1 
  * @param {Array} list2 
  * @returns {Array}
  */

  const concat = function (list1, list2) {
    if (isEmpty(list1)) return list2;
    return cons(first(list1), concat(rest(list1), list2));
  }

  /**
  * Returns the list backwards 
  * @param {Array} list 
  */

  const invertir = function (list, acc = []) {
    if (isEmpty(list)) return acc;
    return invertir(rest(list), cons(first(list), acc));
  }
  /**
     * Returns a boolean if number exist in list or not. 
     * @param {Array} list1 
     * @param {*} number
     * @returns {boolean}
     */
  const includes = function (list1, number) {
    if (isEmpty(list1)) return false;
    if (first(list1) == number) return true;
    else return includes(rest(list1), number);
  }

  const sortLocal = function (list, acc) {
    if (isEmpty(list)) return invertir(acc);
    else return sortLocal(delet(list, menorL(list)), cons(menorL(list), acc));
  }
  return sortLocal(list, []);
}

console.log(sortasc([3, 5, 3, 4]));
console.log(sortasc([1, 2, 3, 4]));
console.log(sortasc([4, 3, 2, 1]));
console.log(sortasc([]));
console.log(sortasc([11]));