//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');


/**
 * Returns the list backwards 
 * @param {Array} list 
 * @param {[]} acc 
 * @example invertir([1,2,3], []) //=> [3,2,1]
 */

function invertir(list) {
    const invertirLocal = function (list, acc) {
        if (isEmpty(list)) return acc;
        return invertirLocal(rest(list), cons(first(list), acc));
    }
    return invertirLocal(list, []);
}

/*

invertirLocal([1,2,3])
isEmpty? no
    invertir([2,3],[1])
    isEmpty? no
        invertir([3],[2,1])
        isEmpty? no
            invertir([],[3,2,1])
            isEmpty si. return acc= [3,2,1]
*/


console.log(invertir([]));
console.log(invertir([1]));
console.log(invertir([4, 1, 2, 7, 4, 1]));
console.log(invertir([1, 2, 1]));