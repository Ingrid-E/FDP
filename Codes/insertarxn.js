
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


function insertarxn(a,b,c,acc=[],d){
    if(c==0) return cons(b,a)
    if(d==0) return cons(cons(acc,cons(b,[])),a)
    else return insertarxn(rest(a),b, c, first(a),c-1)

}

console.log(insertarxn([1,2,3,4],7,2))
