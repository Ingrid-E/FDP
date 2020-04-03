/*Ludy Marcela Criollo Osorio
Función que concatena elementos de dos listas
*@param {Array} a 
*@returns{lista}
*example (concatenarLista([4,9,5],[6,9,3]))
*@example (concatenarLista([8,3,2],[5,7,8]))
*/
const { cons, first, rest, isEmpty, isList } = require('functional-light');

function concatenateList(list1, list2) {
    if (isEmpty(list1) && isEmpty(list2)) return null;
    else if (isEmpty(list1)) return list2;
    else if (isEmpty(list2)) return list1;
    return cons(first(list1), concatenateList(rest(list1), list2));
}


console.log(concatenateList([1,2], [3]))
console.log(concatenateList([], [1, 2]))
console.log(concatenateList([3, 5], []))
console.log(concatenateList([1, 2, true], ["FDP", 3, 8, 2, 7]))