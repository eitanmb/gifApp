import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleValue = (e) => {
        setInputValue( e.target.value );

        //para fines de las pruebas
        console.log('handleValue', inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit', inputValue);

        if(inputValue.trim().length > 2 ) {
            setCategories ( catsExistentes => [ inputValue, ...catsExistentes] );
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={ e => handleSubmit(e) }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange= { (e) => handleValue(e) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
