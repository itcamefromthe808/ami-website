// simple about page
import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Loading from '../components/loading'


class Test extends React.Component {
  render() {
    const loaded = [true, false, false, false, false, true, false, false]

    return (
      <div className="wrapper">
        <header>
          <Head title="Work" />
          <h1>AMI<br />JENNER</h1>
          <h2>Photo Art Director</h2>
          <Nav />
        </header>


        <Loading items={ loaded } />

        <Footer />
      </div>
    )
  }
}

export default Test
