'use client';

import { useGetUserPostsQuery } from '@Redux/services/backendAPI';
import Header from '@components/Header/Header';
import PostsList from '@components/PostsList/PostsList';
import Profile from '@components/Profile/Profile';

export default function UserProfile() {
  const { data }: any = useGetUserPostsQuery();

  return (
    <>
      <Header />
      <main className="main__container">
        <Profile />
        <PostsList posts={data?.posts} />
      </main>
    </>
  );
}
