import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Functional Component FC
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Legend of Zelda'])
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => 
                        ( 
                            <GifGrid 
                                key={category}
                                category={category} 
                            /> 
                        )
                    )
                
                }
            </ol>
        </>

    )

}

export default GifExpertApp;