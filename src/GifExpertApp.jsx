import React, { useState } from 'react'
import { AddCaregory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['naruto']);
    
    const onAddCategory = (newCategory) => {
      // console.log('el pepe')
      // setCategories(cat => [...cat,'el pepe']);
      // setCategories(['valorant',...categories]);

      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCaregory
        onNewCategory={(value) => onAddCategory(value)}
         />

        {
          categories.map((category)=>(
            <GifGrid
             key={category}
             category={category}/>
          ))
        }
    </>
  )
}
