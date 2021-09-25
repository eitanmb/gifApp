import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe hacer bien el render', () => {
    
        useFetchGifs.mockReturnValue( {
            data:[],
            loading: true
        });
       
        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar un item luego de ejecutar useFetchGifs', () => {

        const gifs = [
            {
                id: "ABC",
                title: "Mi Imagen",
                url: "https://localhos/miimagen.jpg"
             },
    
            {
                id: "FGFG",
                title: "Mi Imagen",
                url: "https://localhos/miimagen.jpg"
            }
        ] ;

        useFetchGifs.mockReturnValue( {
            data:gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    
    
})
