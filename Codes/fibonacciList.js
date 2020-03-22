const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

function fibolist(n){
    if(n<2)return n;

    return fibolist(n-1)+fibolist(n-2)
}

function fibolist2(n){
    if(n==1) return 1;
    return cons(fibolist(n-1),[fibolist(n)])
    
}

console.log(fibolist2(4));
console.log(fibolist2(2));
console.log(fibolist2(8));

/*
(4)
(4-1) + (4-2)
(3)
(3-1) + (3-2)return 1
(2)
(2-1) + (2-2)return 0
(1)return 1

(4-2)
(2)
(2-1) + (2-2) return 0 
(1) return 1 

1+1 +1 



    



*/
