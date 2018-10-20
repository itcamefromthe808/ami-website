// collection detail page
import React, { Component } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { collectionId: id }
  }

  render () {
    return (
      <div>
        <Head title="Collection" />
        <Nav />

        <h1>The Collection Detail Page</h1>
        <p> The id is {this.props.collectionId} </p>
      </div>
    )
  }
}
