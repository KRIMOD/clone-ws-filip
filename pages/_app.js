import React from 'react'
import '../css/tailwind.css'
import Layout from '../components/Layout'
import '../server'
// import createMirageServer from '../server'

export default function MyApp ({ Component, pageProps }) {
  // if (process.env.USE_MIRAGE_SERVER === 'true') {
  //   console.log('ATTENTION - Using mirage server')
  //   createMirageServer()
  // }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
