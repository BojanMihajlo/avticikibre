import { useState,useEffect } from "react";
import "./CardCarousel.css";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const getImageURL = (img) =>
  img?.startsWith("http") ? img : `${API}${img}`;

function CardCarousel({ items, type }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

   useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);


  return (


<div className="carousel-virtual">
      <div className="carousel-track">
        {items.map((item, i) => {
          let position = "hidden";
          if (i === index) position = "active";
          else if (i === index - 1 || (index === 0 && i === items.length - 1))
            position = "left";
          else if (i === index + 1 || (index === items.length - 1 && i === 0))
            position = "right";

          return (
            <div key={item._id} className={`card-virtual ${position}`}>
              <div className="card-virtual-inner">
                <Link to={type === "diecast"? `/avticikibre/galleryCars/${item._id}`:`/automobiles/realCarGallery/${item._id}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  src={getImageURL(type === "diecast" ? item.images[0] : item.image)}
                  alt=""
                  
                />
                </Link>
                <div className="card-virtual-info">
                  {type === "diecast"
                    ? item.model
                    : `${item.brand} ${item.name}`}
                </div>
              </div>

              {/* 🔥 REFLECTION */}
              <div className="card-reflection">
                <img
                  src={getImageURL(type === "diecast" ? item.images[0] : item.image)}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav prev" onClick={prev}>‹</button>
      <button className="nav next" onClick={next}>›</button>
    </div>
  );
}

export default CardCarousel;
