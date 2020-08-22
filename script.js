let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;
//////

const WIDTH = 600;
const HEIGH = 567;


const BSIZE = 21;
const MAPA =[
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,3,3,3,3,3,3,3,3,3,2,3,3,3,3,3,3,3,3,3,2],
  [2,3,2,2,2,3,2,2,2,3,2,3,2,2,2,3,2,2,2,3,2],
  [2,4,2,0,2,3,2,0,2,3,2,3,2,0,2,3,2,0,2,4,2],
  [2,3,2,2,2,3,2,2,2,3,2,3,2,2,2,3,2,2,2,3,2],
  [2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2],
  [2,3,2,2,2,3,2,3,2,2,2,2,2,3,2,3,2,2,2,3,2],
  [2,3,2,2,2,3,2,3,2,2,2,2,2,3,2,3,2,2,2,3,2],
  [2,3,3,3,1,3,2,3,3,3,2,3,3,3,2,0,3,3,3,3,2],
  [2,2,2,2,2,3,2,2,2,0,2,0,2,2,2,3,2,2,2,2,2],
  [0,0,0,0,2,3,2,0,0,0,0,0,0,0,2,3,2,0,0,0,0],
  [0,0,0,0,2,3,2,0,75,75,8,75, 75,0,2,3,2,0,0,0,0],
  [2,2,2,2,2,3,2,0, 75,0,4,0, 75 ,0,2,3,2,2,2,2,2],
  [3,3,3,3,3,3,0,0, 75,0,0,0,  75,0,0,3,3,3,3,3,3],
  [2,2,2,2,2,3,2,0,75,75,75,75,75,0,2,3,2,2,2,2,2],
  [0,0,0,0,2,3,2,0,0,0,0,0,0,0,2,3,2,0,0,0,0],
  [0,0,0,0,2,3,2,0,2,2,2,2,2,0,2,3,2,0,0,0,0],
  [2,2,2,2,2,3,2,0,2,2,2,2,2,0,2,3,2,2,2,2,2],
  [2,3,3,3,3,3,3,3,3,3,2,3,3,3,3,3,3,3,3,3,2],
  [2,3,2,2,2,3,2,2,2,3,2,3,2,2,2,3,2,2,2,3,2],
  [2,4,3,3,2,3,3,3,3,3,1,3,3,3,3,7,2,3,3,4,2],
  [2,2,2,3,2,3,2,3,2,2,2,2,2,3,2,3,2,3,2,2,2],
  [2,2,2,3,2,3,2,3,2,2,2,2,2,3,2,3,2,3,2,2,2],
  [2,3,3,3,3,3,2,3,3,3,2,3,3,3,2,3,3,3,3,3,2],
  [2,3,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,3,2],
  [2,6,3,3,3,3,3,3,3,3,5,3,3,3,3,3,3,3,3,2.9,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]
/**
 * contract:<muveBlueY><number><number><number><number><number>--><number>
 * proposito: arroja un movimiento que debe hacer el fantasma dependiendo de su posicion
 * param px, py : son la posicion del pacman
 * param fx, fy : son la posicion del fantasma
 * param mx: es el movimento del fantasma 
 */
function muveBlueY(fx,fy,mx,px=0,py=0){
  if(fx-1== px && py<=24 &&  py>=2 ){
     if(py>fy){
       return 1/2
     }else{
     return-1/2
      }
  }
  if(mx<0){
      if(fy-1/2 == 2){
      return 1/2
    }else{
      return mx
    }
  }else{
     if(fy+1/2 == 24){
      return -1/2
     }else{
      return mx
    }
    }
  }
  //test
// si no ve el pacman
  console.log(muveBlueY(16,7,-1/2)==-1/2)
  console.log(muveBlueY(16,24,1/2)==1/2)
//cuando ve el pacman
  console.log(muveBlueY(16,7,-1/2, 15,9 )==1/2)



/**
 * contract:<muvePinkX><number><number>--><number>
 * proposito: arroja un movimiento que debe hacer el fantasma dependtiendo de su posicion
 * param fx, fy : son la posicion del fantasma
 */

function muvePinkX(fx, fy) {
  if ((fy == 14 && fx <= 8  && fx > 0)||
  (fy==14 && fx <21 && fx>14.5 )||
   (fy==16 && fx < 14.5 && fx>8.5)) {
    return -1/2
  }else return 0
}
//test
console.log(muvePinkX(14,16)==-1/2)
console.log(muvePinkX(15,8)==0)
/**
 * contract:<muvePinkY><number><number><munber><number>--><number>
 * proposito: arroja un movimiento que debe hacer el fantasma dependtiendo de su posicion
 * param fx, fy : son la posicion del fantasma
 * 
 */
function muvePinkY(fx, fy) {
  if (fx==8 && fy<17 && fy>14){
    if (fy-1 < 14) return 0
    else  return -1/2
  }
  if(fy == 14 || fy==14.5 || fy== 15 && fx!=8){
    if ((fy == 14 && fx <= 8.5  && fx > 0)||
    (fy==14 && fx < 23 && fx>= 14.5 )){
      return 0
    }else {
      return 1/2
  }
  }else {
     return 0
  }
}
//test
console.log(muvePinkY(14,16)==0)
console.log(muvePinkY(8,15)==-1/2)

