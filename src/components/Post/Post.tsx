export default function Post() {
  return (
    <div className="post">
      <div className="post__container--start">
        <div className="post__avatar">Av</div>
        <p>User</p>
      </div>
      <p className="post__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat at
        provident, mollitia ad, velit magnam fuga ab officiis aut amet dolorem
        sapiente perferendis, voluptatem reiciendis fugit earum quasi
        voluptatibus esse?
      </p>
      <div className="post__content">content</div>
      <div className="post__container--space">
        <p>2 Likes</p>
        <p>comments</p>
      </div>
    </div>
  );
}
