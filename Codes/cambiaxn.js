//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Changes the number in b position to number given in a list.
 * @param {Array} list 
 * @param {*} a 
 * @param {*} b 
 * @param {[]} acc 
 * @returns {Array}
 * @example cambiarxn([1,2,3,4],7,2)//=> [1,2,7,4]
 */

function cambiarxn(list, a, b, acc = []) {
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

    const cambiarxnLocal = function (list, a, b, acc) {
        if (isEmpty(list)) return [];
        if (b > length(rest(list)) || b < 0) return list;
        if (b == 0) return invertir(concat(invertir(rest(list)), cons(a, acc)));
        else return cambiarxnLocal(rest(list), a, b - 1, cons(first(list), acc));
    }
    return cambiarxnLocal(list, a, b, []);
}



console.log(cambiarxn([1, 2, 3], 7, 0));
console.log(cambiarxn([1, 2, 3], 7, 1));
console.log(cambiarxn([1, 0, 3, 5, 9, 3], 8, 6));
console.log(cambiarxn([1, 0, 3, 5, 9, 3], 8, -1));
console.log(cambiarxn([], 7, 0));