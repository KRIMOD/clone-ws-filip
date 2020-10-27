import { useRouter } from "next/router";
import useSWR from "swr";
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useSWR(`/api/articles/${slug}`, fetcher);
  const article = data?.article;
  return (
    <div className="w-full  max-w-screen-lg p-3">
      <ul className="flex text-xs text-black ">
        <li><Link href='/'>home</Link></li>
        <li className="pl-2">&gt;&nbsp; <Link href='/thoughts'>thoughts</Link></li>
        <li className="pl-2">&gt;&nbsp; {article?.title}</li>
      </ul>
      <article className="pt-4 text-black">
        <h1 className=" text-2xl py-2">Lorem ipsum dolor sit amet,</h1>
        <p className="pl-1 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h1 className="text-xl py-2">Consectetur adipiscing elit</h1>
        <p className="pl-1 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="pl-1 pt-3 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="pl-1 pt-3 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h1 className=" text-2xl py-2">
          Quis nostrud exercitation ullamco laboris{" "}
        </h1>
        <p className="pl-1 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </div>
  );
};

export default Post;
