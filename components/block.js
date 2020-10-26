import Link from 'next/link'
import { useRouter } from 'next/router'

export function Block ({ blockTitle, articles, link, className }) {
  const router = useRouter()
  return (
    <div className={` ${className}`}>
      {
        (router.pathname === '/thoughts' || router.pathname === '/projects')
          ? (<p />)
          : (<h1><Link href={link}><a className='text-gray-600 text-xs tracking-wider'>{blockTitle.toUpperCase()}</a></Link></h1>)
      }
      {articles?.map(({ title, description }, index) =>
        <Blog title={title} description={description} key={index} />
      )}
      <h1 className='text-xs tracking-widest text-purple-600 text-opacity-75 pt-5 font-medium'>MORE</h1>
    </div>
  )
}

const Blog = ({ title, description }) => (
  <div className='pt-3 text-black'>
    <h2 className='text-lg font-medium'><a href='#' className='border-b border-dotted border-black'>{title}</a></h2>
    <p className='text-sm font-normal'>{description}</p>
  </div>
)
