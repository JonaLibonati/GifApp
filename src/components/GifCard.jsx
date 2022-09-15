import React from 'react'

export const GifCard = ({title, url}) => {
  return (
  <figure className = 'grid_item'>
    <a href = {url} target='_blank'><img className = 'item_img' alt={title} src={url}/></a>
    <figcaption className = 'item_title'>{title}</figcaption>
  </figure>
  )
}
