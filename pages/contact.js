import Header from '../src/Header'
import Nav from '../src/Nav'
import Footer from '../src/Footer'
import About from '../src/About'
import collections from '../data/collections.json'

export async function getStaticProps () {
  return {
    props: {
      collections
    }
  }
}

function Contact( props ) {
  const { collections } = props

  return (
    <>
      <main className={"wrapper"}>
        <header className={"column-left"}>
          <Header 
            title="Contact"
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
          <About />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact