import { Link } from "react-router-dom";
import "../css/NotFound.css"

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
