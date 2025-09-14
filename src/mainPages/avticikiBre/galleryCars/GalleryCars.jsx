import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../homePage/Navbar";
import "./GalleryCars.css";
import { FaCar } from "react-icons/fa";
import { cardsData } from "../cardsData/cardsData";
import { useOutletContext } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryCars() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [subtitle] = useOutletContext();

  useEffect(() => {
    // Skew ефект при scroll
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

    // Parallax ефект според data-speed
    gsap.utils.toArray(".card").forEach((card) => {
      let speed = card.dataset.speed || 1;
      gsap.to(card, {
        y: () => -(window.innerHeight * speed * 0.1), // колку повеќе speed, толку повеќе се движи
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

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

          <section className="cardsAvticiki">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="cardAvto"
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

      {/* Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
