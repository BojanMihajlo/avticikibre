import DiecastShow from "./DiecastShow";
import RealCarShow from "./RealCarShow";
import Navbar from "../homePage/Navbar";
import { useEffect, useState } from "react";
import Loader from "../homePage/Loader"
import "./VirtualCarShow.css";

const API = process.env.REACT_APP_API_URL;

function VirtualCarShow() {
  const [carOfWeek, setCarOfWeek] = useState(null);
  const [openCurtain, setOpenCurtain] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/show/car-of-the-week`)
      .then(res => res.json())
      .then(setCarOfWeek)
      .catch(err => console.error(err));
  }, []);

  const car = carOfWeek?.car;
  const isDiecast = carOfWeek?.type === "diecast";

  const getImageURL = (img) => {
    if (!img) return "/placeholder.jpg";
    return img.startsWith("http") ? img : `${API}${img}`;
  };

  // ---------- услов за loader ----------
  if (!carOfWeek) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#edebd7" }}>
        <Loader />
      </div>
    );
  }

  // ---------- ако има carOfWeek ----------
  return (
    <div style={{ backgroundColor: "#edebd7" }}>
      <section
        className="car-of-week-hero"
        style={{ backgroundImage: `url(${getImageURL(isDiecast ? car?.images?.[0] : car?.image)})` }}
        onClick={() => setOpenCurtain(true)}
      >
        <Navbar />
        {/* Curtain panels */}
        <div className={`curtain left ${openCurtain ? "open" : ""}`}></div>
        <div className={`curtain right ${openCurtain ? "open" : ""}`}></div>

        {/* Overlay text */}
        {!openCurtain && car && (
          <div className="hero-text">
            <h1>Car of the Day</h1>
            <p>Click to reveal</p>
          </div>
        )}

        {/* Details under */}
        {openCurtain && car && (
          <div className="hero-details">
            {isDiecast ? (
              <>
                <h2>{car.model}</h2>
                {/* <p>{car.description.en}</p> */}
              </>
            ) : (
              <>
                <h2>{car.brand} {car.name}</h2>
                <p>{car.year} | {car.engine} | {car.power} hp | Top Speed: {car.topSpeed}</p>
              </>
            )}
          </div>
        )}
      </section>

      <div className="show-components">
        <DiecastShow />
        <RealCarShow />
      </div>
    </div>
  );
}

export default VirtualCarShow;
