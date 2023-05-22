/*
    Funcion que recibe un numero, y se determina si es repdigit 
    ( un numero compuesto repetidas veces del mismo digito )
*/

function isRepdigit ( num ) {

    /*
        Con every se analiza cada uno de los elementos del array y nos devuelve true
        solo si todos los elementos cumplen con la condición. Que es comparar con el 
        primer elemento del array, si todos los demas son iguales al primero, 
        regresa true, indicando que es repdigit
    */

    return String(num).split('').every(( x, i, arra) => x === arra[0] );
}

let response = isRepdigit(999999999); //ya no son iguales todos
console.log("🚀 ~ file: script.js:19 ~ response:", response)
