import Link from 'next/link'
import css from './sass/nav.module.scss'

const Nav = props => (
  <nav className={css.nav}>
    <ul>
     { props.collections.map( (c,idx) => (
        <li
          key={idx}
          tabIndex={ 0 }
        >
          <Link href={c.slug}>{ c.nav }</Link>
        </li>
      )) }
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)


export default Nav
