'use client';

import { useGetAllPostsQuery } from '@Redux/services/backendAPI';
import Header from '@components/Header/Header';
import PostsList from '@components/PostsList/PostsList';

export default function Home() {
  const { data }: any = useGetAllPostsQuery();

  return (
    <>
      <Header />
      <main className="main__container">
        <PostsList posts={data} />
      </main>
    </>
  );
}
