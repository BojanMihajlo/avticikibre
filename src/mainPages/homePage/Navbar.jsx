import "./navBar.css";
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
            <a href="">{subtitle ? "Почетна" : "Home"}</a>
          </li>
          <li>
            <a href="">{subtitle ? "За нас" : "About"}</a>
          </li>
          <li>
            <a href="">{subtitle ? "АвтичикиБре" : "AvticikiBre"} </a>
          </li>
          <li>
            <a href="">{subtitle ? "Автомобилизам" : "Automobiles"} </a>
          </li>
          <li>
            <a href="">RogueBrush </a>
          </li>
          <li>
            <a href="">{subtitle ? "Локално" : "Local"}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
