import Link from 'next/link'

export function Block ({ articles, className }) {
  return (
    <div className={`${className}`}>
      {articles?.map(({ title, description }, index) =>
        <Blog title={title} description={description} key={index} />
      )}
    </div>
  )
}

export function Blog ({ title, description }) {
  return (
    <div className='pt-3 text-black'>
      <h2 className='text-lg font-medium'><Link href={`/thoughts/${title}`}><a className='border-b border-dotted border-black'>{title}</a></Link></h2>
      <p className='text-sm font-normal'>{description}</p>
    </div>
  )
}

export function BlockPreview ({ blockTitle, articles, link, className }) {
  return (
    <div className={` ${className}`}>
      <h1 className='text-gray-600 text-xs tracking-wider'>{blockTitle.toUpperCase()}</h1>
      <Block articles={articles} className='pb-4' />
      <Link href={link}><a className='text-xs tracking-widest text-purple-600 text-opacity-75 font-medium'>MORE</a></Link>
    </div>
  )
}
