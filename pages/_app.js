import Header from '../src/Header'
import Nav from '../src/Nav'
import Footer from '../src/Footer'

import editorials from '../data/collections/editorials'
import currentWork from '../data/collections/current-work'
import stillLife from '../data/collections/still-life'

import '../src/sass/styles.scss'

const collections = [
  currentWork,
  editorials,
  stillLife
]

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={"wrapper"}>
        <header className={"column-left"}>
          <Header
            ogURL="amijenner.com"
            ogTitle="Ami Jenner"
            ogImage="/social-share.jpg"
            description="Ami Jenner's personal profile" 
          />
          <h1>AMI<br />JENNER</h1>
          <h2>Photo Art Director</h2>
          <Nav
            collections={collections}
          />
        </header>
        <div className={"column-right"}>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
      <div id="modal-root"></div>
    </>
  ) 
  
}

export default MyApp
