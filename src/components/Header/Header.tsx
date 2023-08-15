export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Twitt</h1>
      <nav>
        <ul className="header__navigation">
          <li>
            <p>Posts</p>
          </li>
          <li>
            <p>MyProfile</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
