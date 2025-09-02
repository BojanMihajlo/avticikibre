import { useEffect } from "react";
import gsap from "gsap";
import Navbar from "../../homePage/Navbar";

import "./GalleryCars.css";
import car1 from "../../../images/avticikiBre-images/car1.JPG";
import car2 from "../../../images/avticikiBre-images/car2.JPG";
import car3 from "../../../images/avticikiBre-images/car3.JPG";
import car4 from "../../../images/avticikiBre-images/car4.JPG";
import car5 from "../../../images/avticikiBre-images/car5.JPG";
import car6 from "../../../images/avticikiBre-images/car6.JPG";
import car7 from "../../../images/avticikiBre-images/car7.JPG";

import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function ScrollyCards() {
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
    { img: car1, subtitle: "Card One", speed: 0.8 },
    { img: car2, subtitle: "Card Two", speed: 0.9 },
    { img: car3, subtitle: "Card Three", speed: 1 },
    { img: car4, subtitle: "Card Four", speed: 1.1 },
    { img: car5, subtitle: "Card Five", speed: 0.9 },
    { img: car6, subtitle: "Card Six", speed: 1.2 },
    { img: car7, subtitle: "Card Seven", speed: 0.8 },
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
                  style={{ gridArea: gridAreas[index] }} // assign grid dynamically
                >
                  <img src={card.img} alt={card.subtitle} />
                  <h3>{card.subtitle}</h3>
                </div>
              ))}
            </section>
          </section>
        </div>
      </div>
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
