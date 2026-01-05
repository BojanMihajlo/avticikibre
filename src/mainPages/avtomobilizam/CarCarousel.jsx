import React, { useState } from "react";
import {useCars} from "./realCarsData.js";
import "./CarCarousel.css";
import { useOutletContext } from "react-router-dom";
import CarButton from "../carButton/CarButton";
import { useNavigate } from "react-router-dom";
import Loader from "../homePage/Loader.jsx";

const CarCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

   const [subtitle] = useOutletContext();
   const navigate = useNavigate();

   const carsData = useCars()
  const showLoader = carsData.length === 0;

    const API = process.env.REACT_APP_API_URL;
  const handleSlideClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };


     const getImageURL = (img) => {
  if (!img) return "/placeholder.jpg";

  if (img.startsWith("http")) return img;

  
  return img.startsWith("/")
    ? `${API}${img}`
    : `${API}/${img}`;
}

  return (

    <>

    <div className="avtomobilSubtitle">

      <h3>
        {subtitle? "Страст, мотор и иновација – откриј го светот на автомобилизмот!" : "Passion, engines, innovation – explore the world of automobiles!"}

      </h3>


    </div>


    <div className="cardSlider">
    <div className="slider-container">
      
      <div className="accordion-slider">
          {showLoader && (
    <div className="loader-wrapper">
      <Loader />
    </div>
  )}

  {!showLoader &&
        carsData.slice(0, 5).map((car, index) => (
          <div
            key={car._id}
            className={`slide ${activeIndex === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${getImageURL(car.image)})` }}
            onClick={() => handleSlideClick(index)}
          >
            <div className="slide-content">
              
              <div className="car-brand">{car.brand}</div>
              <div className="car-name">{car.name}</div>
              <div className="car-specs">
                <div className="spec-row">
                  <span className="spec-label">Engine:</span>
                  <span className="spec-value">{car.engine}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Power:</span>
                  <span className="spec-value">{car.power}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Year:</span>
                  <span className="spec-value">{car.year}</span>
                </div>
              </div>
              <div className="performance-badges">
                
                <div className="badge">
                  <div className="badge-icon"></div>
                  <span>Top Speed: {car.topSpeed}</span>
                </div>
             
              </div>
            </div>
            <div className="add-button">
              
            </div>
          </div>
        ))}
      </div>

     
    </div>
    </div>

     <div className="btnGallery">
          <CarButton width={200}  text={subtitle?"Види галерија":"See gallery"}  onClick={() => navigate("realCarGallery")}/>
          </div>
    </>
  );
};

export default CarCarousel;
