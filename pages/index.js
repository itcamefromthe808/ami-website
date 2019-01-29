// simple about page
import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Grid from '../components/grid'
import collectionData from '../data/collections.json'


class Index extends React.Component {
  static getInitialProps () {
    return {
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
          <Nav />

          <h1>AMI<br />JENNER</h1>
          <h2>Photo Art Director</h2>
        </header>

        <Grid
          collections={ this.props.collections }
        />

        <Footer />
      </div>
    )
  }
}

export default Index
