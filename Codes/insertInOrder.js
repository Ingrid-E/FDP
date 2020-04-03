//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Inserts a number in a list in order
 * @param {Array} list 
 * @param {*} a 
 * @param {[]} acc 
 * @returns {Array}
 * @example insertInOrder([1,2,3,5],4)//=> [1,2,3,4,5]
 */

function insertInOrder(list, a) {
    /**
    * Returns the last number in a list.
    * @param {Array} list1 
    * @returns {*}
    */
    const last = function (list1) {
        if (length(list1) == 1) return first(list1);
        else return last(rest(list1));
    }
    /**
   * Concatenate 2 lists together.
   * @param {Array} list1 
   * @param {Array} list2 
   * @returns {Array}
   * @example concat([1,2],[5,6]) // => [1,2,5,6]
   */
    const concat = function (list, list2) {
        if (isEmpty(list)) return list2;
        return cons(first(list), concat(rest(list), list2));
    }
    /**
    * Returns the list backwards 
    * @param {Array} list 
    * @param {[]} acc 
    * @example invertir([1,2,3], []) //=> [3,2,1]
     */
    const invertir = function (list, acc = []) {
        if (isEmpty(list)) return acc;
        return invertir(rest(list), cons(first(list), acc));
    }
    
    const insertInOrderLocal = function (list, a, acc) {

        if (isEmpty(list)) return cons(a, list);
        if (first(list) > a) return concat(invertir(acc), cons(a, list));
        if (a > last(list)) return concat(list, cons(a, []));
        else return insertInOrderLocal(rest(list), a, cons(first(list), acc));
    }
    return insertInOrderLocal(list, a, []);
}

console.log(insertInOrder([], -2.3))
console.log(insertInOrder([-2, 3, 5, 5, 6], 4))
console.log(insertInOrder([-2, 3, 5, 5, 6], 3))
console.log(insertInOrder([-2, 3, 5, 5, 6], 8))
console.log(insertInOrder([-2, 3, 5, 5, 6], -3))
console.log(insertInOrder([-2, 3, 5, 5, 6], -2))
console.log(insertInOrder([-2, 3, 5, 5, 6], 5.2))
