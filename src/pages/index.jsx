import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div className="header_inner container">
          <div>
            <Link to="/">Articleuz</Link>
            <nav>
              <Link to="/">Ixtisiyodot</Link>
              <Link to="/">Tal'im</Link>
              <Link to="/">Qurilish</Link>
              <Link to="/">Muhim</Link>
            </nav>
          </div>
          <div></div>
        </div>
      </header>
    </div>
  );
}
