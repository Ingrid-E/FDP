const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


function orden(list,acc=[]){
  if(isEmpty(list))return acc;
  else return orden(rest(list),cons((Math.min(...list)),acc))
}



console.log(orden([3,5,3,4]))