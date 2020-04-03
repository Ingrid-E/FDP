//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/*
function delet(list,number,acc=[],c=0){
    if(!list.includes(number)) return list;
    if(first(list)==number)return concat(invertir(acc),rest(list))
    else return delet(rest(list),number,cons(first(list),acc,c+1))
}
*/
/**
 * Deletes a desire number from a list
 * @param {Array} list 
 * @param {*} number 
 * @returns {Array}
 * @example delet([1,2,3],2)//=> [1,3]
 */

function delet(list, number) {

    /**
   * Concatenate 2 lists together.
   * @param {Array} list1 
   * @param {Array} list2 
   * @returns {Array}
   * @example concat([1,2],[5,6]) // => [1,2,5,6]
   */
    const concat = function (list, list2) {
        if (isEmpty(list)) return list2;
        return cons(first(list), concat(rest(list), list2));
    }
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

    const deletLocal = function (list, number, acc, c) {
        if (number > length(list)) return list
        if (c < -1) return list
        if (c == -1) return rest(list)
        if (number == 0) return concat(invertir(acc), rest(list))
        else return deletLocal(rest(list), number - 1, cons(first(list), acc), c = number)
    }
    return deletLocal(list, number, [], number - 1)
}

console.log(delet([1, 2, 3], 7))
console.log(delet([1, 1, 2, 3], 1))
console.log(delet([1, 0, 3, 5, 9, 3], 5))
console.log(delet([1, 0, 3, 5, 9, 3], 0))
console.log(delet([], 0))
console.log(delet([2, 4], -1))