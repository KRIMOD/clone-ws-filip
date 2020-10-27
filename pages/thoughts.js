import { Block } from '../components/block'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Index = () => {
  const { data } = useSWR('/api/articles', fetcher)

  return (
    <div className='w-full  max-w-screen-lg pt-3 pl-5'>
      <ul className='flex text-xs text-black '>
        <li><Link href='/'>home</Link></li>
        <li className='pl-2'>&gt;&nbsp; <Link href='/thoughts'>thoughts</Link></li>
      </ul>
      <Block className='pt-4' articles={data?.articles?.filter(({ type }) => type === 'thought')} />
    </div>
  )
}

export default Index
