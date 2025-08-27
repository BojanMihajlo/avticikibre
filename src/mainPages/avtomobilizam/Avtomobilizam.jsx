import NavBar from "../homePage/Navbar";
import raceVideo from "../../images/avtomobilizam-images/racing-drifting-car.mp4";
import "./avtomobilizam.css";

export default function Avtomobilizam() {
  return (
    <>
      <div className="avtomobilizam-hero">
        <video autoPlay muted loop playsInline>
          <source src={raceVideo} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>

        <div className="navbar-container">
          <NavBar />
        </div>
      </div>
    </>
  );
}
