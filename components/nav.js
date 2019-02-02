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
        text-align: left;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin:0;
      }
      li {
        display: inline-block;
        list-style-type: none;
        padding: 0 1rem 0 0;
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
      @media (min-width: 768px) {
        nav {
          text-align: center;
          position:absolute;
          bottom:0;
          right:0;
        }
        ul {
          display: flex;
          justify-content: space-between;
          padding: 0 2rem;
        }
        li {
          display: flex;
          padding: 0 1rem;
        }
      }
    `}</style>
  </nav>
)

export default Nav
