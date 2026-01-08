import { useLayoutEffect, useRef } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollSection.css";

import image1 from "../../images/IMG_4566.JPG";
import image2 from "../../images/IMG_4593.JPG";
import image3 from "../../images/IMG_4637.JPG";
import CarButton from "../carButton/CarButton";

gsap.registerPlugin(ScrollTrigger);

const itemsData = [
  {
    id: 1,
    title: "Datsun KAIDO 510 Wagon Hanami V2 EDIT",
    text: {
     MK: "Објавено во јуни 2022 година (19,99 долари). Зелена боја, златни тркала со сребрени фелни (тип 3). Чејс верзијата е необоена, има целосно зелена внатрешност и обични златни тркала со сребрени фелни (тип 3). Хаубата може да се отвори за да се откријат деталите на моторот. Приближна скала 1/55. Модел базиран на Datsun 510 (RHD) од 1971 година.", EN: "Released June 2022 ($19.99). Green paint, gold wheels with silver rims (type 3). Chase version is unpainted, has an all-green interior and plain gold wheels with silver rims (type 3). Hood can be opened to reveal engine details. Approximate scale 1/55. Model based on 1971 Datsun 510 (RHD).",
    },
    image: image1,
  },
  {
    id: 2,
    title: "LB-Super Silhouette Nissan S15 SILVIA #23",
    text: {
      MK: "Liberty Walk S15 Silvia ќе се појави во MINI GT. „Оваа машина,која е дизајнирана да потсетува на тркачки автомобил од ерата на супер силуети, е опремена со турбо мотор со 4 ротори, давајќи и уникатен изглед и содржина. „Овој пат, спецификациите на болидот бр. 23, кој беше активен во Формула дрифт Јапонија во 2021 година, се репродуцирани со изненадувачки фини детали, како што е логото на спонзорот.", EN: "The Liberty Walk S15 Silvia will appear in the MINI GT. “This machine, which is designed to resemble a racing car from the era of the super silhouettes, is equipped with a 4-rotor turbo engine, giving it a unique look and feel. “This time, the specifications of the car No. 23, which was active in Formula Drift Japan in 2021, are reproduced with surprisingly fine details, such as the sponsor’s logo.",
    },
    image: image2,
  },
  {
    id: 3,
    title: "Datsun KAIDO Fairlady Z Blue",
    text: {
     MK: "Објавено во ноември 2022 година (19,99 долари). Темно сина боја, сребрени тркала со сребрени фелни (тип 3). Верзијата Chase има сиво-кафеава боја, темно сина внатрешност и темно сини тркала со сребрени фелни (тип 3). Хаубата може да се отвори за да се откријат деталите на моторот. Приближна скала 1/59. Модел базиран на Nissan Fairlady (RHD) од 1971 година.", EN: "Released November 2022 ($19.99). Dark blue paint, silver wheels with silver rims (type 3). Chase version has gray-brown paint, dark blue interior and dark blue wheels with silver rims (type 3). Hood can be opened to reveal engine details. Approximate scale 1/59. Model based on 1971 Nissan Fairlady (RHD).",
    },
    image: image3,
  },
];

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const [subtitle] = useOutletContext();
  const navigate = useNavigate();
  const lang = subtitle ? "MK" : "EN";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const items = itemsRef.current;

      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { yPercent: 100 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, index) => {
        tl.to(item, {
          scale: 0.7,
          borderRadius: "10px",
        });

        if (items[index + 1]) {
          tl.to(items[index + 1], { yPercent: 0 }, "<");
        }
      });

      // 🔑 Production fix
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }, sectionRef);

    return () => ctx.revert(); // 🔥 ROUTE-SAFE CLEANUP
  }, []);

  return (
    <div ref={sectionRef} className="scroll-section section">
      <div className="wrapper">
        <div className="list">
          {itemsData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="item_content">
                <h2>{item.title}</h2>
                <p className="item_p">{item.text[lang]}</p>

                <div className="carButton">
                  <CarButton
                    text={subtitle ? "Повеќе" : "Learn more"}
                    width="150"
                    onClick={() => navigate("/avticikibre/galleryCars")}
                  />
                </div>

                <div className="carButtonMob">
                  <CarButton
                    text={subtitle ? "Повеќе" : "Learn more"}
                    width="100"
                    onClick={() => navigate("/avticikibre/galleryCars")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;

