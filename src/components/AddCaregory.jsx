import React, { useState } from 'react'

export const AddCaregory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const inputChange=({target})=>{
        // console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log(inputValue)
        event.preventDefault();
        if (inputValue.trim().length <= 1)return;
        // setCategories(categories => [inputValue,...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

  return (
    <form onSubmit={onSubmit}>
        <input
         type="text"
         placeholder='Buscar gifs'
         value={inputValue}
         onChange={inputChange}/>
    </form>
    )
}
