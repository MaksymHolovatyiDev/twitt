import Header from '@components/Header/Header';
import MainModal from '@components/MainModal/MainModal';
import Post from '@components/Post/Post';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main__container">
        <ul className="posts__list">
          <li>
            <Post />
          </li>
        </ul>
      </main>
    </>
  );
}
