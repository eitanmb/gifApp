import { getGifs } from "../../helpers/getGifs";

describe('Pruebas a getGifs con fetch', () => {

    test('debe retornar 10 imagenes ', async() => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe(10);

        
    });

    test('debe retornar 0 si no se envía la categoria ', async() => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0);

        
    });
    
    
})
