// simple about page
import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const About = () => (
  <div className="wrapper">
    <header>
      <Head title="About" />
      <Nav />

      <h1>The About Page</h1>
    </header>

    <Footer />
  </div>
)

export default About
