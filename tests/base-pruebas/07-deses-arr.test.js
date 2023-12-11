import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Prueba, desestructura de arreglos', () => {
  
  test('should return a string and a number.', () => {

    // const lReturn = retornaArreglo();
    // console.log(lReturn);

    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);  //to be tambien evalua el tipo de dato

    console.log(typeof letters);
    console.log(typeof numbers);

    //expect(letters).toBe()

  })
  
})
