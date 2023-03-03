import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryInput = ({type, name, id, placeholder, setCategories}) => {

    const [value, setValue] = useState('')

    const handleValue = (e) => {
        setValue(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimed_value = value.trim().toLowerCase();

        setValue('');

        if (trimed_value < 1) return;

        setCategories((categories) => {
            if (!categories.includes(trimed_value)) {
                return [trimed_value, ...categories]
            } else {
                return [...categories]
            }
        });
    }

    return (
        <form onSubmit = {handleSubmit} aria-label='form'>
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

CategoryInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    setCategories: PropTypes.func.isRequired,
}