import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../homePage/Navbar";
import "./GalleryCars.css";
import { FaCar } from "react-icons/fa";
import { useCars } from "../cardsData/cardsData";
import { useOutletContext } from "react-router-dom";
import Loader from "../../homePage/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryCars() {
  const [subtitle] = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");

  const cars = useCars();
  const showLoader = cars.length === 0;
  const API = process.env.REACT_APP_API_URL;

  const filteredCards = cars.filter((card) =>
    card.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    let skewSetter = gsap.quickTo(".cardAvto", "skewY"),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      trigger: ".cardsAvticiki",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      onScrubComplete: () => skewSetter(0),
    });

    gsap.utils.toArray(".cardAvto").forEach((card) => {
      const speed = parseFloat(card.dataset.speed) || 1;

      gsap.to(card, {
        y: () => -(window.innerHeight * speed * 0.15),
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    ScrollTrigger.refresh();
  }, [filteredCards.length]);


  const getFirstImage = (card) => {
    if (card.images && card.images.length > 0) {
      return card.images[0];
    }
    if (card.image) {
      return card.image;
    }
    return "/placeholder.jpg";
  };

  const getImageURL = (img) => {
    if (!img) return "/placeholder.jpg";
    if (img.startsWith("http")) return img;
    return img.startsWith("/") ? `${API}${img}` : `${API}/${img}`;
  };

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <section id="content">
          <h1 className="text">
            {subtitle ? "Галерија" : "Gallery"}
            <FaCar />
            {subtitle ? "Автичики" : "Avticiki"}
          </h1>
          <h1 aria-hidden="true" className="text outline-text">
            {subtitle ? "Галерија" : "Gallery"}
            <FaCar />
            {subtitle ? "Автичики" : "Avticiki"}
          </h1>
          <h1 aria-hidden="true" className="text filter-text">
            {subtitle ? "Галерија" : "Gallery"}
            <FaCar />
            {subtitle ? "Автичики" : "Avticiki"}
          </h1>

          {/* Search Input */}
          <div className="search-box">
            <input
              type="text"
              placeholder={subtitle ? "Барај по име..." : "Search by name..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <section className="cardsAvticiki">

            {showLoader && (
        <div className="loader-wrapper">
         <Loader />
         </div>
          )}
             
             {!showLoader &&
            filteredCards.map((card, index) => (
              <div
                key={index}
                className="cardAvto"
                data-speed={card.speed ?? (Math.random() * 1.5 + 0.5)}
                style={{ gridArea: gridAreas[index] }}
                onClick={() =>
                  window.open(`/avticikiBre/galleryCars/${card._id}`, "_blank")
                }
              >
                <img src={getImageURL(getFirstImage(card))} alt={card.model} />
                <h3>{card.model}</h3>
              </div>
            ))}

            {filteredCards.length === 0 && (
              <p className="no-results">
                {subtitle ? "Нема резултати" : "No results"}
              </p>
            )}
          </section>
        </section>
      </div>
    </>
  );
}

const gridAreas = [
  "1/4/6/8",
  "3/12/8/22",
  "7/4/8/15",
  "14/4/8/8",
  "16/12/12/19",
  "20/4/14/9",
  "22/11/15/22",
  "26/5/17/12",
  "30/13/19/20",
  "34/3/21/11",
  "36/10/24/22",
  "40/6/27/24",
  "42/4/30/10",
  "45/15/32/18",
  "46/2/38/16",
  "48/4/45/8",
  "51/10/46/16",
  "53/18/48/22",
  "54/2/50/16",
  "55/16/56/20",
];
