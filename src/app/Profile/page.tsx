import Header from '@components/Header/Header';
import MainModal from '@components/MainModal/MainModal';
import Post from '@components/Post/Post';
import Profile from '@components/Profile/Profile';

export default function UserProfile() {
  return (
    <>
      <Header />
      <main className="main__container">
        <Profile />
        <ul className="posts__list profile__list">
          <li>
            <Post />
          </li>
        </ul>
      </main>
      <MainModal />
    </>
  );
}
