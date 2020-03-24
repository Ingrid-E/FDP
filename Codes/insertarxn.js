//Ingrid Echeverri ingrid.echeverri@gmail.com
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

/**
 * 
 * @param {Array} list 
 * @param {*} a 
 * @param {*} b 
 * @param {[]} acc 
 * @returns {Array}
 * @example insertarxn([1,2,3,4,5],8,3)//=> [1,2,3,8,4,5]
 */
function insertarxn(list,a,b,acc=[]){
    if(b<0 || b>length(list)) return list;
    if(isEmpty(list)) return concat(acc.reverse(),cons(a,[]))
    if(b==0) return concat(acc.reverse(),cons(a,list))
    else return insertarxn(rest(list),a,b-1,cons(first(list),acc))
}
/**
 * 
 * @param {Array} list1 
 * @param {Array} list2 
 * @returns {Array} 
 * @example concat([1,3],[2,4])//=> [1,3,2,4]
 */
function concat(list1, list2) {
    if (isEmpty(list1)) return list2;
    return cons(first(list1), concat(rest(list1), list2));
}


console.log(insertarxn([1,2,3], 7, 0))
console.log(insertarxn([1,2,3], 7, 1))
console.log(insertarxn([1,0,3,5,9,3], 8, 6))
console.log(insertarxn([1,0,3,5,9,3], 8, 7))
console.log(insertarxn([1,0,3,5,9,3], 8, -1))
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
