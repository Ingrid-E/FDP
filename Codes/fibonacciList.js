//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const { cons, first, rest, isEmpty, isList, length } = require('functional-light');


/**
 * Returns the list of the first n numers in the Fibonacci serie.
 * @param {*} n 
 * @returns {Array}
 * @example fibolist(3)//=>[0,1,1] 
 */

function fiboList(n) {
  const fibonacciLocal = function (n, a, b) {
    if (n == 0) return [];
    else return cons(a, (fibonacciLocal(n - 1, b, a + b)));
  }
  return fibonacciLocal(n, 0, 1);
}

console.log(fiboList(8));
console.log(fiboList(1));
console.log(fiboList(2));
console.log(fiboList(3));
console.log(fiboList(6));

/*
fiboList(3)--->[0,1,1,2]
fibonacciAux(3,0,1)
(3==-1)? no
cons(0,wait)--->(0,[1,1,2])
  fibonacciAux(2,1,1)
  (2==-1)? no
  cons(1,wait)--->(1,[1,2])
    fibonacciAux(1,1,2)
    (1==-1)? no
    cons(1,wait)--->(1,[2])
        fibonacciAux(0,2,3)
        (0==-1)? no
        cons(2,wait)---> (2,[])
            fibonacciAux(-1,3,5)
            (-1==-1) return []
*/



