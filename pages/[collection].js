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

  return (
    <Grid {...props} />
  )
}

export default Collection
