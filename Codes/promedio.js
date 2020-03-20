const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

//Ingrid Echeverri ingrid.echeverri@correunivalle.edu.co

/**
 * Retorna la suma de una lista de numeros 
 * Buscar el numero mayor en una lista
 * @param {Array} list
 * @returns {*}
 * @example sum([1,2,3]) // => 6
 */

function sum(list) {

    if (isEmpty(list)) return null
    else
        return (first(list) + sum(rest(list)))
}

/**
 * @param {Array} list
 * @return {*}
 * @example promedio([1,2,3]) // =>2
 */

function promedio(list) {
    if (isEmpty(list)) return null
    return sum(list) / length(list)
}

console.log(promedio([]));
console.log(promedio([5]));
console.log(promedio([0, 1, 8]));
console.log(promedio([10, 2, 3, 1, 4, 4, 4]));
