import { useEffect, useState } from "react";
import gsap from "gsap";
import Navbar from "../../homePage/Navbar";
import "./GalleryCars.css";
import { FaCar } from "react-icons/fa";
import { cardsData } from "../cardsData/cardsData";
import { useOutletContext } from "react-router-dom";

import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function ScrollyCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [subtitle] = useOutletContext();

  useEffect(() => {
    let skewSetter = gsap.quickTo(".card", "skewY"),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 2,
      speed: 3,
      effects: true,
      onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      onStop: () => skewSetter(0),
    });
  }, []);

  return (
    <>
      <div>
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

            <section className="cards">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="card"
                  data-speed={card.speed}
                  style={{ gridArea: gridAreas[index] }}
                  onClick={() => setSelectedCard(card)}
                >
                  <img src={card.img} alt={card.subtitle} />
                  <h3>{card.subtitle}</h3>
                </div>
              ))}
            </section>
          </section>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ✕
            </button>
            <h2>{selectedCard.subtitle}</h2>
            <p>{selectedCard.description}</p>
            <div className="gallery-grid">
              {selectedCard.gallery.map((img, i) => (
                <img key={i} src={img} alt={`${selectedCard.subtitle}-${i}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const gridAreas = [
  "1/1/6/8",
  "3/12/8/20",
  "9/5/13/15",
  "14/1/18/8",
  "16/12/20/19",
  "20/2/25/9",
  "22/11/24/20",
  "26/5/30/15",
];
