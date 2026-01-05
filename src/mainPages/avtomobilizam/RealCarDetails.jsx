
import { useParams } from "react-router-dom";
import {useCars} from "./realCarsData.js";



export default function RealCarDetails() {
  const { id } = useParams();
  const cars = useCars();

  const API = process.env.REACT_APP_API_URL;

  
  const car = cars.find((c) => c._id === id) || null;


  const getImageURL = (img) => {
    if (!img) return "/placeholder.jpg";
    if (img.startsWith("http")) return img;
    return img.startsWith("/")
      ? `${API}${img}`
      : `${API}/${img}`;
  };

  if (!car) {
    return (
      <div id="wrapper">
        <h2>Автомобилот не е најден</h2>
      </div>
    );
  }

  return (
    <div id="wrapper">
      <section className="car-details  realcar-details">
        <h1>{car.name}</h1>
        <p>{car.brand}</p>

        <div className="wrapper-realcar">

        <div className="car-main-image">
          <img
            src={getImageURL(car.image)}
            alt={car.model}
          />

        </div>

        <div className="specification-car">
            <h2>Year: <span> {car.year}</span></h2>
            <h2>Engine: <span> {car.engine}</span></h2>
            <h2>Power: <span> {car.power}</span></h2>
            <h2>TopSpeed: <span> {car.topSpeed}</span></h2>

        </div>

       </div>
      </section>
    </div>
  );
}
