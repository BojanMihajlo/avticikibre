import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import Logo from "../../images/logo1.png";
import "./footer.css";
import CarButton from "../carButton/CarButton";

const Footer = ({ subtitle }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="wrapFooter">
      <footer className="footer">
        <div className="logofooter">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="footer-content">
          {/* NAV */}
          <ul className="footer-nav">
            <li><a href="/">{subtitle ? "Почетна" : "Home"}</a></li>
            <li><a href="/avticikibre">{subtitle ? "АвтичикиБре" : "AvticikiBre"}</a></li>
            <li><a href="/automobiles">{subtitle ? "Автомобилизам" : "Automobiles"}</a></li>
            <li><a href="/virtualcarshow">VirtualCarShow</a></li>
            <li><a href="/about">{subtitle ? "За нас" : "About"}</a></li>
          </ul>

          {/* SOCIAL */}
          <div className="footer-social">
            <a href="https://www.facebook.com/groups/1067216153780659" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/diecastclubavticikibre/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.threads.com/@diecastclubavticikibre" target="_blank" rel="noopener noreferrer">
              <FaSquareThreads />
            </a>
            <a href="https://www.youtube.com/@diecastclubkumanovo" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>

          {/* SUBSCRIBE */}
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
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
