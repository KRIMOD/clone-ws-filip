import { Blog } from '../components/block'
import { getAllProjects } from '../lib/projects'

export default function Projects ({ allPosts }) {
  return (
    <div className='w-full  max-w-screen-lg pt-3 pl-5'>
      {
        allPosts?.map((article, index) => (
          <Blog article={article} type='projects' key={index} />
        ))
      }
    </div>
  )
}

export async function getStaticProps () {
  const allPosts = getAllProjects(['title', 'date', 'slug'])

  return {
    props: { allPosts }
  }
}
