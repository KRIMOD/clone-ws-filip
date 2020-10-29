import { Blog } from '../components/block'
import { getAllThoughts } from '../lib/thoughts'

export default function Thoughts ({ allPosts }) {
  return (
    <div className='w-full  max-w-screen-lg pt-3 pl-5'>
      {
        allPosts?.map((article, index) => (
          <Blog article={article} type='thoughts' key={index} />
        ))
      }
    </div>
  )
}

export async function getStaticProps () {
  const allPosts = getAllThoughts(['title', 'date', 'slug'])

  return {
    props: { allPosts }
  }
}
