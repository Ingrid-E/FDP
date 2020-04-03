//Ingrid Echeverri ingrid.echeverri@gmail.com
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Inserts number in b position inside a list.
 * @param {Array} list 
 * @param {*} a 
 * @param {*} b  
 * @returns {Array}
 * @example insertarxn([1,2,3,4,5],8,3)//=> [1,2,3,8,4,5]
 */

function insertarxn(list, a, b) {
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
    const insertarxnLocal = function (list, a, b, acc) {
        if (b < 0 || b > length(list)) return list;
        if (isEmpty(list)) return concat(invertir(acc), cons(a, []))
        if (b == 0) return concat(invertir(acc), cons(a, list))
        else return insertarxnLocal(rest(list), a, b - 1, cons(first(list), acc))
    }
    return insertarxnLocal(list, a, b, []);
}

console.log(insertarxn([1, 2, 3], 7, 0))
console.log(insertarxn([1, 2, 3], 7, 1))
console.log(insertarxn([1, 0, 3, 5, 9, 3], 8, 6))
console.log(insertarxn([1, 0, 3, 5, 9, 3], 8, 7))
console.log(insertarxn([1, 0, 3, 5, 9, 3], 8, -1))
console.log(insertarxn([], 7, 0))

/*
insertarxn([1,2,3,4],7,2,[])-->[1,2,7,3,4]
isEmpty no
b==0 no
    insertarxn([2,3,4],7,1,[1])
    isEmpty no
    b==0
        insertarxn([3,4],7,0,[2,1])
        isEmpty no
        b==0 si
            concat([1,2],[7,3,4])-->[1,2,7,3,4]
            cons(1, wait)-->[1,2,7,3,4]
                concat([2],[7,3,4])
                cons(2,wait)--> [2,7,3,4]
                    concat([],[7,3,4])
                    returns [7,3,4]

*/
