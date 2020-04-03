//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co

const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

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

