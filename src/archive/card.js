// an entry on the home page
import React from 'react'
import Link from 'next/link'


const Card = props => (
  <Link>
    <a href={props.href} className="card">
      <h3>{props.text}</h3>

      <style jsx>{`
        a {
          display:block;
          text-decoration: none;
          padding-bottom: 60%;
          background: #abc7cc;
        }
      `}</style>
    </a>
  </Link>
)



export default Card
