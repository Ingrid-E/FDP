//Ingrid Echeverri ingrid.echeverri@correunivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Returns a list with only numbers
 * @param {Array} list 
 * @param {[]} acc 
 * @returns {Array}
 * @example soloNum([a,2,3,c,5])//=>[2,3,5]

 */
/*
function soloNum(list, acc = []) {
    if (isEmpty(list)) return acc.reverse();
    if (first(list) === true || first(list) === false) return soloNum(rest(list), acc)
    if (first(list) <= 0 || first(list) > 0 ) return soloNum(rest(list), cons(first(list), acc))
    else return soloNum(rest(list), acc)
}

*/

function soloNum(list){
    if(isEmpty(list)) return [];
    if(typeof first(list) == 'bolean'|| isNaN(first(list)))
    return soloNum(rest(list));
    else return  cons(first(list), soloNum(rest(list)));    
}

//invertir(rest(list),cons(first(list),acc))

console.log(soloNum([]))
console.log(soloNum(['a']))
console.log(soloNum(['a', 1]))
console.log(soloNum([6, 'b']))
console.log(soloNum([6, 'b', 1, 2, true, 'b', false, -2]))


/*
soloNum([6, ‘b’, 1, 2, true, ‘b’, false, -2],acc)
isEmpty([6, ‘b’, 1, 2, true, ‘b’, false, -2]) no
if(6<=0 || 6>0)
soloNum([‘b’, 1, 2, true, ‘b’, false, -2],6)
isEmpty([‘b’, 1, 2, true, ‘b’, false, -2]) no


*/

