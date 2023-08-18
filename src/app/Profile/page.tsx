'use client';

import { useGetUserQuery } from '@Redux/services/backendAPI';
import Header from '@components/Header/Header';
import PostsList from '@components/PostsList/PostsList';
import Profile from '@components/Profile/Profile';

export default function UserProfile() {
  const { data }: any = useGetUserQuery();

  return (
    <>
      <Header />
      <main className="main__container">
        <Profile userName={data?.name} />
        <PostsList posts={data?.posts} />
      </main>
    </>
  );
}
