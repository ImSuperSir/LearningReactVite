import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Testing arrays ', () => {
  

  test('should get a heroe', () => {
    
    const lHeroeID = 1;

    const lHero = getHeroeById(lHeroeID);

    // console.log(lHero);

    expect(lHero).toStrictEqual({id: 1, name: 'Batman', owner: 'DC'});


  });


  test('should not get a hero', () => {
    
    const lHeroeID = 100;

    const lHero = getHeroeById(lHeroeID);

    // console.log(lHero);

    expect(lHero).toBe(undefined); // .toStrictEqual({id: 1, name: 'Batman', owner: 'DC'});
    


  });


  test('should Get the heroes number', () => {
    
    let lOwner = 'DC';

    let lResult = getHeroesByOwner(lOwner);
    // console.log(lResult);

    expect(lResult.length).toBe(3);

    lOwner = 'Marvel'
    lResult = getHeroesByOwner(lOwner);

    // console.log(lResult);

    expect(lResult.length).toEqual(2);
    expect(lResult).toEqual(    [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);

  })
  
  
})
