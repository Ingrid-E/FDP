//Ingrid Echeverri ingrid.echeverri@correounivalle.edu.co

//1
const ingrid ={name:['Ingrid','Echeverri','Montoya'], email:'ingrid.echeverri@correunivalle.edu.co', birth:[13,02,2002]}
const fabian ={name:['Fabian Dario','Echeverri','Montoya'], email:'fabianchiqui23@gmail.com', birth:[17,12,2003]}
const jhonatan ={name:['Jhonatan','Arias','Gomez'], email:'ingrid.echeverri@correunivalle.edu.co', birth:[06,03,2000]}

//2
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
//nombres
console.log(adult(jhonatan))


//3

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
console.log(older(fabian,ingrid))


//4 

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
console.log(family(fabian,ingrid))

//5
const p1 = {x:1, y:1}
const p2 = {x:2, y:2}

//6
const rectangulo = (p1.x, p1.y, p2.x, p2.y)

//7
const punto1 = {x:3, y:3} //puntoContenido
const punto2 = {x:3, y:6} //puntoContenido

const punto3 = {x:2, y:2}
const punto4 = {x:3, y:2}

//8
const rectangulo1= {x1:2, y1:2, x2:4, y2:4} //puntoContenido 

const rectangulo2= {x1:2, y1:3, x2:4, y2:5} //sobrelapan
const rectangulo3= {x1:3, y1:4, x2:6, y2:7} //sobrelapan
const rectangulo4= {x1:7, y1:3, x2:9, y2:5} //sobrelapan

const rectangulo5= {x1:2, y1:2, x2:4, y2:4} //distance
const rectangulo6= {x1:7, y1:2, x2:9, y2:4} //distance

const rectangulo7= {x1:1, y1:1, x2:4, y2:4}
const rectangulo8= {x1:6, y1:0, x2:7, y2:1}


/*
Definiciones: punto = const punto(1-2) = {x, y}
              rec = const rectangulo(1-7)= {x1, y1, x2, y2}
              circle = const circulo= {x,y, r}
*/
//9
/**
 * Returns true, if a point in inside of a rectangle/square.
 * @param {punto} punto 
 * @param {rec} rec 
 * @returns {boolean}
 * @example puntoContenido(punto3,rectangulo1)//=> true
 */
function puntoContenido(punto,rec){
    if(punto.x>rec.x1 && punto.x<rec.x2 && punto.y>rec.y1 && punto.y<rec.y2) return true;
    return false;
}                   
console.log("puntoContenido"+ " = " +  puntoContenido(punto1,rectangulo1)); //=> true
console.log("puntoContenido"+ " = " + puntoContenido(punto2,rectangulo1)); //=> false          

//10
/**
 * Returns true or false if a square overlaps another square.
 * @param {rec} rec1 
 * @param {rec} rec2 
 * @returns {boolean}
 * @exmaple sobrelapan(rectangulo2,rectangulo4)//=> false
 */
function sobrelapan(rec1,rec2){
    if(rec2.x1>rec1.x1 && rec2.x1<rec1.x2 && rec2.y1>rec1.y1 && rec2.y1<rec1.y2) return true;
    if(rec2.x2>rec1.x1 && rec2.x2<rec1.x2 && rec2.y2>rec1.y1 && rec2.y2<rec1.y2) return true;
    return false; 
}

console.log("sobrelapan"+ " = " +sobrelapan(rectangulo2,rectangulo3)); //=> true
console.log("sobrelapan"+ " = " +sobrelapan(rectangulo2,rectangulo4)); //=> false
              
//11
/**
 * Returns the distance between 2 rectangles, if they overlap return 0.
 * @param {rec} rec1 
 * @param {rec} rec2 
 * @returns {*}
 * @example distance(rectangulo3,rectangulo5)//=> 0
 */

function distance(rec1,rec2){
   if(rec1.x2<rec2.x1) return rec2.x1-rec1.x2;
   if(rec1.x1>rec2.x2) return rec1.x1-rec2.x2;
   if(sobrelapan(rec1,rec2)==true) return 0;
   else return 0;
}

console.log("distancia"+ " = " + distance(rectangulo5,rectangulo6)); //=> 3
console.log("distancia"+ " = " +distance(rectangulo6,rectangulo5)); //=> 3
console.log("distancia"+ " = " +distance(rectangulo2,rectangulo3)) //=> 0


//12

const circulo1= {x:4,y:4, r:2};
const circulo2= {x:1,y:1, r:1};
const circulo3= {x:2,y:3, r:3};
//13

/**
 * Returns true or false, if a rectangle overlaps a circle.
 * @param {rec} rec 
 * @param {circle} circle 
 * @returns {boolean}
 * @example circuloRectangulo(rectangulo1, ciculo3)//=> true
 */
function circuloRectangulo(rec,circle){
    if(rec.x2>(circle.x-circle.r) && rec.x2<(circle.x+circle.r) && rec.y2>(circle.y-circle.r) && rec.y2<(circle.y+circle.r)) return true;
    if(rec.x1>(circle.x-circle.r) && rec.x1<(circle.x+circle.r) && rec.y1>(circle.y-circle.r) && rec.y1<(circle.y+circle.r)) return true;
    if(rec.x1==circle.x && rec.y1==circle.y || rec.x2==circle.x && rec.y2==circle.y ) return true;
    return false; 
}

console.log("cuadrado/circulo se sobrelapan"+ " = " +circuloRectangulo(rectangulo7,circulo1))
console.log("cuadrado/circulo se sobrelapan"+ " = " +circuloRectangulo(rectangulo8,circulo1))
//14
/**
 * Auments the radio of a circle to the desired number.
 * @param {circle} circle 
 * @param {*} radio 
 * @retuns {circle}
 * @example escalaCirculo(circle1,2)//=> {x:4,y:4, r:4}
 */
function cambiarRadio(circle,radio){
    return {x:circle.x ,y:circle.y, r:radio};
}

function escalaCirculo(circle,radio){
    return {x:circle.x ,y:circle.y, r: (circle.r+radio)};
}
console.log(cambiarRadio(circulo2,3));
console.log(escalaCirculo(circulo2,3));
//15
//Realizar una función que desplaza un círculo 
//dx unidades en el eje x, y dy unidades en el eje y.
/**
 * Moves circle dx amount in x and dy amount in y. 
 * @param {circle} circle 
 * @param {*} dx 
 * @param {*} dy 
 * @returns {circle}
 * @example moveCircle(circle2,2,2)//=> {x:3,y:3, r:1}
 */
function moveCircle(circle,dx,dy){
    return {x:(circle.x+dx) ,y:(circle.y+dy), r:circle.r};
}

console.log(moveCircle(circulo3,3,3));

//16
/**
 * Receives a rectangle or a circle and graphs it.
 * @param {rec/circle} shape 
 * @returns {rec/circle}
 */
function graph(shape){
    return shape;
}
console.log(graph(rectangulo5));







