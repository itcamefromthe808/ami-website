import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        position:absolute;
        bottom:0;
        right:0;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0 2rem;
        margin:0;
      }
      li {
        display: flex;
        padding: 0 1rem;
        margin:0;
      }
      a {
        color: #000;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 800;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </nav>
)

export default Nav
