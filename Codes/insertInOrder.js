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

function insertInOrder(list, a, acc = []) {
    if (a > length(list)) return list
    if (isEmpty(list)) return cons(a, list)
    if (first(list) > a) return concat(invertir(acc), cons(a, list))
    else return insertInOrder(rest(list), a, cons(first(list), acc))
}

/**
 * Concatenate 2 lists 
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

/**
 * Returns the list backwards 
 * @param {Array} list 
 * @param {[]} acc 
 * @example invertir([1,2,3], []) //=> [3,2,1]
 */

function invertir(list, acc = []) {
    if (isEmpty(list)) return acc;
    return invertir(rest(list), cons(first(list), acc))
}

console.log(insertInOrder([], -2.3))
console.log(insertInOrder([-2, 3, 5, 5, 6], 4))
console.log(insertInOrder([-2, 3, 5, 5, 6], 3))
console.log(insertInOrder([-2, 3, 5, 5, 6], 8))
console.log(insertInOrder([-2, 3, 5, 5, 6], -3))
console.log(insertInOrder([-2, 3, 5, 5, 6], -2))
console.log(insertInOrder([-2, 3, 5, 5, 6], 5.2))
