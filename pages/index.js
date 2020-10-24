import { Twitter, GitHub, Linkedin } from '../components/logos'

const Index = () => (
  <div className='max-w-screen-lg m-auto sm:px-12'>
    <About />
    <Overview />
    <Footer />
  </div>
)

export default Index

const About = () => (
  <div className='flex flex-col items-center justify-center py-32'>
    <h1 className='text-4xl font-thin px-6 text-center'>Hi! I'm <spans className='text-indigo-800 font-normal'>Krimo Temam</spans>, a software developer living in Algeria</h1>
    <p className='text-gray-600 text-opacity-75 pt-6 text-sm'>Ed is the standard text editor.</p>
    <div className='flex text-gray-500 pt-3'>
      <a href='#' className='p-2 hover:text-white hover:bg-indigo-800 border-0 rounded-sm'><Twitter className='h-5 w-5 ' /></a>
      <a href='#' className='ml-2 p-2 hover:text-white hover:bg-indigo-800 border-0 rounded-sm'><GitHub className='h-5 w-5  ' /></a>
      <a href='#' className='ml-2 p-2 hover:text-white hover:bg-indigo-800 border-0 rounded-sm'><Linkedin className='h-5 w-5' /></a>
    </div>
  </div>
)

const Overview = () => (
  <div className='flex px-3 flex-col justify-center items-center text-center sm:flex-row sm:justify-between sm:items-baseline sm:text-justify lg:px-16'>
    <Projects />
    <Thoughts />
    <Stuff />
  </div>
)

const Projects = () => (
  <div className='w-1/3 pt-12'>
    <h1 className='text-gray-600 text-xs tracking-wider'>PROJECTS</h1>
    {Array(7)
      .fill()
      .map((_, index) => (
        <Blog title='Basilik' description='a static website generator' key={index} />
      ))}
    <h1 className='text-indigo-700 pt-3 text-xs tracking-widest'><a href='#'>MORE</a></h1>
  </div>
)

const Thoughts = () => (
  <div className='w-1/3 pt-12'>
    <h1 className='text-gray-600 text-xs tracking-wider'>THOUGHTS</h1>
    {Array(5)
      .fill()
      .map((_, index) => (
        <Blog title='Basilik' description='a static website generator' key={index} />
      ))}
    <h1 className='text-indigo-700 pt-3 text-xs tracking-widest'><a href='#'>MORE</a></h1>
  </div>
)

const Stuff = () => (
  <div className='w-1/3 pt-12'>
    <h1 className='text-gray-600 text-xs tracking-wider'>STUFF</h1>
    {Array(1)
      .fill()
      .map((_, index) => (
        <Blog title='Basilik' description='a static website generator' key={index} />
      ))}
    <h1 className='text-indigo-700 pt-3 text-xs tracking-widest'><a href='#'>MORE</a></h1>
  </div>
)

const Blog = ({ title, description }) => (
  <div className='pt-3'>
    <h2 className='text-lg font-medium'><a href='#' className='border-b border-dotted border-black'>{title}</a></h2>
    <p className='text-sm'>{description}</p>
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

// const Block = ({ blockTitle, children }) => {
//   <div className='w-1/3'>
//     <h1 className='text-gray-600 text-sm pb-4'>{blockTitle}</h1>
//     {children}
//   </div>
// }
