import { useEffect, useState } from "react";
import gsap from "gsap";
import Navbar from "../../homePage/Navbar";
import "./GalleryCars.css";

import car1 from "../../../images/avticikiBre-images/car1.JPG";
import car11 from "../../../images/avticikiBre-images/car1.1.JPG";
import car12 from "../../../images/avticikiBre-images/car 1.2.JPG";
import car13 from "../../../images/avticikiBre-images/car 1.3.JPG";
import car2 from "../../../images/avticikiBre-images/car2.JPG";
import car21 from "../../../images/avticikiBre-images/car2.1.JPG";
import car22 from "../../../images/avticikiBre-images/car2.2.JPG";
import car23 from "../../../images/avticikiBre-images/car2.3.JPG";
import car3 from "../../../images/avticikiBre-images/car3.JPG";
import car4 from "../../../images/avticikiBre-images/car4.JPG";
import car5 from "../../../images/avticikiBre-images/car5.JPG";
import car6 from "../../../images/avticikiBre-images/car6.JPG";
import car7 from "../../../images/avticikiBre-images/car7.JPG";

import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function ScrollyCards() {
  const [selectedCard, setSelectedCard] = useState(null);

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

  const cards = [
    {
      img: car1,
      subtitle: "Johnny Lightning Ad Rods 2002 MOC",
      description:
        "This Johnny Lightning 1/64 AD RODS 1969 Green Dodge Charger is a collectible die-cast vehicle made of metal and plastic materials. It features a detailed design and is a perfect addition to any car enthusiast&apos;s collection. The green color of the vehicle makes it stand out and adds a touch of uniqueness to the model. The 1:64 scale of the car is perfect for display purposes and is an excellent item for collectors or car enthusiasts. This product was manufactured in 2001 and is in great condition.",
      gallery: [car1, car11, car12, car13],
      speed: 0.8,
    },
    {
      img: car2,
      subtitle: "Custom Acura Integra Sedan GSR Right",
      description:
        "The Honda Integra, sold under the Acura name in North America, is a compact car produced in a number of iterations from 1985 to 2006. The DB8 Integra is a four-door sedan version of the Integra produced from 1993 to 2001; this was the last of the Integras to be produced in a sedan format, using a 1.8L B18 inline-4 engine.",
      gallery: [car2, car21, car22, car23],
      speed: 0.9,
    },
    {
      img: car3,
      subtitle: "Card Three",
      description: "This is the description for Card Three.",
      gallery: [car3, car4, car5, car6],
      speed: 1,
    },
    {
      img: car4,
      subtitle: "Card Four",
      description: "This is the description for Card Four.",
      gallery: [car4, car5, car6, car7],
      speed: 1.1,
    },
    {
      img: car5,
      subtitle: "Card Five",
      description: "This is the description for Card Five.",
      gallery: [car5, car1, car6, car7],
      speed: 0.9,
    },
    {
      img: car6,
      subtitle: "Card Six",
      description: "This is the description for Card Six.",
      gallery: [car2, car4, car6, car7],
      speed: 1.2,
    },
    {
      img: car7,
      subtitle: "Card Seven",
      description: "This is the description for Card Seven.",
      gallery: [car1, car3, car5, car7],
      speed: 0.8,
    },
  ];

  return (
    <>
      <div>
        <div id="wrapper">
          <Navbar />
          <section id="content">
            <h1 className="text">Gallery Avticiki</h1>
            <h1 aria-hidden="true" className="text outline-text">
              Gallery Avticiki
            </h1>
            <h1 aria-hidden="true" className="text filter-text">
              Gallery Avticiki
            </h1>

            <section className="cards">
              {cards.map((card, index) => (
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
