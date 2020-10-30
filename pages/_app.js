import React from 'react'
import '../css/tailwind.css'
// import '../server'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <NavThing />
      <Component {...pageProps} />
    </Layout>
  )
}

const Layout = ({ children }) => {
  return (
    <div className='font-sans text-gray-900 items-center justify-center max-w-screen-md mx-auto'>
      {children}
    </div>
  )
}

// not elegant at all
const NavThing = () => {
  const router = useRouter()
  const routes = router.pathname.split('/').slice(1)
  return (
    <div className='w-full  max-w-screen-lg pt-3 pl-5'>
      {
        (router.pathname !== '/' && (

          <ul className='flex text-xs text-black '>
            <li><Link href='/'>home</Link></li>
            <li className='pl-2'>&gt;&nbsp; <Link href={`/${routes[0]}`}>{routes[0]}</Link></li>
            {
              (routes.length > 1) && (
                <li className='pl-2'>&gt;&nbsp; <Link href={`/${routes[0]}/${routes[1]}`}>{routes[1]}</Link></li>
              )
            }
          </ul>
        ))
      }
    </div>
  )
}
