import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas de promesas', () =>
{

  test('should return a heroe', (done) =>
  {
    const lId = 1;

    getHeroeByIdAsync(lId)
      .then((hero) =>
      {

        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });

        done();
      })

  });

  test('should not return a heroe', (done) =>
  {
    const lId = 100;

    getHeroeByIdAsync(lId)
      .then((hero) =>
      {
         expect(hero).toBeFalsy();
         done(); 
      }
      )
      .catch((error) =>
      {

        expect(error).toBe('No se pudo encontrar el héroe');

        done();
      })

  })


})
