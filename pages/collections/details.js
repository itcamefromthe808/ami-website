import React from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Collection from '../../components/collection'

class Details extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { collectionId: id }
  }

  render() {
    return (
      <div class="wrapper">
        <Head title="Work" />
        <Nav />

        <Collection id={this.props.collectionId} />

        <Footer />
      </div>
    )
  }
}

export default Details