/**
 * contract:<posPink><number>--><number>
 * proposito: no deja que la posicion salga del mapa
 * param fx : la posicion del fantasma
 */
function posPink(fx){
  if(fx < 1 ){
  return fx+21
  }else{
    return fx
  }
}
//test
console.log( posPink(0.5) == 21.5)
console.log( posPink(0)== 21 )
/**
 * contract:<muveRedx><number><number><munber><number><number>--><number>
 * proposito: arroja un movimiento que debe hacer el fantasma dependtiendo de su posicion
 * param px, py : son la posicion del pacman
 * param fx, fy : son la posicion del fantasma
 * param mx: es el movimento del fantasma 
 */
function muveRedX(fx,fy,mx,px=0,py=0){
if(fy-1== py && px<=13 &&  px>=7 ){
    if(px>fx){
      return 1/2
    }else{
      return-1/2
    }
}if(mx<0){
    if(fx-1/2 == 8){
    return 1/2
  }else{
    return mx
  }
}else{
   if(fx+1/2 == 14){
    return -1/2
   }else{
    return mx
  }
  }
}
//test
console.log(muveRedX(11,11,1/2,12,10)==1/2)
console.log(muveRedX(8,11,1/2,12,10)==1/2)

/**
 * contract:<muveOrangeX><number><number>--><number>
 * proposito: arroja un movimiento que debe hacer el fantasma dependtiendo de su posicion
 * param fx, fy : son la posicion del fantasma 
 */

function muveOrangeX(fx, fy) {
  if ((fx >= 1 && fx < 9.5 ) && fy == 2) {
    return 1 /2;
  }
  
  if((fx <= 10 && fx > 6.5) && fy + 1/2 >= 6){
    return -1/2
  }
  if (fx >= 9 && (fy < 6 && fy >= 2)) {
    return 0;
  }
  if (fy==9 &&(fx<=6 && fx-1/2 > 2)) {
    return -1/2
  }

  if (fx >= 5 && (fy < 8 || fy >= 6)) {
    return 0;
  }
  if ( fy <= 9 && fx - 2 < 2 ) {
    return 0;
  }

}
///test
//cuando no  esta rodeado de paredes
console.log(muveOrangeX(2, 2)==1/2);
console.log(muveOrangeX(9, 2)==1/2);
//cuando esta rodeado de paredes
console.log(muveOrangeX(10, 3)==0);
console.log(muveOrangeX(10, 5)==0);



function muveOrangeY(fx,fy){
  if(fy-1 < 2 && (fx == 2 || fx < 10 )) return 0
 
  if (fx == 10 && (fy+1/2 < 6 || fy == 2)) {
    return 1/2;
  }
  if ((fx <= 10 && fx > 6) && fy + 1/2 >= 6) {
   return 0
 }
  if (fx == 6 && fy >= 6 && fy <= 8 ) {
    return 1/2;

  }if ((fx <= 6 && fx > 2) && fy + 1/2 >= 2) {
   return 0
 }
  if ( fy <= 9 || fx-1/2 < 2) {
    return -1/2;
  }
}
///test
//cuando no  esta rodeado de paredes
console.log(muveOrangeY(2, 2)==0);
console.log(muveOrangeY(6, 2)==0);
//cuando esta rodeado de paredes
console.log(muveOrangeY(10, 3)==1/2);
console.log(muveOrangeY(10, 5)==1/2);


/**
 * contract:<number><number><munber><number>--><bool>
 * proposito: vallida si dos coordenadas esta 1 o 1/2 de sercania 
 * esto simula que los fantasmas y el pacman se tocan 
 * 
 */
  function posGost(xF,yF,xP,yP){
   return (xF-1 == xP) && (yF-1== yP-1/2 )|| (xF == xP+1/2) && (yF-1== yP )||(xF-1 == xP) && (yF-1== yP+1/2 )||(xF == xP+1.5) && (yF-1== yP )
}
  //test
  console.log(posGost(2,3,2,3)==false)
/**
 * contract:<list><number><munber>--><bool>
 * valida la posicion del pacman en una lista de coordenadas
 * 
 */
function validarPacman(list,x,y){
  if (isEmpty(list)){
    return false
  }else{
    return (first(list).x == x && first(list).y == y) || validarPacman(rest(list),x,y) 
}
}
//test
console.log(validarPacman([{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}],2,3)==false)
console.log(validarPacman([{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}],10,3)==false)


/**
 * contract: <deleteCookie><list><number><number>--><list>
 * Proposito: Elimina un elemento de la lista si sus coordenadas coinciden con las recibidas
 * 
 */
function deleteCookie(lst, x, y){
  if(isEmpty(lst)){
    return []
  }else if(first(lst).x == x && first(lst).y == y){ 
    return rest(lst)
  }else{
    return cons(first(lst), deleteCookie(rest(lst), x, y))
  }
}
//test
console.log(deleteCookie([{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}],2,2)[0].x==3)
console.log(deleteCookie([{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}],4,2)[0].x==2)


