import React from 'react'

// global styles in here I guess
const Footer = () => (
  <footer>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'Antic Didone', serif, -apple-system;
        font-size: 100%;
      }
      :global(h1) {
        font-size: 3.2rem;
        line-height: 1.2;
      }
      :global(h2) {
        font-size: 1.6rem;
        line-height: 1.2;
      }
      :global(.wrapper) {
        max-width:1200px;
        margin:0 auto;
        width:75%;
      }
      :global(header) {
        position:relative;
      }
    `}</style>
  </footer>
)

export default Footer
