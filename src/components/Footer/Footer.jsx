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
            <a href="/Home/home.html">Home</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/Product/product.html">Our Products</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
        </ul>

        <ul className="footer-nav-links">
          <li>
            <a href="/Cart/cart.html">My Cart</a>
          </li>
          <li>
            <a href="/Signup/signup.html">Sign up</a>
          </li>
          <li>
            <a href="/Login/login.html">Login</a>
          </li>
        </ul>

        <ul className="footer-social-links">
          <li>
            <a href="https://twitter.com/rakshapawar108">
              <i className="fab fa-twitter" title="Twitter"></i>Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/RakshaPawar108">
              <i className="fab fa-github" title="Github"></i>GitHub
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/rakshapawar/">
              <i className="fab fa-linkedin" title="LinkedIn"></i>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
