//Ingrid Echeverri Montoya ingrid.echeverri@correounivalle.edu.co

const {cons, first, rest, isEmpty, isList, length} = require('./node_modules/functional-light');

/*Dada una lista ordenada, implementar una función que retorna el
 índice n de dónde se encuentra un número x dado si existe,
  o -(n + 1 ), donde n es la posición en la cual se debería 
  insertar x para mantener la lista ordenada.

 lookupx([1,2,3,4], 2); -->1
 lookupx([1,2,3,4], 3.5);
 lookupx([], 1.1);
 lookupx([2,4,6,10], 10); -->3
 lookupx([2,4,6,10], 11);

 */

 function lookupx(list1,number){

    if(number>list1) return undefined;
    if(isEmpty(list1))return null;
    

     {if(first(list1)==number) return 0

     else return lookupx(rest(list1),number)+1}
}


frunc
 
 console.log(lookupx([1,2,3,4],2));
 console.log(lookupx([1,2,3,4], 3.5));
 console.log(lookupx([], 1.1));
 console.log(lookupx([2,4,6,10], 10));
 console.log(lookupx([2,4,6,10], 11));


 