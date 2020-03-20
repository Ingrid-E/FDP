//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co

const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


function concat(a,b){
   if(isEmpty(a))return null
   return first(a),rest(a)
}

function concat2(a,b){
    if(isEmpty(a)) return null
    return Array.from(concat(a,[b]))
}

console.log(concat2([1,2],[]))
console.log(concat2([1,2],[3]))
console.log(concat([1,2],[3]))


/*
concat([],[]);-->[]
concat([],[1, 2]);-->[1,2]
concat([3,5], []);--> [3,5]
concat([1,2,true],[“FDP”,3,8,2,7]);-->[1,2,true,“FDP”,3,8,2,7]
*/
