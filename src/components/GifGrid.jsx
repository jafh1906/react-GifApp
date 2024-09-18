import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect( ()=>{
    //     getImages(category);
    // }, [])

    const {images, loading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
            loading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {
                images.map((Image)=>(
                    <GifItem
                     key={Image.id}
                     {...Image}
                    />
                ))
            }
        </div>
    </>
    )
    // <li key={id}>{title}</li>
}
