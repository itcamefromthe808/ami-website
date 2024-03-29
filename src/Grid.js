import { useState, useEffect, useRef, useMemo } from 'react'
import { useDebounce } from './utilities'
// import Tile from './Tile'
import ResponsiveTile from './ResponsiveTile'
import css from './sass/grid.module.scss'

const Grid = props => {
  const {
    desktop,
    mobile,
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
    return useMobile? mobile : desktop
  }, [mobile, desktop, useMobile])

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
              { columns[idx].map( (entry,key) => <ResponsiveTile key={key} images={entry} /> ) }
            </div>
          )
        }) : null}
      </>
    </div>
  )
}

export default Grid
