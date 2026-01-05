import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCars } from "./cardsData/cardsData";
import "./CarDetails.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();
  const cars = useCars();
   
   const [subtitle] = useOutletContext();
   const lang = subtitle ? "mk" : "en";
  const API = process.env.REACT_APP_API_URL;

  
  const car = cars.find((c) => c._id === id) || null;

  const allImages = car?.images ?? [];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

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
      <section className="car-details">
        <h1>{car.model}</h1>

        {/* description може да е object */}
        <p>{car.description?.[lang] ??
   car.description?.mk ??
   car.description?.en ??
   ""}</p>

        <div className="car-main-image">
          <button className="nav-btn left" onClick={prevImage}>
            <FaArrowLeft />
          </button>

          <img
            src={getImageURL(allImages[activeIndex])}
            alt={car.model}
          />

          <button className="nav-btn right" onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>

        <h2>{subtitle? "Галерија": "Gallery"}</h2>

        <div className="gallery-grid">
          {allImages.map((img, i) => (
            <img
              key={i}
              src={getImageURL(img)}
              alt={`${car.model}-${i}`}
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? "active" : ""}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
