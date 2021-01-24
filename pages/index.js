import { useState, useCallback } from 'react'
import Link from 'next/link'
import Header from '../src/Header'
import Nav from '../src/Nav'
import Footer from '../src/Footer'
import Grid from '../src/Grid'
import collections from '../data/collections.json'


export async function getStaticProps () {
  return {
    props: {
      collections
    }
  }
}

function Index( props ) {
  const { collections } = props
  const [ selected, setSelected ] = useState(0)

  const selectCollection = useCallback( index => {
    setSelected(collections[index]? index : 0)
  }, [])

  return (
    <>
      <div className={"wrapper"}>
        <header className={"column-left"}>
          <Header title="Work" />
          <h1>AMI<br />JENNER</h1>
          <h2>Photo Art Director</h2>
          <Nav
            collections={collections}
            selected={selected}
            selectCollection={selectCollection}
          />
        </header>

        <div className={"column-right"}>
          <Grid images={collections[selected].images} folder={collections[selected].folder}/>
        </div>
      </div>
      <Footer />
      <div id="modal-root" />
    </>
  )
}

export default Index
