import { useState } from "react";
// import CarSilhouette from "../../images/avtoce1.png"; // path to your SVG
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../images/logo1.png";

import "./footer.css";
import CarButton from "../carButton/CarButton";

const Footer = ({ subtitle }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <footer className="footer">
      {/* <div className="footer-silhouette">
        <img src={CarSilhouette} alt="Car Silhouette" width="100%" />
      </div> */}
      <div className="footer-content">
        <div className="logofooter">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Navbar links */}
        <ul className="footer-nav">
          <li>
            <a href="#home"> {subtitle ? "Почетна" : "Home"}</a>
          </li>
          <li>
            <a href="#about"> {subtitle ? "АвтичикиБре" : "AvticikiBre"}</a>
          </li>
          <li>
            <a href="#services">{subtitle ? "Автомобилизам" : "Automobiles"}</a>
          </li>
          <li>
            <a href="#contact"> RogueBrush</a>
          </li>
          <li>
            <a href="#contact"> {subtitle ? "Локално" : "Local"}</a>
          </li>
          <li>
            <a href="#contact"> {subtitle ? "За нас" : "About"}</a>
          </li>
        </ul>

        {/* Social icons */}
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>

        {/* Email subscription */}
        <div className="footer-subscribe">
          <h2>Subscribe to our Newsletter</h2>
          <form onSubmit={handleSubmit} className="footer-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CarButton text="Subscribe" width="130" />
          </form>
        </div>
        <div className="footer-bottom">
          <p>© 2025 All rights reserved.</p>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <p>© 2025 All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
