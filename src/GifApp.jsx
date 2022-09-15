import React from 'react'
import { useState } from 'react'
import { CategoryInput } from './components/CategoryInput'
import { GifGrid } from './components/GifGrid'

export const GitApp = () => {

  const [categories, setCategories] = useState(['cats'])

  return (
    <>
      {/* Title */}
        <h1 className = 'app_name'>GifApp</h1>
      {/* input */}
        <CategoryInput 
          type={'text'} 
          id={'gif-category'}
          name={'gif-category'}
          placeholder={'Which gif do you want?'}
          setCategories = {setCategories}
        />
      {/* gif list */}
      <div>
        {categories.map((category) => <GifGrid category = {category} setCategories = {setCategories} key = {category}/>)}
      </div>
    </>
  )
}