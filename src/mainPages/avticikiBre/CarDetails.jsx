// src/mainPages/avticikiBre/CarDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "./cardsData/cardsData";

import "./CarDetails.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CarDetails() {
  const { id } = useParams();

  const car = cardsData.find((c) => c.id === Number(id)) || null;
  const allImages = car ? [car.img, ...(car.gallery || [])] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
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
        <h1>{car.subtitle}</h1>
        <p>{car.description}</p>

        <div className="car-main-image">
          <button className="nav-btn left" onClick={prevImage}>
            <FaArrowLeft />
          </button>
          <img src={allImages[activeIndex]} alt={car.subtitle} />
          <button className="nav-btn right" onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>

        <h2>Галерија</h2>
        <div className="gallery-grid">
          {allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${car.subtitle}-${i}`}
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? "active" : ""}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
