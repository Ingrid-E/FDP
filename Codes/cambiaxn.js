//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');
/**
 * 
 * @param {Array} list 
 * @param {*} a 
 * @param {*} b 
 * @param {[]} acc 
 * @returns {Array}
 * @example cambiarxn([1,2,3,4],7,2)//=> [1,2,7,4]
 */

function cambiarxn(list, a, b, acc = []) {
    if (isEmpty(list)) return [];
    if (b > length(rest(list)) || b < 0) return list;
    if (b == 0) return invertir(concat(invertir(rest(list)), cons(a, acc)))
    else return cambiarxn(rest(list), a, b - 1, cons(first(list), acc))
}

/**
 * 
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


console.log(cambiarxn([1, 2, 3], 7, 0))
console.log(cambiarxn([1, 2, 3], 7, 1))
console.log(cambiarxn([1, 0, 3, 5, 9, 3], 8, 6))
console.log(cambiarxn([1, 0, 3, 5, 9, 3], 8, -1))
console.log(cambiarxn([], 7, 0))