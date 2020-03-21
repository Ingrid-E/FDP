const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

function fibolist(n){
    if(n<=0)return 1;
    return (n-1)+fibolist(n-2)
}

console.log(fibolist(3));
console.log(fibolist(2));
console.log(fibolist(1));