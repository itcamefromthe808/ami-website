import { useState } from 'react'
import Tile from './Tile'
import css from './sass/grid.module.scss'

const Grid = props => {
  const {
    images
  } = props

  const columns = images?.length? [
    images.filter( image => image.column === 1 ),
    images.filter( image => image.column === 2 ),
    images.filter( image => image.column === 3 )
  ] : []

  return (
    <div className={css.grid}>
      { images?.length? (
        <>
          <div className={css['grid-column-1']}>
            { columns[0].map( (image,key) => <Tile key={key} image={image} /> ) }
          </div>
          <div className={css['grid-column-2']}>
            { columns[1].map( (image,key) => <Tile key={key} image={image} /> ) }
          </div>
          <div className={css['grid-column-3']}>
            { columns[2].map( (image,key) => <Tile key={key} image={image} /> ) }
          </div>
        </>
      ): "Loading..."}
    </div>
  )
}

export default Grid
