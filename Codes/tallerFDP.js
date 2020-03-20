const ingrid ={name:['Ingrid','Echeverri','Montoya'], email:'ingrid.echeverri@correunivalle.edu.co', birth:[13,02,2002]}
const fabian ={name:['Fabian Dario','Echeverri','Montoya'], email:'fabianchiqui23@gmail.com', birth:[17,12,2003]}
const jhonatan ={name:['Jhonatan','Arias','Gomez'], email:'ingrid.echeverri@correunivalle.edu.co', birth:[06,03,2000]}

/**
 * Retorna si la persona es mayor de edad
 * @param {nombre} name1 
 * @returns {string}
 * @example adult(ingrid) // => Ingrid Echeverri es mayor de edad.
 */

function adult(name1){
    if(2020-name1.birth[2] >= 18)
    return name1.name[0]+" "+ name1.name[1] + " "+"es mayor de edad."
    else return name1.name[0]+" "+name1.name[1]+ " "+"no es mayor de edad."        
}

/**
 * retorna cual de las 2 personas es mayor
 * @param {Array} name1 
 * @param {Array} name2 
 * @returns {String}
 * @example older(ingrid,jhonatan)//=> Jhonatan Arias es mayor.
 * @example older(fabian,ingrid)//=> Ingrid Echeverri es mayor.
 */

function older(name1,name2){
    if(name1.birth[2] < name2.birth[2])
    return name1.name[0]+" "+name1.name[1]+" es mayor."
    if(name1.birth[2] > name2.birth[2])
    return name2.name[0]+" "+name2.name[1]+" es mayor."
}

/**
 * 
 * @param {Array} name1 
 * @param {Array} name2
 * @returns {String}
 * @example family(ingrid,fabian)//=> Ingrid Echeverri y Fabian Dario Echeverri son parientes.
 * @example family(ingrid,jhonatan)//=> Ingrid Echeverri y Jhonatan Arias no son parientes.
 */

function family(name1,name2){
    if(name1.name[1]==name2.name[1] && name1.name[2]==name2.name[2])
    return name1.name[0]+ " " + name1.name[1] +" y "+name2.name[0]+" "+name2.name[1] +" "+"son parientes."
    else return name1.name[0]+ " " + name1.name[1] +" y "+name2.name[0]+" "+name2.name[1] +" "+" no son parientes."
}

const p1 =()
const p2 =
//nombres
console.log(adult(jhonatan))
console.log(older(fabian,ingrid))
console.log(family(fabian,ingrid))





