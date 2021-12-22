import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import css from './sass/nav.module.scss'
import useLock from './useLock'

const Nav = props => {
  const router = useRouter()
  const [ mobileOpen, setMobileOpen ] = useState(false)
  const { setLock } = useLock()

  const mobileNavClick = e => {
    setMobileOpen(!mobileOpen)
    setLock(!mobileOpen)
  }

  const resetMobileState = () => {
    setMobileOpen(false)
    setLock(false)
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', resetMobileState)

    return () => {
      router.events.off('routeChangeComplete', resetMobileState)
    }
  })

  return (
    <nav 
      className={`${css.nav}${mobileOpen? ` ${css['is-open']}`:''}`}
      id="main-nav"
      style={{
        top: (mobileOpen? window.pageYOffset : 0) + 'px'
      }}
    >
      <button 
        className={css['mobile-icon']} 
        onClick={ mobileNavClick }
      >
        <span>View Navigation</span>
      </button>
      <ul>
      { props.collections.map( (c,idx) => (
          <li
            key={idx}
            tabIndex={ 0 }
          >
            <Link href={`/${c.collection}`}>
              <a className={router.asPath === `/${c.collection}`? css.selected : ''}>{ c.nav }</a>
            </Link>
          </li>
        )) }
        <li className={css.contact}>
          <Link href="/contact">
            <a className={router.asPath === '/contact'? css.selected : ''}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}


export default Nav
