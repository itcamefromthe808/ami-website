import { useState, useEffect, useRef, useMemo } from 'react'
import { useDebounce } from './utilities'
import Tile from './Tile'
import css from './sass/grid.module.scss'

const Grid = props => {
  const {
    images,
    folder,
  } = props.collection
  const { debounce } = useDebounce()
  const body = useRef(typeof document !== 'undefined'? document.getElementsByTagName('body')[0] : null)
  const isMobile = () => parseInt(window.getComputedStyle(body.current).width, 10) <= 768
  const [useMobile, setMobileLayout] = useState(false)

  // debounce in the future
  const handleResize = () => {
    debounce( () => {
      setMobileLayout(isMobile())
    }, 20)
  }

  const columns = useMemo(() => {
    return useMobile? [
      images.filter( image => image.mobilePosition % 2 !== 0 ).sort( (i1,i2) => i1.mobilePosition < i2.mobilePosition? -1 : 1 ),
      images.filter( image => image.mobilePosition % 2 === 0 ).sort( (i1,i2) => i1.mobilePosition < i2.mobilePosition? -1 : 1 )
    ] : [
      images.filter( image => image.column === 1 ),
      images.filter( image => image.column === 2 ),
      images.filter( image => image.column === 3 )
    ]
  }, [images, useMobile])

  // listen for window resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      // stop listening for window resize
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // load images on page load
  useEffect(() => {
    setMobileLayout(isMobile())
  },[])

  return (
    <div className={css.grid}>
      <>
        { columns.length? columns.map( (col, idx) => {
          return (
            <div className={css[`grid-column-${idx+1}`]} key={idx}>
              { columns[idx].map( (image,key) => <Tile key={key} image={image} folder={folder} /> ) }
            </div>
          )
        }) : null}
      </>
    </div>
  )
}

export default Grid
