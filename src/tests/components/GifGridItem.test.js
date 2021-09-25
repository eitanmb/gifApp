import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const title = "Un titulo";
    const url = "https://localhos/imagen.jpg";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe dibujar correctamente el componente', ()=> {
        expect( wrapper ).toMatchSnapshot();
    });


    test('debe tener un párrafo con el title ', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
        
    });

    test('debe tener un párrafo con el title ', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
        
    });

    test('debe tener una imagen con las props igual al src y alt ', () => {

        const img = wrapper.find('img');

        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );
        
    });

    test('div debe contener la clase animate__fadeIn ', () => {

        const div = wrapper.find('div');
        const className = div.props().className;
       
        expect( className.includes('animate__fadeIn') ).toBe(true);
        
    })
    
    
    
});