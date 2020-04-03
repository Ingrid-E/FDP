//Ingrid Echeverri ingrid.echeverri@correunivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');


/** Finds the average number in a list.
 * @param {Array} list
 * @return {*}
 * @example promedio([1,2,3]) // =>2
 */

function promedio(list) {
    if (isEmpty(list)) return null;
    /**
     * Returns the sum of a number list. 
     * @param {*} list 
     * @returns sum([1,2,3])//=> 6
     */
    const sum = function (list) {
        if (isEmpty(list)) return null;
        else return (first(list) + sum(rest(list)));
    }
    return sum(list) / length(list);
}

console.log(promedio([]));
console.log(promedio([5]));
console.log(promedio([0, 1, 8]));
console.log(promedio([10, 2, 3, 1, 4, 4, 4]));
