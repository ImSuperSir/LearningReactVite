import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () =>
{

  test('get user debe retornar un objeto', () =>
  {

    const lUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const lNewUser = getUser();

    expect(lUser).toEqual(lNewUser);

  });

  test('should get a userName', () => {
    


    const lUserID = {
      uid: 'ABC567',
      username: 'Lauro'
    };


    const lNewUserID = getUsuarioActivo('Lauro');


    // expect(lUserID).toEqual(lNewUserID);

    expect(lNewUserID).toEqual({
      uid: 'ABC567',
      username: 'Lauro'.toUpperCase()
    });


  })
  

})
