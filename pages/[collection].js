import Grid from '../src/Grid'
import editorials from '../public/collections/editorials/manifest.json'
import advertising from '../public/collections/advertising/manifest.json'
import stillLife from '../public/collections/still-life/manifest.json'

const collections = [
  editorials,
  advertising,
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

  return (
    <Grid {...props} />
  )
}

export default Collection
