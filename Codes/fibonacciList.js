const {cons, first, rest, isEmpty, isList, length} = require('./node_modules/functional-light');

function fiboList(n) {
    return fibonacciAux(n, 0, 1);
  }

function fibonacciAux(n, a, b) {
    if (n == -1) return [];
    return cons(a, (fibonacciAux(n - 1, b, a + b)));
  }
  
  console.log(fiboList(0))
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



