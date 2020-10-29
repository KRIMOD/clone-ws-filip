import { Twitter, GitHub, Linkedin } from '../components/logos'
import { BlockPreview } from '../components/block'
import { getAllProjects } from '../lib/projects'
import { getAllThoughts } from '../lib/thoughts'

export default function Index ({ allProjects, allThoughts }) {
  return (
    // <div className='max-w-screen-lg m-auto lg:px-10 sm:px-2'>
    <div>
      <About />
      <Overview thoughts={allThoughts} projects={allProjects} />
      <Footer />
    </div>
  )
}

const About = () => (
  <div className='flex flex-col items-center justify-center py-32 max-w-screen-md'>
    <h1 className='text-4xl font-light text-center pt-4'>Hi! I'm <span className='text-deepLilac font-semibold'>Krimo Temam</span>, a software developer living in Algeria</h1>
    <p className='text-gray-600 text-opacity-50 pt-8 text-sm'>Ca va chwiya ?</p>
    <div className='flex text-gray-500 pt-2'>
      <a href='https://twitter.com/KrimoTemam' className='p-2 transition duration-200 ease-in-out hover:text-white hover:bg-deepLilac border-0 rounded-sm'><Twitter className='h-5 w-5 ' /></a>
      <a href='http://github.com/krimod' className='ml-2 p-2 transition duration-200 ease-in-out hover:text-white hover:bg-deepLilac border-0 rounded-sm'><GitHub className='h-5 w-5  ' /></a>
      <a href='https://www.linkedin.com/in/mamar-abdelkrim-temam/' className='ml-2 p-2 transition duration-200 ease-in-out hover:text-white hover:bg-deepLilac border-0 rounded-sm'><Linkedin className='h-5 w-5' /></a>
    </div>
  </div>
)

const Overview = ({ thoughts, projects }) => {
  return (
    <div className='flex  flex-col justify-center items-center text-center sm:flex-row sm:justify-between sm:items-baseline sm:text-justify sm:px-4'>
      <BlockPreview className='w-1/3 pt-12 pr-4' blockTitle='projects' link='projects' articles={projects} />
      <BlockPreview className='w-1/3 pt-12 pr-4' blockTitle='thoughts' link='thoughts' articles={thoughts} />
      <BlockPreview className='w-1/3 pt-12 pr-4' blockTitle='stuff' link='#' articles={null} />
    </div>
  )
}

const Footer = () => (
  <div className='p-2 pt-4'>
    <ul className='flex justify-end text-xs text-gray-600'>
      <li><a href='#' className='pl-2'>flightradar</a></li>
      <li><a href='#' className='pl-2'>glenda</a></li>
    </ul>
  </div>
)

export async function getStaticProps () {
  const allProjects = getAllProjects(['title', 'date', 'slug', 'description'])
  const allThoughts = getAllThoughts(['title', 'date', 'slug', 'description'])

  return {
    props: { allProjects, allThoughts }
  }
}
