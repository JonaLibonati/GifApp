import React from 'react'
import PropTypes from 'prop-types'

export const GifCard = ({title, url}) => {
  return (
  <figure className = 'grid_item'>
    <a href = {url} target='_blank'><img className = 'item_img' alt={title} src={url}/></a>
    <figcaption className = 'item_title' data-testid='test-title' >{title}</figcaption>
  </figure>
  )
}

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

/* GifCard.defaultProps = {
  title: 'gif'
} */