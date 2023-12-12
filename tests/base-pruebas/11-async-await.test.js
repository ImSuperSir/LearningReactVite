import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Testing async functions', () =>
{


  test('should return a image url', async () =>
  {

    //getImagen
    const url = await getImagen();
    // console.log(url);

    expect(typeof url).toBe('string');
    

  })


})
