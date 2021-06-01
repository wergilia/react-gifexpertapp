import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {


//    const [images, setImages] = useState([]);

const { data:images, loading } = useFetchGifs( category );



// Este hook controla para que se controle y se dispara solo cuando cambie la categoria no cada vez que haya cambiado algo
//     useEffect( () => {
//         getGifs( category )
//             .then( setImages )
//     }, [ category ]);   
         
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            <div className="card-grid">            
                
                { 
                    images.map( img => (                   
                        <GifGridItem
                            key={ img.id } 
                            { ...img } />    
                    ))
                }               
                
            </div>
        </>
    )
}
