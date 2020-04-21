const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

let a = ["arroz", "sol", "beso", "oso", "aba","luna", "bus"];
const arbol = crearArbol(a);
console.log(crearArbol(a));

/**
 * Crear un árbol binario ordenado a partir de una lista
 * @param {Array} datos 
 * @returns {object} arbol binario
 */
function crearArbol(datos) {
    const root = {};
    if (length(datos) > 0) {
        forEach(datos, element => {
            insertarNodo(root, element);
        });
    }

    return root;
}
/**
 * Inserta un valor en un árbol binario ordenado
 * @param {object} node 
 * @param {number} value 
 */
function insertarNodo(node, value) {
    if (node.value == null) {
        node.value = value;
    } else {
        if (value <= node.value ) {
            if (!node.left)
                node.left = {};
            insertarNodo(node.left, value);
        } else {
            if (!node.right)
                node.right = {};
            insertarNodo(node.right, value);
        }
    }
}

/**
 * forEach: lista, function => vacio
 * Aplica la función f a cada uno de los elementos de la lista l.
 * Ejemplo:
 * 
 * forEach([1, 2, 3], (a) => {console.log(a + "'")});
 */

function forEach(l, f) {
    if (!isEmpty(l)) {
        f(first(l));
        forEach(rest(l), f)
    }
}

