import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    //Solucion provisional definir la funcion que necesita el componente
    const setCategories = jest.fn()
    let wrapper;
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    });
    
    test('debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe cambiar el valor de la caja de texto', () => {
        
        const value = "Hola Mundo";
        const input = wrapper.find( 'input' );

        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim()).toBe(value);
        
    });

    test('si inputValue no tiene valor no deberia llamarse a la funcion setCategories', () => {

       
        wrapper.find('form').simulate('submit',{ preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
        
    });


    test('debe llamar a la funcion setCategories y limpiar caja de texto', () => {
        
        const value = "Hola Mundo";
        const input = wrapper.find( 'input' );

        input.simulate('change', { target: { value } });
       
        wrapper.find('form').simulate('submit',{ preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();

        input.simulate('change', { target: { value } });
        expect( input.prop('value') ).toBe('');
        
    });
    
    
    
})