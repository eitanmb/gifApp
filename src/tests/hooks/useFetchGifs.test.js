import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'


describe('Pruebas en useFetchGifs', () => {

    test('debe retornar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );

        const {data, loading}  = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });
    
    
})
