import React from 'react'
import Head from 'next/head'

const defaultDescription = 'Ami Jenner, Photo Art Director'
const defaultOGURL = ''
const defaultOGImage = ''

const Header = props => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Antic+Didone" rel="stylesheet" />
    <meta property="og:region" content="en_US" />
    <meta property="og:url" content={props.ogURL || defaultOGURL} />
    <meta property="og:title" content={props.ogTitle || props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.ogURL || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
)

export default Header
