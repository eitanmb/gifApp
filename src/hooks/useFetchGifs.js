import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [estado, setEstado] = useState(
        {
            data:[],
            loading: true
        }
    );

    useEffect( () => {
        
        getGifs( category )
            .then( (imgs) => {
                
                setEstado( {
                    data: imgs,
                    loading: false
                })
            });
    
        }, [category]);


    return estado //{ data:[], loading: true }

}