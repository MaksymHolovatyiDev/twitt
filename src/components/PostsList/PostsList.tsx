import { PostType } from '@Redux/services/backendTypes';
import { PostListType } from '@Types';
import Post from '@components/Post/Post';

export default function PostsList({ posts }: PostListType) {
  return (
    <ul className="posts__list">
      {posts?.map((el: PostType) => (
        <li key={el._id}>
          <Post {...el} />
        </li>
      ))}
    </ul>
  );
}
