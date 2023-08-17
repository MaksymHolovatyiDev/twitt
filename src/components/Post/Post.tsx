import { PostType } from '@Redux/services/backendTypes';

export default function Post({ text, likesNumber, img, liked }: PostType) {
  return (
    <div className="post">
      <div className="post__container--start">
        <div className="post__avatar">Av</div>
        <p>User</p>
      </div>
      <p className="post__text">{text}</p>
      <div className="post__content">{img ? img : ''}</div>
      <div className="post__container--space">
        <p>{`${likesNumber} ${likesNumber === 1 ? 'Like' : 'Likes'}`}</p>
        <p>comments</p>
      </div>
    </div>
  );
}
