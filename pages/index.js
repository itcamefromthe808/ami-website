// simple about page
import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Grid from '../components/grid'


const Index = () => (
  <div class="wrapper">
    <Head title="Work" />
    <Nav />

    <h1>AMI<br />JENNER</h1>
    <h2>Photo Art Director</h2>

    <Grid />

    <Footer />
  </div>
)

export default Index
