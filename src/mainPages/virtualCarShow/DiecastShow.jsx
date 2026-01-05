import { useEffect, useState } from "react";
import CardCarousel from "./CardCarousel";

const API = process.env.REACT_APP_API_URL;

function DiecastShow() {
  const [cars, setCars] = useState([]);
 

  useEffect(() => {
    fetch(`${API}/api/diecast/show`)
      .then(res => res.json())
      .then(setCars);
  }, []);

  return (
    <section className="diecast-show">
      <h2>Diecast Show</h2>
      {cars.length > 0 && <CardCarousel items={cars} type="diecast" />}
    </section>
  );
}

export default DiecastShow;
