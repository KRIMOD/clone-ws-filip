import { Block } from '../../components/block'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
const Index = () => {
  const { data } = useSWR('/api/articles', fetcher)
  return (
    <div className='w-full p-2  '>
      <ul className='flex text-xs text-black '>
        <li>home</li>
        <li className='pl-2'>&gt;&nbsp; projects</li>
      </ul>
      <Block className='w-1/3 pt-5 pr-4' blockTitle='projects' articles={data?.articles.filter(({ type }) => type === 'project')} link='projects' />
    </div>
  )
}

export default Index
