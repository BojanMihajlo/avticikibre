import "./navBar.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const { subtitle, setSubtitleState } = props;
  return (
    <div className="navHero">
      <div className="subtitleButtons">
        <button onClick={() => setSubtitleState(false)}>EN</button>
        <button onClick={() => setSubtitleState(true)}>MK</button>
      </div>
      <div className="navBar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {subtitle ? "Почетна" : "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link active">
              {subtitle ? "За нас" : "About"}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active">
              {subtitle ? "АвтичикиБре" : "AvticikiBre"}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active">
              {subtitle ? "Автомобилизам" : "Automobiles"}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active">
              RogueBrush{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active">
              {subtitle ? "Локално" : "Local"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
