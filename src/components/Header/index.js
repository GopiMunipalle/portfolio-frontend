import { Link } from "react-router-dom";
import "./index.css";

function Header() {

  return (
    <div className="header-container">
      <div className="header-top-container">
          <Link to="/">
            <img
              src="https://i.pinimg.com/564x/16/df/e4/16dfe40ae4f39e0e76674f3fbb3bf626.jpg"
              alt="portfolio"
              className="portfolio-image"
            />
          </Link>
        <ul className="header-items">
          <li className="li-item">
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li className="li-item">
            <Link to="/about" className="link-item">
              About
            </Link>
          </li>
          <li className="li-item">
            <Link to="/skills" className="link-item">
              Skills
            </Link>
          </li>
          <li className="li-item">
            <Link to="/education" className="link-item">
              Eductation
            </Link>
          </li>
          <li className="li-item">
            <Link to="/projects" className="link-item">
              Projects
            </Link>
          </li>
          <li className="li-item">
            <Link to="/contact" className="link-item">
              ContactUs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
