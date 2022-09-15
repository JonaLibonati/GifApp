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
      <div className='app_input_container'>
        <CategoryInput
          type={'text'}
          id={'gif-category'}
          name={'gif-category'}
          placeholder={'Which gif do you want?'}
          setCategories = {setCategories}
        />
        <div className='app_clean' onClick={() => setCategories([])}>Clean All</div>
      </div>
      {/* gif list */}
      <div>
        {categories.map((category) => <GifGrid category = {category} setCategories = {setCategories} key = {category}/>)}
      </div>
    </>
  )
}