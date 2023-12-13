import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

function Home() {
  return (
    <div className="home-bg-container">
      <Header />
      <div className="home-container">
        <div className="home-content-card">
          <img
            src="https://res.cloudinary.com/dpiaz73h0/image/upload/v1702294495/IMG20220514171623__1_-removebg-preview_hjgrz5.png"
            alt="GopiImage"
            className="gopi-image"
          />
          <div className="home-content-card-items">
            <h4
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              Hi,
            </h4>
            <h1 className="home-heading">I'm LeelaGopiKrishna</h1>
            <p className="home-description">
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building responsive
              full-stack web applications.
            </p>
            <Link to="/about" className="home-link-item">
              <button type="button" className="home-button">
                To Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
