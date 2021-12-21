import Header from '../src/Header'
import Nav from '../src/Nav'
import Footer from '../src/Footer'
import Grid from '../src/Grid'
import editorials from '../data/collections/editorials'
import currentWork from '../data/collections/current-work'
import stillLife from '../data/collections/still-life'

const collections = [
  currentWork,
  editorials,
  stillLife
]


export async function getStaticPaths() {
  const paths = collections.map( col => {
    const { collection } = col
    return {
      params: {
        collection,
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const collection = collections.find( col => col.collection === params.collection )
  
  return {
    props: {
      collection
    }
  }
}

function Collection( props ) {
  console.log('here', props)

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
          <Grid {...props} />
        </div>
      </main>
      <Footer />
      <div id="modal-root" />
    </>
  )
}

export default Collection