const BLOQUES = [ 
{x: 10, y: 1},
{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 8, y: 2}, {x: 10, y: 2}, {x: 12, y: 2}, {x: 13, y: 2}, {x: 14, y: 2}, {x: 16, y: 2}, {x: 17, y: 2}, {x: 18, y: 2},
{x: 2, y: 3}, {x: 4, y: 3}, {x: 6, y: 3}, {x: 8, y: 3}, {x: 10, y: 3}, {x: 12, y: 3}, {x: 14, y: 3}, {x: 16, y: 3}, {x: 18, y: 3},
{x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 6, y: 4}, {x: 7, y: 4}, {x: 8, y: 4}, {x: 10, y: 4}, {x: 12, y: 4}, {x: 13, y: 4}, {x: 14, y: 4}, {x: 16, y: 4}, {x: 17, y: 4}, {x: 18, y: 4},
{x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 6, y: 6}, {x: 8, y: 6}, {x: 9, y: 6}, {x: 10, y: 6}, {x: 11, y: 6}, {x: 12, y: 6}, {x: 14, y: 6}, {x: 16, y: 6}, {x: 17, y: 6}, {x: 18, y: 6},
{x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7}, {x: 6, y: 7}, {x: 8, y: 7}, {x: 9, y: 7}, {x: 10, y: 7}, {x: 11, y: 7}, {x: 12, y: 7}, {x: 14, y: 7}, {x: 16, y: 7}, {x: 17, y: 7}, {x: 18, y: 7},
{x: 6, y: 8}, {x: 10, y: 8}, {x: 14, y: 8},
{x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 10, y: 9}, {x: 12, y: 9}, {x: 13, y: 9}, {x: 14, y: 9}, {x: 16, y: 9}, {x: 17, y: 9}, {x: 18, y: 9}, {x: 19, y: 9},
{x: 4, y: 10}, {x: 6, y: 10}, {x: 14, y: 10}, {x: 16, y: 10},
{x: 4, y: 11}, {x: 6, y: 11}, {x: 8, y: 11}, {x: 9, y: 11}, {x: 11, y: 11}, {x: 12, y: 11}, {x: 14, y: 11}, {x: 16, y: 11},
{x: 1, y: 12}, {x: 2, y: 12}, {x: 3, y: 12}, {x: 4, y: 12}, {x: 6, y: 12}, {x: 8, y: 12}, {x: 12, y: 12}, {x: 14, y: 12}, {x: 16, y: 12}, {x: 17, y: 12}, {x: 18, y: 12}, {x: 19, y: 12},
{x: 8, y: 13}, {x: 12, y: 13},
{x: 1, y: 14}, {x: 2, y: 14}, {x: 3, y: 14}, {x: 4, y: 14}, {x: 6, y: 14}, {x: 8, y: 14}, {x: 9, y: 14}, {x: 10, y: 14}, {x: 11, y: 14}, {x: 12, y: 14}, {x: 14, y: 14}, {x: 16, y: 14}, {x: 17, y: 14}, {x: 18, y: 14}, {x: 19, y: 14},
{x: 4, y: 15}, {x: 6, y: 15}, {x: 14, y: 15}, {x: 16, y: 15},
{x: 4, y: 16}, {x: 6, y: 16}, {x: 8, y: 16}, {x: 9, y: 16}, {x: 10, y: 16}, {x: 11, y: 16}, {x: 12, y: 16}, {x: 14, y: 16}, {x: 16, y: 16},
{x: 1, y: 17}, {x: 2, y: 17}, {x: 3, y: 17}, {x: 4, y: 17}, {x: 6, y: 17}, {x: 8, y: 17}, {x: 9, y: 17}, {x: 10, y: 17}, {x: 11, y: 17}, {x: 12, y: 17}, {x: 14, y: 17}, {x: 16, y: 17}, {x: 17, y: 17}, {x: 18, y: 17}, {x: 19, y: 17},
{x: 10, y: 18},
{x: 2, y: 19}, {x: 3, y: 19}, {x: 4, y: 19}, {x: 6, y: 19}, {x: 7, y: 19}, {x: 8, y: 19}, {x: 10, y: 19}, {x: 12, y: 19}, {x: 13, y: 19}, {x: 14, y: 19}, {x: 16, y: 19}, {x: 17, y: 19}, {x: 18, y: 19},
{x: 4, y: 20}, {x: 16, y: 20},
{x: 1, y: 21}, {x: 2, y: 21}, {x: 4, y: 21}, {x: 6, y: 21}, {x: 8, y: 21}, {x: 9, y: 21}, {x: 10, y: 21}, {x: 11, y: 21}, {x: 12, y: 21}, {x: 14, y: 21}, {x: 16, y: 21}, {x: 18, y: 21}, {x: 19, y: 21},
{x: 1, y: 22}, {x: 2, y: 22}, {x: 4, y: 22}, {x: 6, y: 22}, {x: 8, y: 22}, {x: 9, y: 22}, {x: 10, y: 22}, {x: 11, y: 22}, {x: 12, y: 22}, {x: 14, y: 22}, {x: 16, y: 22}, {x: 18, y: 22}, {x: 19, y: 22},
{x: 6, y: 23}, {x: 10, y: 23}, {x: 14, y: 23},
{x: 2, y: 24}, {x: 3, y: 24}, {x: 4, y: 24}, {x: 5, y: 24}, {x: 6, y: 24}, {x: 7, y: 24}, {x: 8, y: 24}, {x: 10, y: 24}, {x: 12, y: 24}, {x: 13, y: 24}, {x: 14, y: 24}, {x: 15, y: 24}, {x: 16, y: 24}, {x: 17, y: 24}, {x: 18, y: 24}

]


