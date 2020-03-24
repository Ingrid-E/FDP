//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

/**
 * Returns the list of fibonacci numbers. 
 * @param {*} n 
 * @returns {Array}
 * @example fiboList(8)//=>[0, 1,  1,  2, 3, 5, 8, 13, 21]
 * @example fiboList(3)//=> [ 0, 1, 1, 2 ]
 */

function fiboList(n) {
    return fibonacciAux(n, 0, 1);
  }

/**
 * 
 * @param {*} n 
 * @param {*} a 
 * @param {*} b 
 * @returns {Array}
 * @example fibonacciAux(8, 0, 1)//=>[0, 1,  1,  2, 3, 5, 8, 13, 21]
 * @example fibonacciAux(3, 0, 1)//=>[ 0, 1, 1, 2 ]
 */

function fibonacci(n, a=0, b=1) {
    if (n==0) return [];
    return cons(a, (fibonacci(n - 1, b, a + b)));
  }
  
  console.log(fibonacci(8,0,1))
  console.log(fiboList(1))
  console.log(fiboList(2))
  console.log(fiboList(3))
  console.log(fiboList(6))

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



