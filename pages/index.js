import { Twitter, GitHub, Linkedin } from '../components/logos'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Index = () => (
  <div className='max-w-screen-lg m-auto lg:px-10 sm:px-2'>
    <About />
    <Overview />
    <Footer />
  </div>
)

export default Index

const About = () => (
  <div className='flex flex-col items-center justify-center py-32'>
    <h1 className='text-4xl font-light px-6 text-center pt-4'>Hi! I'm <span className='text-deepLilac font-semibold'>Krimo Temam</span>, a software developer living in Algeria</h1>
    <p className='text-gray-600 text-opacity-50 pt-6 text-sm'>Ca va chwiya ?</p>
    <div className='flex text-gray-500 pt-3'>
      <a href='https://twitter.com/KrimoTemam' className='p-2 transition duration-200 ease-in-out hover:text-white hover:bg-deepLilac border-0 rounded-sm'><Twitter className='h-5 w-5 ' /></a>
      <a href='http://github.com/krimod' className='ml-2 p-2 transition duration-200 ease-in-out hover:text-white hover:bg-deepLilac border-0 rounded-sm'><GitHub className='h-5 w-5  ' /></a>
      <a href='https://www.linkedin.com/in/mamar-abdelkrim-temam/' className='ml-2 p-2 transition duration-200 ease-in-out hover:text-white hover:bg-deepLilac border-0 rounded-sm'><Linkedin className='h-5 w-5' /></a>
    </div>
  </div>
)

const Overview = () => {
  const { data } = useSWR('/api/articles', fetcher)
  console.log(data?.articles)
  return (
    <div className='flex  flex-col justify-center items-center text-center sm:flex-row sm:justify-between sm:items-baseline sm:text-justify lg:px-16'>
      <Block blockTitle='projects' articles={data?.articles.filter(({ type }) => type === 'project')} />
      <Block blockTitle='thoughts' articles={data?.articles.filter(({ type }) => type === 'thought')} />
      <Block blockTitle='stuff' articles={data?.articles.filter(({ type }) => type === 'stuff')} />
    </div>
  )
}

const Blog = ({ title, description }) => (
  <div className='pt-3 text-black'>
    <h2 className='text-lg font-medium'><a href='#' className='border-b border-dotted border-black'>{title}</a></h2>
    <p className='text-sm font-normal'>{description}</p>
  </div>
)

const Footer = () => (
  <div className='p-2 pt-4'>
    <ul className='flex justify-end text-xs text-gray-600'>
      <li><a href='#' className='pl-2'>flightradar</a></li>
      <li><a href='#' className='pl-2'>glenda</a></li>
    </ul>
  </div>
)

const Block = ({ blockTitle, articles }) => (
  <div className='w-1/3 pt-12 pr-4'>
    <h1 className='text-gray-600 text-xs tracking-wider'>{blockTitle.toUpperCase()}</h1>
    {articles?.map(({ title, description }, index) =>
      <Blog title={title} description={description} key={index} />
    )}
    <h1 className='text-xs tracking-widest text-purple-600 text-opacity-75 pt-5 font-medium'>MORE</h1>
  </div>
)
