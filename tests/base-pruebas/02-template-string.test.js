import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

  test('get saludo debe regresar "Hola Lauro"', () => 
  {
    const lName = 'Lauro';
    const lMessage = getSaludo(lName);

    expect(lMessage).toBe(`Hola ${lName}`);

  })
  
})
