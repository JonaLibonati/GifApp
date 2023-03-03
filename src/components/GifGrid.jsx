import React from 'react'
import PropTypes from 'prop-types'
import { GifCard } from '../components/GifCard'
import { useFetchGif } from '../hooks/useFetchGif'
import { CloseButton } from '../components/CloseButton'

export const GifGrid = ({category, setCategories}) => {

    const {gifs, loading} = useFetchGif(category);

    return (
    <>
        {
        loading ? <h2 data-testid = 'loading' className = 'loading'>loading...</h2> :

        <div data-testid = 'GifGrid' className = 'grid_container'>
            <div className = 'grid_item grid_title'>
                <h2 className = 'grid_title_text'>{category}</h2>
                <CloseButton category = {category} setCategories = {setCategories} />
            </div>
            {gifs.map((gif) => <GifCard key = {gif.id} {...gif} />)}
            {/* iqual to {gifs.map((gif) => <GifCard key = {gif.id} title = {gif.title} url = {gif.url} />)} */}
        </div>
        }
    </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    setCategories: PropTypes.func.isRequired
  }
