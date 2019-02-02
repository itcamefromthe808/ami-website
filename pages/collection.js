import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Collection from '../components/collection'
import collectionData from '../data/collections.json'

class Details extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return {
      collection: collectionData.find(col => {
        return (col.href === id)
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
      <header>
        <Head title="Work" />
        <h1>AMI<br />JENNER</h1>
        <h2>Photo Art Director</h2>
        <Nav />
      </header>

        <Collection
          collection={this.props.collection}
        />

        <Footer />
      </div>
    )
  }
}

export default Details
