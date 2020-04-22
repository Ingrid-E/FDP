const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/*
Implemente una función que busca todos los elementos 
de una lista que cumplen una cierta condición, por
 ejemplo, los números que sean pares. La función debe
  retornar una lista con los elementos encontrados
*/

const listaJuguetes = [
    { juego: "carro", costo: 10 },
    { juego: "perro", costo: 10 },
    { juego: "este", costo: 10 },
    { juego: "casa", costo: 10 },
]

const hola = [1, 3, 4, 6, 0, 1]

console.log(typeof (first(hola)) == "object")
/**
 * Searches all the elements of a list, that meet a certain condition.
 * @param {Array} list 
 * @param {Function} a 
 * @returns {Array}
 * @example filter([1,2,3,4,5],(a)=> a>2)//=> [3,4,5]
 */

function filter(list, a) {
    if (isEmpty(list)) return [];
    if (typeof first(list) === "object") return cons(a(first(list)), filter(rest(list), a));
    if (a(first(list))) return cons((first(list)), filter(rest(list), a));
    return filter(rest(list), a);
}

console.log(filter([1, 3, 4, 6, 0, 1], (a) => a > 3));// [4, 6]
console.log(filter(['ab', 'acv', 'gggg', 'cds'], (a) => a.length == 3)); // [“acv”, “cds”]
console.log(filter([1, 2, 3, 4, 5, 6], (a) => (a + 1) % 2));// [2,4,6]
console.log(filter(listaJuguetes, (a) => a.juego));// [2,4,6]

/*
Implemente una función que aplica una función data a todos los elementos de una lista(map). Por ejemplo, la función debe ser capaz de elevar todos los elementos de la lista al cuadrado. Ejemplo: 
map([1, 2, 3, 4], (x) => x * x);// [1, 4, 9, 16]
map([{a: “María”}, {a: “Carlos”}], (v) => “Hola ” + v.a);//[“Hola María”, “Hola Carlos”]
*/
/**
 * Applies a function to all the elements of a list.
 * @param {Array} list 
 * @param {Function} x 
 * @returns {Array}
 * @example map([1,2,3,4],(x)=> x+x)=> [2,4,6,8]
 */
function map(list, x) {
    if (isEmpty(list)) return [];
    return cons(x(first(list)), map(rest(list), x));
}

console.log(map([1, 2, 3, 4], (x) => x * x));// [1, 4, 9, 16]
console.log(map([{a: 'María'}, {a: 'Carlos'}], (v) => 'Hola ' + v.a));//[“Hola María”, “Hola Carlos”]
//console.log(map([1, 2, 3, 4], (x) => Math.pow(x,3)));// [1, 4, 9, 16]

/*
Implemente una función que aplica una función a una lista genérica, y agrega todos los valores de la lista para producir una única salida  reduce([1, 2, 3, 4, 5], (val, acum) => acum + val, 0); // 15
reduce([1, 2, 3, 4, 5], (val, acum) => acum * val, 1); // 120
reduce([1, 7, 3, 14, 5], (val, acum) => Math.max(val, acum), 0); // 14
reduce([1, 7, 3, 14, 5], (val, acum) => Math.min(val, acum), 0); // 14
reduce([{a: “María”}, {a: “Carlos”}], (val, acum) => acum + “-” +val.a, “”)// “-María-Carlos”
*/
/**
 * Applies a function to a generic list, and adds all the values of the list to produce one output.
 * @param {Array} list 
 * @param {Function} f 
 * @param {*} num 
 * @returns {*}
 * @example reduce([1,2,3],(val,acc)=> acc+val, 1)//=> [2,4,7]
 */
function reduce(list, f, num) {
    if (isEmpty(list)) return num;
    return f(first(list), reduce(rest(list), f, num));
}

console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum + val,0));
console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum * val,1));
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.max(val, acum), 0));
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.min(val, acum), 9999));
console.log(reduce([{a: 'Carlos'}, {a: 'María'}], (val, acum) => acum + '-' +val.a, '')); // => “-María-Carlos”


console.log(first([{a: 'Maria'}]))