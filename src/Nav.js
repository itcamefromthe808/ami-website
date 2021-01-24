import Link from 'next/link'
import css from './sass/nav.module.scss'

const Nav = props => (
  <nav className={css.nav}>
    <ul>
     { props.collections.map( (c,idx) => (
        <li
          key={idx}
          className={idx === props.selected? css.selected : ''}
          onClick={e => props.selectCollection(idx)}
        >
          { c.nav }
        </li>
      )) }
    </ul>
  </nav>
)


export default Nav
