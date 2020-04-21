//Ingrid Echeverri ingrid.echeverri@correunivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Returns a list with only numbers
 * @param {Array} list 
 * @param {[]} acc 
 * @returns {Array}
 * @example soloNum([a,2,3,c,5])//=>[2,3,5]

 */


function soloNum(list) {
    /**
    * Returns the list backwards 
    * @param {Array} list 
    * @param {[]} acc 
    * @example invertir([1,2,3], []) //=> [3,2,1]
     */

    const invertir = function (list, acc = []) {
        if (isEmpty(list)) return acc;
        return invertir(rest(list), cons(first(list), acc));
    }

    const soloNumLocal = function (list, acc) {
        if (isEmpty(list)) return invertir(acc);
        if (first(list) === true || first(list) === false) return soloNumLocal(rest(list), acc);
        if (first(list) <= 0 || first(list) > 0) return soloNumLocal(rest(list), cons(first(list), acc));
        else return soloNumLocal(rest(list), acc);
    }
    return soloNumLocal(list, []);

}

console.log(soloNum([]));
console.log(soloNum(['a']));
console.log(soloNum(['a', 1]));
console.log(soloNum([6, 'b']));
console.log(soloNum([6, 'b', 1, 2, true, 'b', false, -2]));


/*
soloNum([6, ‘b’, 1, 2, true, ‘b’, false, -2],acc)
isEmpty([6, ‘b’, 1, 2, true, ‘b’, false, -2]) no
if(6<=0 || 6>0)
soloNum([‘b’, 1, 2, true, ‘b’, false, -2],6)
isEmpty([‘b’, 1, 2, true, ‘b’, false, -2]) no


*/

