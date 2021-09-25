import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifExpertApp from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {

    test('debe dibujar el componente correctamente ', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar una lista de categories', () => {
        
        const categories = ['Zelda', 'Mario'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length +1 );

    });
    
    
    
});
