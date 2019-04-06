import React from 'react'
import Link from 'next/link'

const Grid = (props) => (
  <nav className="grid">
    { props.children }
    <ul>
      {props.collections.map(({ key, href, grid, text }) => (
        <li key={key}>
          <div>
            <Link href={`/collection?id=${href}`} as={`/collections/${href}`}>
              <a>
                <span className="text-container">
                  <span className="grid-text">{text}</span>
                </span>
                <img src={grid} />
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
        margin:0 -15px -15px;
      }
      li {
        display: flex;
        flex:1 0 100%;
        list-style-type: none;
        margin:15px 0;
      }
      li > div {
        padding:0 15px;
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
      a:after {
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background:#000;
        opacity:0;
        transition:opacity 480ms ease-in-out;
        left:0;
        top:0;
      }
      a:hover > img {
        filter: grayscale(1);
      }
      a:hover .text-container {
        opacity: 1;
      }
      a:hover:after {
        opacity: 0.25;
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
