import { useEffect, useState } from "react";
import CardCarousel from "./CardCarousel";

const API = process.env.REACT_APP_API_URL;

function RealCarShow() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/cars/show`)
      .then(res => res.json())
      .then(setCars);
  }, []);

  return (
    <section className="realcar-show">
      <h2>Real Car Show</h2>
      {cars.length > 0 && <CardCarousel items={cars} type="real" />}
    </section>
  );
}

export default RealCarShow;
