import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGif';

export const GifGrid = ({category}) => {

    const {data:Images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3> { category } </h3>
            { loading && 'Cargando...'}
            <div className="card-grid">
                {
                    Images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                    
                }
            </div>
            
        </>
    )

}
