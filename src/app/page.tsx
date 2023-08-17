'use client';

import { useGetAllPostsQuery } from '@Redux/services/backendAPI';
import { PostType } from '@Redux/services/backendTypes';
import Header from '@components/Header/Header';
import MainModal from '@components/MainModal/MainModal';
import Post from '@components/Post/Post';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { data } = useGetAllPostsQuery();

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);
  console.log(data);
  return (
    <>
      <Header />
      <main className="main__container">
        <ul className="posts__list">{
          posts.map((el) => <li key={el._id}><Post { ...el} /></li>)
        }
        </ul>
      </main>
    </>
  );
}
