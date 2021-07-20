import { useState, useMemo } from 'react'
import Header from '../src/Header'
import Nav from '../src/Nav'
import Footer from '../src/Footer'
import Grid from '../src/Grid'
import collections from '../data/collections.json'

export async function getStaticPaths() {
  const paths = collections.map( col => ({ params: { collection: col.slug } }) )

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  return {
    props: {
      collections,
      slug: params.collection
    }
  }
}

function Collection( props ) {
  const { collections, slug } = props
  const collection = collections.find( col => col.slug === slug )

  return (
    <>
      <main className={"wrapper"}>
        <header className={"column-left"}>
          <Header 
            title={ collection.nav }
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
          <Grid collection={collection} />
        </div>
      </main>
      <Footer />
      <div id="modal-root" />
    </>
  )
}

export default Collection
