import Link from 'next/link'

export function Block ({ articles, type, className }) {
  // console.log('articles')
  return (
    <div className={`${className}`}>
      {articles?.map((article, index) =>
        <Blog article={article} type={type} key={index} />
      )}
    </div>
  )
}

export function Blog ({ article, type }) {
  return (
    <div className='pt-3 text-black'>
      <h2 className='text-lg font-medium'><Link href={`${type}/${article.slug}` || '#'}><a className='border-b border-dotted border-black'>{article.title}</a></Link></h2>
      <p className='text-sm font-normal'>{article.date}</p>
    </div>
  )
}

export function BlockPreview ({ blockTitle, articles, link, className }) {
  return (
    <div className={` ${className}`}>
      <h1 className='text-gray-600 text-xs tracking-wider'>{blockTitle.toUpperCase()}</h1>
      <Block articles={articles} className='pb-4' type={blockTitle} />
      <Link href={link}><a className='text-xs tracking-widest text-purple-600 text-opacity-75 font-medium'>MORE</a></Link>
    </div>
  )
}
