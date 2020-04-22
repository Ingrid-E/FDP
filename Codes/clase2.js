const { cons, first, rest, isEmpty, isList, length,append } = require('functional-light');

let a = [5, 2, 7, 6, 1, 3];
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
/*{
    value: 5,
    left: { value: 2, left: { value: 1 }, right: { value: 3 } },
    right: { value: 7, left: { value: 6 } }
  }

 inorden [1,2,3,5,6,7]
*/
const tree = {value: 5, left: { value: 2, left: { value: 1 }, right: { value: 3 } },right: { value: 7, left: { value: 6 } }}
const arboles = {value: 5, left: { value: 2, left: { value: 1 }, right: { value: 3 } },right: { value: 7, left: { value: 6 } }}

function inorder(object,n){
    if(!object) return null;
    if(object.left<n && object.right == n) return [object.value];
    if(!object.left) return append(object.value,inorder(arboles,object.value))
    if(object.left.value == n){
        if(!object.left.right) return append(object.value,inorder(arbol,object.value)) 
        else return inorder(object.left.right,n)
    }
    if(object.left.value<n) return inorder(object.right,n)
    else return inorder(object.left,n);

}


console.log(inorder(tree,0))