import { postUserType } from '@Types';

export default function PostUser({ name }: postUserType) {
  return (
    <div className="post__container--start">
      <div className="post__avatar" />
      <p>{name}</p>
    </div>
  );
}
