import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import css from './sass/nav.module.scss'
import { combineClasses } from './utilities'

const Nav = props => {
  const router = useRouter()
  const [ mobileOpen, setMobileOpen ] = useState(false)

  const mobileNavClick = e => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <nav className={mobileOpen? combineClasses(css, '', 'nav', 'is-open') : css.nav }>
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
            <Link href={`/${c.slug}`}>
              <a className={router.asPath === `/${c.slug}`? css.selected : ''}>{ c.nav }</a>
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
