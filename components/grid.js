import React from 'react'
import Link from 'next/link'

// this will use getInitialProps
const collections = [
  { href: 'collection-three', image: 'sailor_moon_grid.jpg', text: 'Sailor Moon ' },
  { href: 'collection-one', image: 'minnie_grid.jpg', text: 'Minnie Mouse NYFW' },
  { href: 'collection-four', image: 'outlander_grid.jpg', text: 'Outlander' },
  { href: 'collection-five', image: 'mary_poppins_grid.jpg', text: 'Mary Poppins' },
  { href: 'collection-two', image: 'star_wars_grid.jpg', text: 'Star Wars' },
  { href: 'collection-six', image: 'villains_grid.jpg', text: 'Disney Villans' },
  { href: 'collection-seven', image: '', text: 'Collection Seven' },
  { href: 'collection-eight', image: '', text: 'Collection Eight' },
  { href: 'collection-nine', image: '', text: 'Collection Nine' }
].map(link => {
  link.key = `card-${link.href}`
  return link
})

const Grid = () => (
  <nav className="grid">
    <ul>
      {collections.map(({ key, href, image, text }) => (
        <li key={key}>
          <div>
            <Link href={`/collections/${href}`}>
              <a>
                <span className="text-container">
                  <span className="grid-text">{text}</span>
                </span>
                <img src={`/static/grid/${image}`} />
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        list-style-type: none;
        margin-left: -15px;
        margin-right: -15px;
      }
      li {
        display: flex;
        flex:1 0 100%;
        list-style-type: none;
      }
      li > div {
        padding:15px;
        width:100%;
      }
      a {
        position:relative;
        display:block;
        padding-bottom: 100%;
        text-decoration: none;
        background-repeat:no-repeat;
        background-size:contain;
        background-position:top center;
      }
      a .text-container {
        display:block;
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        z-index:1000;

        text-align:center;
        transition: opacity 400ms ease-in-out;
        opacity:0;
      }
      a .grid-text {
        position:absolute;
        top:50%;
        left:0;
        width:calc(100% - 30px);
        padding:15px;
        transform:translateY(-50%);

        color:white;
        font-size: 3.2rem;
        font-weight: 800;
        text-transform: uppercase;
      }
      a > img {
        transition: filter 400ms ease-in-out;
        filter:grayscale(0);
        position:absolute;
        width:100%;
        top:0;
        left:0;
      }
      a:hover > img {
        filter: grayscale(1);
      }
      a:hover .text-container {
        opacity: 1;
      }

      @media (min-width: 768px) {
        li {
          flex:1 0 50%;
        }
      }

      @media (min-width: 1024px) {
        li {
          flex: 1 0 33%;
        }
      }
    `}</style>
  </nav>
)

export default Grid
