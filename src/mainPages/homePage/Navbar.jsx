import "./navBar.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const { subtitle, setSubtitleState } = props;

  return (
    <div className="navHero">
      <div className="subtitleButtons">
        <button className="montserrat" onClick={() => setSubtitleState(false)}>
          EN
        </button>
        <button className="montserrat" onClick={() => setSubtitleState(true)}>
          MK
        </button>
      </div>
      <div className="navBar">
        <ul className="montserrat">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "Почетна" : "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "За нас" : "About"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="avticikiBre"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "АвтичикиБре" : "AvticikiBre"}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="automobiles"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "Автомобилизам" : "Automobiles"}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="roguebrush"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              RogueBrush{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="local"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {subtitle ? "Локално" : "Local"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
