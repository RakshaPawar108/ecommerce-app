import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-credits">
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by
        Raksha Pawar
      </div>
      <div className="footer-contents">
        <div className="footer-text">
          <h4>About Us</h4>
          <p>
            We are an open source project. To contribute
            <a href="/">Click Here</a>.
          </p>
        </div>

        <ul className="footer-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/">Featured</Link>
          </li>
        </ul>

        <ul className="footer-nav-links">
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <ul className="footer-social-links">
          <li>
            <a
              href="https://twitter.com/rakshapawar108"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" title="Twitter"></i>Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RakshaPawar108"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" title="Github"></i>GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/rakshapawar/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" title="LinkedIn"></i>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
