import { FaGithub } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";

import "./index.css";

function Footer() {
  return (
    <div className="footer-bg-container">
      <div className="footer-container">
        <a
          href="https://www.linkedin.com/in/leelagopikrishna/"
          target="__blank"
        >
          <CiLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/GopiMunipalle" target="__blank">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.naukri.com/mnjuser/profile" target="__blank">
          <VscAccount className="footer-icon" />
        </a>
      </div>
      <p style={{ color: "white", marginBottom: "10px" }}>Contact US</p>
    </div>
  );
}

export default Footer;
