export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

//en los casos de test, se ejecuta todo el archivo,
//aca el test enviaría error porque se usa nombre (variable) 
// y esta no esta definida en un scope correcto
// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );