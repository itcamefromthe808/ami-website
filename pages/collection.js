import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Collection from '../components/collection'
import Grid from '../components/grid'
import collectionData from '../data/collections.json'

class Details extends React.Component {
  // ugleeee
  static getInitialProps ({ query: { id } }) {
    return {
      collection: collectionData.find(col => {
        return (col.href === id)
      }),
      id: id,
      collections: collectionData.map(link => {
        link.key = `card-${link.href}`
        return link
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
          collections={ this.props.collections }
          id={ this.props.id }
        />

        <Grid
          collections={ this.props.collections }
        >
          <h2>Back To Work</h2>

          <style jsx>{`
            nav {
              text-align: left;
              margin-top: 30px;
            }
          `}</style>
        </Grid>

        <Footer />
      </div>
    )
  }
}

export default Details
