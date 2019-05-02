"use strict";
/*Ejercicio 6:
 Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota : La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado.
*/
//funcion de cubo
function Cubo(num) {
    //v1
    return Math.pow(num, 3);
    //v2
    //return num*num*num;
}
//funcion que muestre cubo
function Mostrar(num) {
    console.log(Cubo(num));
}
var numero = 5;
//muestro solo con la funcion "Cubo"
console.log(Cubo(numero));
//muestro utilizando la funcion Mostrar
Mostrar(numero);
//fat arrow
var numero2 = function (i) { return Math.pow(i, 3); };
console.log(numero2(3));
//# sourceMappingURL=Ej6.js.map