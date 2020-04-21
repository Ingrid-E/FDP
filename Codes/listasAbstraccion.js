//Ingrid Echeverri 1943542 ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

//Desarrolle la función que encuentre el mayor valor de una lista de números

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

//Desarrolle la función que encuentre el promedio de los valores de la lista
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

//Desarrolle la función que cocatene 2 listas
/**
 * Concatenate 2 lists together.
 * @param {Array} list1 
 * @param {Array} list2 
 * @returns {Array}
 * @example concat([1,2],[5,6]) // => [1,2,5,6]
 * @example concat(['hola', 4],[]) // => ['hola', 4]
 */

function concat(list1, list2) {
    if (isEmpty(list1)) return list2;
    return cons(first(list1), concat(rest(list1), list2));
}

//0 concat(['A', 3], [2,6])
//      isEmpty(['A',3])
//          cons(['A'], [3,2,6]) -> ['A',3,2,6]
//              concat([3], [2,6])
//                 isEmpty([3])
//                  cons([3], [2,6]) -> [3,2,6]
//                      concat([], [2,6]);
//                          isEmpty([]); -> [2,6]

console.log(concat([], []));
console.log(concat([], [1, 2]));
console.log(concat([3, 5], []));
console.log(concat([1, 2, true], ['FDP', 3, 8, 2, 7]));

//