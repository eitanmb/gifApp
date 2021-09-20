import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleValue = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2 ) {
            setCategories ( catsExistentes => [ inputValue, ...catsExistentes] );
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={ e => handleSubmit(e) }>
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
