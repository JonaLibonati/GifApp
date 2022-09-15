import React from 'react'
import { useState } from 'react'

export const CategoryInput = ({type, name, id, placeholder, setCategories}) => {

    const [value, setValue] = useState('')

    const handleValue = (e) => {
        setValue(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimed_value = value.trim().toLowerCase();

        if (trimed_value < 1) return;

        setValue('');

        setCategories((categories) => {
            if (!categories.includes(trimed_value)) {
                return [trimed_value, ...categories]
            } else {
                return [...categories]
            }
        });
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor = {id}>
                <input
                    id = {id}
                    type = {type}
                    name = {name}
                    placeholder = {placeholder}
                    value = {value}
                    onChange={handleValue}
                    className = 'app_input'
                />
            </label>
        </form>
    );
}
