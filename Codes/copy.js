//Ingrid Echeverri ingrid.echeverri@correunivalle.edu.co

const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Recursively copy a list
 * @param {Array} list 
 * @returns {Array}
 * @example copy([1,2])//=> [1,2]
 * @example copy([1,2,[3]])//=> [1,2,[3]]
 */
function copy(list) {
    if (isEmpty(list)) return list;
    return cons(first(list), copy(rest(list)))
}
/*
copy([1,[2]])
isEmpty([1,[2]]) no
return cons(1,wait)
        copy([[2]])
        isEmpty([[2]]) no
        return cons([2],wait)
        copy([])
        isEmpty yes return [] 
*/

console.log(copy([]));
console.log(copy([1, 2, 3]));
console.log(copy([1, 2, [3, 4], [1]]));
console.log(copy([[9]]));