let blue = null
let pink = null
let orange = null
let red = null
let muerte= null
/**
 * contract:<gradosARadianes ><number>--><number>
 * transforma de grados a radianes
 */
const gradosARadianes = deg => (deg * Math.PI) / 180.0;
//test
 console.log(gradosARadianes( 180)== Math.PI  )

/**
 * contrato:<forEach> <list>(<num><num>--><?>)<index> --> <?>
 * proposito: leer un mapa y ponerlo en el canvas
 */
function forEach(list, fun, index=0){
  if(!isEmpty(list)){
    fun(first(list), index)
    forEach(rest(list), fun, index + 1)
  }
}
/**
 * contrato <make><estructura> ---> <estructura>
 */
function make(data, attribute) {
  return Object.assign({}, data, attribute);
}
/**
 * 
 */
function sketchProc(processing) {

  processing.setup = function () {
    processing.frameRate(5);
    processing.size(WIDTH,HEIGH);
    blue = processing.loadImage("images/blue.png")
    pink = processing.loadImage("images/pink.png")
    orange = processing.loadImage("images/orang.png")
    red = processing.loadImage("images/red.png")
    muerte = processing.loadImage("images/muerte.png")
    processing.state ={
      time:0,
      score:0,
      pacman:{x:10, y:20,muvex:0 ,muvey:0, start:-Math.PI * 3 / 4, end: Math.PI * 3 / 4},//star y end es el angulo donde se forma el arc
      cookies:[
        {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1}, {x: 11, y: 1}, {x: 12, y: 1}, {x: 13, y: 1}, {x: 14, y: 1}, {x: 15, y: 1}, {x: 16, y: 1}, {x: 17, y: 1}, {x: 18, y: 1}, {x: 19, y: 1},
        {x: 1, y: 2}, {x: 5, y: 2}, {x: 9, y: 2}, {x: 11, y: 2}, {x: 15, y: 2}, {x: 19, y: 2},
        {x: 5, y: 3}, {x: 9, y: 3}, {x: 11, y: 3}, {x: 15, y: 3},
        {x: 1, y: 4}, {x: 5, y: 4}, {x: 9, y: 4}, {x: 11, y: 4}, {x: 15, y: 4}, {x: 19, y: 4},
        {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 8, y: 5}, {x: 9, y: 5}, {x: 10, y: 5}, {x: 11, y: 5}, {x: 12, y: 5}, {x: 13, y: 5}, {x: 14, y: 5}, {x: 15, y: 5}, {x: 16, y: 5}, {x: 17, y: 5}, {x: 18, y: 5}, {x: 19, y: 5},
        {x: 1, y: 6}, {x: 5, y: 6}, {x: 7, y: 6}, {x: 13, y: 6}, {x: 15, y: 6}, {x: 19, y: 6},
        {x: 1, y: 7}, {x: 5, y: 7}, {x: 7, y: 7}, {x: 13, y: 7}, {x: 15, y: 7}, {x: 19, y: 7},
        {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 7, y: 8}, {x: 8, y: 8}, {x: 9, y: 8}, {x: 11, y: 8}, {x: 12, y: 8}, {x: 13, y: 8}, {x: 15, y: 8}, {x: 16, y: 8}, {x: 17, y: 8}, {x: 18, y: 8}, {x: 19, y: 8},
        {x: 5, y: 9}, {x: 15, y: 9},
        {x: 5, y: 10}, {x: 15, y: 10},
        {x: 5, y: 11}, {x: 15, y: 11},
        {x: 5, y: 12}, {x: 15, y: 12},
        {x: 1, y: 13}, {x: 2, y: 13}, {x: 3, y: 13}, {x: 4, y: 13}, {x: 5, y: 13}, {x: 15, y: 13}, {x: 16, y: 13}, {x: 17, y: 13}, {x: 18, y: 13}, {x: 19, y: 13},
        {x: 5, y: 14}, {x: 15, y: 14},
        {x: 5, y: 15}, {x: 15, y: 15},
        {x: 5, y: 16}, {x: 15, y: 16},
        {x: 5, y: 17}, {x: 15, y: 17},
        {x: 1, y: 18}, {x: 2, y: 18}, {x: 3, y: 18}, {x: 4, y: 18}, {x: 5, y: 18}, {x: 6, y: 18}, {x: 7, y: 18}, {x: 8, y: 18}, {x: 9, y: 18}, {x: 11, y: 18}, {x: 12, y: 18}, {x: 13, y: 18}, {x: 14, y: 18}, {x: 15, y: 18}, {x: 16, y: 18}, {x: 17, y: 18}, {x: 18, y: 18}, {x: 19, y: 18},
        {x: 1, y: 19}, {x: 5, y: 19}, {x: 9, y: 19}, {x: 11, y: 19}, {x: 15, y: 19}, {x: 19, y: 19},
        {x: 2, y: 20}, {x: 3, y: 20}, {x: 5, y: 20}, {x: 6, y: 20}, {x: 7, y: 20}, {x: 8, y: 20}, {x: 9, y: 20}, {x: 11, y: 20}, {x: 12, y: 20}, {x: 13, y: 20}, {x: 14, y: 20}, {x: 15, y: 20}, {x: 17, y: 20}, {x: 18, y: 20},
        {x: 3, y: 21}, {x: 5, y: 21}, {x: 7, y: 21}, {x: 13, y: 21}, {x: 15, y: 21}, {x: 17, y: 21},
        {x: 3, y: 22}, {x: 5, y: 22}, {x: 7, y: 22}, {x: 13, y: 22}, {x: 15, y: 22}, {x: 17, y: 22},
        {x: 1, y: 23}, {x: 2, y: 23}, {x: 3, y: 23}, {x: 4, y: 23}, {x: 5, y: 23}, {x: 7, y: 23}, {x: 8, y: 23}, {x: 9, y: 23}, {x: 11, y: 23}, {x: 12, y: 23}, {x: 13, y: 23}, {x: 15, y: 23}, {x: 16, y: 23}, {x: 17, y: 23}, {x: 18, y: 23}, {x: 19, y: 23},
        {x: 1, y: 24}, {x: 9, y: 24}, {x: 11, y: 24}, {x: 19, y: 24},
        {x: 1, y: 25}, {x: 2, y: 25}, {x: 3, y: 25}, {x: 4, y: 25}, {x: 5, y: 25}, {x: 6, y: 25}, {x: 7, y: 25}, {x: 8, y: 25}, {x: 9, y: 25}, {x: 10, y: 25}, {x: 11, y: 25}, {x: 12, y: 25}, {x: 13, y: 25}, {x: 14, y: 25}, {x: 15, y: 25}, {x: 16, y: 25}, {x: 17, y: 25}, {x: 18, y: 25}, {x: 19, y: 25}

      ],
      bigCookies:[
        {x: 1, y: 3},
        {x: 19, y: 3},
        {x: 1, y: 20},
        {x: 19, y: 20},
        {x: 10, y: 12}
      ],
      ghost:{
        blue:{x:8, y:14,muvex:0, muvey:0},//muvey es el movimiento oredeterminado en eje y
        blue2:{x:16, y:2,muvex:0, muvey:1/2},

        pink:{x:6, y:14 ,muvex: -1/2 , muvey:0  },
        orange:{x:2, y:9,muvex:0, muvey:0},//muvey es el movimiento oredeterminado en eje x
        red:{x:11, y:11, muvex:1/2, muvey:0}
      }
      
      
    }
    
  }



  processing.drawGame = function (world) {
    processing.background(0,0,0);
  
    //processing.state = processing.onKeyEvent(processing.state , processing.UP);

    forEach(MAPA, (row, i) =>{
      forEach(row, (block, j)=>{
        //console.log(processing.PFont.list())
        processing.textFont(processing.loadFont('monospace'), 15)
        processing.fill(255, 0, 0);
        processing.text("Si pierdes  "  , 450, 50)
          processing.text("reinicia la pagina  "  , 450, 80)

	      processing.textFont(processing.loadFont('monospace'), 25)
        processing.fill(255, 250, 250);
        processing.text("SCORE: " + world.score, 450, 350);
        processing.text("TIME: " + parseInt(world.time/5), 450, 240);

        processing.textFont(processing.loadFont('monospace'), 15)
        processing.fill(255, 0, 0);
        processing.text(" puntaje < 0   "  , 450, 400)
          processing.text("  MUERES "  , 450, 420)

        if (block == 1){                   // pintar pacman
          processing.fill(255, 30, 60); 
          if(world.time % 2 == 0 ){
            processing.arc(world.pacman.x * BSIZE+BSIZE/2, 
            world.pacman.y * BSIZE+BSIZE/2, BSIZE, BSIZE,world.pacman.start,world.pacman.end); // boca abierta
            
          }else{
            processing.arc(world.pacman.x * BSIZE+BSIZE/2, 
            world.pacman.y * BSIZE+BSIZE/2, BSIZE, BSIZE, 0, Math.PI * 2); // boca cerrado
          }
        }

        if (block == 2){  
                  //pintar muros
          processing.fill(93, 117, 214);
          processing.rect(j*BSIZE, i*BSIZE, BSIZE, BSIZE)
         
        }
        if (block == 75){  
                  //pintar muros
          processing.fill(250, 250, 255);
          processing.rect(j*BSIZE, i*BSIZE, BSIZE, BSIZE)
         
        }
        if (block == 3){
          processing.fill(250, 200, 30);  // pintar galletas
          if(validarPacman(world.cookies, j, i)){
            processing.ellipse(j*BSIZE+BSIZE/2, i* BSIZE+BSIZE/2, BSIZE / 3, BSIZE / 3);
          }
        }

        if (block == 4){
          if(world.time % 2 == 0 ){
          processing.fill(250, 200, 30);  // pintar galletas grandes
            if(validarPacman(world.bigCookies, j, i)){
              processing.ellipse(j* BSIZE+BSIZE/2, i* BSIZE+BSIZE/2, BSIZE / 1.5, BSIZE / 1.5);
            }
          }else{
            null
          }
        }
        if (block == 2.9){                  // fantasmas azules
         blue.resize(BSIZE,BSIZE)
          processing.image(blue, world.ghost.blue2.x * BSIZE-BSIZE, world.ghost.blue2.y * BSIZE-BSIZE)
        }

        if (block == 5){                  // fantasmas azules
         blue.resize(BSIZE,BSIZE)
          processing.image(blue, world.ghost.blue.x * BSIZE-BSIZE, world.ghost.blue.y * BSIZE-BSIZE)
        }

        if (block == 6){                  // fantasmas rosados
         pink.resize(BSIZE,BSIZE)
          processing.image(pink, world.ghost.pink.x * BSIZE-BSIZE, world.ghost.pink.y * BSIZE-BSIZE)
        }

        if (block == 7){                  // fantasmas naranjas
         orange.resize(BSIZE,BSIZE)
          processing.image(orange, world.ghost.orange.x * BSIZE-BSIZE, world.ghost.orange.y * BSIZE-BSIZE)
        }

        if (block == 8){                  // fantasmas rojos
         red.resize(BSIZE,BSIZE)
          processing.image(red, world.ghost.red.x * BSIZE-BSIZE, world.ghost.red.y * BSIZE-BSIZE)
        }
        



        
       
      })
    })
    
  }

  processing.onKeyEvent = function(world, keyCode){
    //console.log(keyCode)
    if(keyCode == processing.LEFT){   
      if(world.pacman.x-1 <= 0 &&( world.pacman.y >= 13 && world.pacman.y <= 13 )){   //Cuando pacman atraviesa el final del mapa por el lado lateral izquierdo, lo reubica al final del lateral derecho
        return make(world, {
          pacman:{
            x:world.pacman.x + 20,
            y:world.pacman.y, start:-Math.PI * 3 / 4, end: Math.PI * 3 / 4
          }
        })
      }else if(world.pacman.x-1 == 0 || validarPacman(BLOQUES,world.pacman.x-1,world.pacman.y)    //Si la posicion de Pacman en el siguiente movimiento coincide con la de un bloque del mapa, no se mueve
       || validarPacman(BLOQUES,world.pacman.x-1 ,world.pacman.y-1/2 )||validarPacman(BLOQUES,world.pacman.x-1 ,world.pacman.y+1/2 )){ 
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y ,
            start:-Math.PI * 3 / 4, 
            end: Math.PI * 3 / 4
          }
        })
      }else if(validarPacman(world.cookies , world.pacman.x-1, world.pacman.y)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta, Pacman se mueve y se la come, aumentando su score en 1
        return make(world, {
          pacman:{
            x:world.pacman.x - 1/2,
            y:world.pacman.y,
            start:-Math.PI * 3 / 4, 
            end: Math.PI * 3 / 4
          },
          cookies: deleteCookie(world.cookies, world.pacman.x-1, world.pacman.y),   //elimina la galleta
          score: world.score + 1
        })
      }else if(validarPacman(world.bigCookies , world.pacman.x-1, world.pacman.y)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta grande, Pacman se mueve y se la come, aumentando su score en 10
        return make(world, {
          pacman:{
            x:world.pacman.x - 1/2,
            y:world.pacman.y,
            start:-Math.PI * 3 / 4, 
            end: Math.PI * 3 / 4
          },
          bigCookies: deleteCookie(world.bigCookies, world.pacman.x-1, world.pacman.y),   //elimina la galleta
          score: world.score + 10
         
        })
      }else{    //Si no, Pacman unicamente se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x - 1/2,
            y:world.pacman.y,
            start:-Math.PI * 3 / 4,
            end: Math.PI * 3 / 4
          }
        })
      }
      
    }else if(keyCode == processing.RIGHT){
      if(world.pacman.x+1 >= (441/BSIZE) - 1 &&( world.pacman.y >= 13 && world.pacman.y <= 13 )){   // Cuando pacman atraviesa el final del mapa por el lado lateral derecho, lo reubica al final del lateral izquierdo
        return make(world, {
          pacman:{
            x:world.pacman.x-20,
            y:world.pacman.y,
            start:gradosARadianes(-315), 
            end: -Math.PI / 4
          }
        })
      }
      if(world.pacman.x + 1 == (441/BSIZE) - 1|| validarPacman(BLOQUES,world.pacman.x+1,world.pacman.y)
       || validarPacman(BLOQUES,world.pacman.x+1 ,world.pacman.y-1/2 )||validarPacman(BLOQUES,world.pacman.x+1 , world.pacman.y+1/2 )){   //Si la posicion de Pacman en el siguiente movimiento coincide con un bloque del mapa, no se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y, 
            start:gradosARadianes(-315), 
            end: -Math.PI / 4
          }
        })
      }else if(validarPacman(world.cookies , world.pacman.x+1, world.pacman.y)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta, Pacman se mueve y se la come, aumentando su score en 1
        return make(world, {
          pacman:{
            x:world.pacman.x + 1/2,
            y:world.pacman.y ,
            start: gradosARadianes(-315), 
            end: -Math.PI / 4
          },
          cookies: deleteCookie(world.cookies, world.pacman.x+1, world.pacman.y),   //elimina la galleta
          score: world.score + 1
          
        })
      }else if(validarPacman(world.bigCookies , world.pacman.x+1, world.pacman.y)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta grande, Pacman se mueve y se la come, aumentando su score en 10
        return make(world, {
          pacman:{
            x:world.pacman.x + 1/2,
            y:world.pacman.y ,
            start: gradosARadianes(-315), 
            end: -Math.PI / 4
          },
          bigCookies: deleteCookie(world.bigCookies, world.pacman.x+1, world.pacman.y),   //elimina la galleta
          score: world.score + 10
          
        })
      }else{    //Si no, Pacman unicamente se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x+1/2 ,
            y:world.pacman.y,
            start:gradosARadianes(-315), 
            end: -Math.PI / 4
          }
        })
      }
    }

    if(keyCode == processing.UP){
      if(world.pacman.y - 1 == 0 ||  validarPacman(BLOQUES,world.pacman.x,world.pacman.y-1)
        || validarPacman(BLOQUES,world.pacman.x-1/2 ,world.pacman.y-1 )||validarPacman(BLOQUES,world.pacman.x+1/2 , world.pacman.y-1 )){   //Si la posicion de Pacman en el siguiente movimiento coincide con la de un bloque del mapa, no se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y, 
            start:gradosARadianes(-235+180), 
            end: gradosARadianes(45+180)
          }
        })
      }else if(validarPacman(world.cookies ,world.pacman.x,world.pacman.y-1)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta, Pacman se mueve y se la come, aumentando su score en 1
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y - 1/2 ,
            start:gradosARadianes(-235+180), 
            end: gradosARadianes(45+180)
          },
          cookies: deleteCookie(world.cookies, world.pacman.x, world.pacman.y - 1),   //elimina la galleta
          score: world.score + 1
        })
      }else if(validarPacman(world.bigCookies, world.pacman.x,world.pacman.y-1)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta grande, Pacman se mueve y se la come, aumentando su score en 10
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y - 1/2 ,
            start:gradosARadianes(-235+180), 
            end: gradosARadianes(45+180)
          },
          bigCookies: deleteCookie(world.bigCookies, world.pacman.x, world.pacman.y - 1),   //elimina la galleta
          score: world.score + 10
        })
        
      }else{    //Si no, Pacman unicamente se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y - 1/2,
            start:gradosARadianes(-235+180), 
            end: gradosARadianes(45+180)
          }
        })
      }

    }else if(keyCode == processing.DOWN){
      if(world.pacman.y + 1 == (HEIGH/BSIZE) - 1 ||  validarPacman(BLOQUES,world.pacman.x,world.pacman.y+1)
      || validarPacman(BLOQUES,world.pacman.x-1/2 ,world.pacman.y+1 )||validarPacman(BLOQUES,world.pacman.x+1/2 , world.pacman.y+1 ) ){   //Si la posicion de Pacman en el siguiente movimiento coincide con la de un bloque del mapa, no se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y,
            start:-Math.PI * 5 / 4, 
            end: Math.PI  / 4
          }
        })
      }else if(validarPacman(world.cookies ,world.pacman.x,world.pacman.y+1)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta, Pacman se mueve y se la come, aumentando su score en 1
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y + 1/2 ,
            start:-Math.PI * 5 / 4,
            end: Math.PI  / 4
          },
          cookies: deleteCookie(world.cookies, world.pacman.x, world.pacman.y+1),   //elimina la galleta
          score: world.score + 1
        })
      }else if(validarPacman(world.bigCookies ,world.pacman.x,world.pacman.y+1)){    //Si la posicion de Pacman en el siguiente movimiento coincide con la de una galleta grande, Pacman se mueve y se la come, aumentando su score en 10
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y + 1/2 ,
            start:-Math.PI * 5 / 4,
            end: Math.PI  / 4
          },
          bigCookies: deleteCookie(world.bigCookies, world.pacman.x, world.pacman.y+1),   //elimina la galleta
          score: world.score + 10
        })
      }else{    //Si no, Pacman unicamente se mueve
        return make(world, {
          pacman:{
            x:world.pacman.x,
            y:world.pacman.y + 1/2,
            start:-Math.PI * 5 / 4,
            end: Math.PI  / 4
          }
        })
      }
    }
  }

 
  processing.onTic = function (world) {
  
     if (posGost(world.ghost.red.x,world.ghost.red.y,world.pacman.x,world.pacman.y)||
        posGost(world.ghost.orange.x,world.ghost.orange.y,world.pacman.x,world.pacman.y)||
        posGost(world.ghost.pink.x,world.ghost.pink.y,world.pacman.x,world.pacman.y)||
        posGost(world.ghost.blue.x,world.ghost.blue.y,world.pacman.x,world.pacman.y)||posGost(world.ghost.blue2.x,world.ghost.blue2.y,world.pacman.x,world.pacman.y)){
          // el fantasma rojo quita mas puntos
          if(posGost(world.ghost.red.x,world.ghost.red.y,world.pacman.x,world.pacman.y)){
             return make(world, { time: world.time + 1 , score:world.score-20 })
            //el rosado da puntos, 3.0 (Aprobado) univalle
          }if(posGost(world.ghost.pink.x,world.ghost.pink.y,world.pacman.x,world.pacman.y)){
             return make(world, { time: world.time + 1 , score:world.score+ 3.0 })
             //los otros solo quitan 5 
          }else {
           return make(world, { time: world.time + 1 , score:world.score-5 })
          }
     }if(world.score< 0){
      return null
     }else {
      let py= world.pacman.y
      let px= world.pacman.x
      let pPx=world.ghost.pink.x
      let pBx=world.ghost.blue.x
     return make(world, { time: world.time + 1 , 
        pacman: { 
          x: world.pacman.x , 
          y: world.pacman.y ,
          start:world.pacman.start, end: world.pacman.end
        },
        ghost:  {
          blue: {
            x: posPink(pBx)+world.ghost.blue.muvex, 
            y: world.ghost.blue.y +world.ghost.blue.muvey,
            muvex: muvePinkX(pBx , world.ghost.blue.y),
            muvey:muvePinkY(pBx , world.ghost.blue.y) }, 
            blue2: {
            x: world.ghost.blue2.x + world.ghost.blue2.muvex , 
            y: world.ghost.blue2.y + world.ghost.blue2.muvey ,
            muvex: world.ghost.blue2.muvex ,
            muvey: muveBlueY(world.ghost.blue2.x,world.ghost.blue2.y,world.ghost.blue2.muvey, px , py )
            },
          pink: {
            x: posPink(pPx) + world.ghost.pink.muvex, 
            y: world.ghost.pink.y + world.ghost.pink.muvey , 
            muvex: muvePinkX(pPx , world.ghost.pink.y),
            muvey:muvePinkY(pPx , world.ghost.pink.y)  },
          orange: {
            x: world.ghost.orange.x + world.ghost.orange.muvex , 
            y: world.ghost.orange.y + world.ghost.orange.muvey, 
            muvex:muveOrangeX(world.ghost.orange.x,world.ghost.orange.y ),
            muvey:muveOrangeY(world.ghost.orange.x,world.ghost.orange.y) },
          red: {
            x: world.ghost.red.x + world.ghost.red.muvex , 
            y: world.ghost.red.y , muvex: muveRedX(world.ghost.red.x,world.ghost.red.y,world.ghost.red.muvex, px , py ) } 
        }
        
        });
    }
  }

  processing.onMouseEvent = function (world, event) {
    return make(world, {});
  }

  // ******************** De aquí hacia abajo no debe cambiar nada. ********************

  // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
  // No cambie esta función. Su código debe ir en drawGame
  processing.draw = function () {
    processing.drawGame(processing.state);
    processing.state = processing.onTic(processing.state);
    
  };

  // Esta función se ejecuta cada vez que presionamos una tecla. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.keyPressed = function () {
    processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
  }

  // Esta función se ejecuta cada vez movemos el mouse. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.mouseMoved = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
  }

  // Estas funciones controlan los eventos del mouse. 
  // No cambie estas funciones. Su código debe ir en OnMouseEvent
  processing.mouseClicked = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseDragged = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mousePressed = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseReleased = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }
  // Fin de los eventos del mouse
}
console.log("datos curiosos al final del codigo")
var canvas = document.getElementById("canvas");
// Adjuntamos nuestro sketch al framework de processing
var processingInstance = new Processing(canvas, sketchProc);
/**
 * 
 *  * Datos curiosos (Easter Eggs): 
 * 1. Los bloques blancos se asignaron al numero 75 por los 75 años que 
 *     tiene la Universidad del Valle.
 *  
 *  2. el pacman y el resguardo que protege el ghost rojo son de color rojo     y blanco, como los colores académicos de univalle 
 * 
 *  3. si te diriges hacia un fantasma, sin dejar de presionar la tecla.     
 *     podras atravesar el fantasma sin que te haga daño.
 * 
 *  4. el rojo te va a seguir, por que es un fan-tasma, ;) 
 * 
 * 
 * 
 * Agradecemos al profesor jefferson  por instruirnos en el curso FDP * y en   la creacion del videojuego. *
 
 *  Profe que no se nos olvide:
 *  *          | 
 * *           | 
             \ | / 
  *           \ / 
  * <<<<<Documentacion>>>>
   * @author: Esteban Rendon, Camilo Ortiz, Kevin Quintero, 
   * Jesús Peña y Juan David Tovar.   
   * contratc: <pacman><programcion_funcional>--><videojuego> 
   * proposito: desasrrollar videojuegos y aprender paradigma funcional
   * @example
   * return aprobado ;] 
   * pacman(proyecto) * 
   * */

