import React from 'react'
import '../css/tailwind.css'
import Layout from '../components/Layout'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
