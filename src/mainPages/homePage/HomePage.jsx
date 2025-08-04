import CarButton from "../carButton/CarButton";
import "./homePage.css";
// import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CollectorCars from "./CollectorCars";
import { motion } from "framer-motion";
import Logo from "../../images/logo1.png";
import MotionBackground from "./MotionBackground";
import Navbar from "./Navbar";

const HomePage = () => {
  const [subtitle] = useOutletContext();

  return (
    <>
      <div id="sectionOne">
        <Navbar />
        <motion.div
          className="logodiv"
          initial={{ y: -600, scale: 1.5, opacity: 0, rotate: -20 }}
          animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 15,
            mass: 1,
            duration: 3.8,
            bounce: 0.5,
          }}
        >
          <img src={Logo} alt="Logo" />
        </motion.div>
      </div>
      <CollectorCars />
      <div id="sectionTwo">
        <div className="bg-cars car1">
          <div className="inner-box state-right">
            <h2 className="montserrat">
              Datsun KAIDO 510 Wagon Hanami V2 EDIT
            </h2>
            {subtitle ? (
              <p className="montserrat">
                Објавено во јуни 2022 година (19,99 долари). Зелена боја, златни
                тркала со сребрени фелни (тип 3). Чејс верзијата е необоена, има
                целосно зелена внатрешност и обични златни тркала со сребрени
                фелни (тип 3). Хаубата може да се отвори за да се откријат
                деталите на моторот. Приближна скала 1/55. Модел базиран на
                Datsun 510 (RHD) од 1971 година.
              </p>
            ) : (
              <p className="montserrat">
                Released June 2022 ($19.99). Green paint, gold wheels with
                silver rims (type 3). Chase version is unpainted, has an
                all-green interior and plain gold wheels with silver rims (type
                3). Hood can be opened to reveal engine details. Approximate
                scale 1/55. Model based on 1971 Datsun 510 (RHD).
              </p>
            )}

            <div className="carButton">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                width="150"
              />
            </div>

            <div className="carButtonMob">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                width="100"
              />
            </div>
          </div>
        </div>

        <div className="bg-cars car2">
          <div className="inner-box state-left">
            <h2 className="montserrat">
              LB-Super Silhouette Nissan S15 SILVIA #23 2021 Formula Drift Japan
            </h2>
            {subtitle ? (
              <p className="montserrat">
                Liberty Walk S15 Silvia ќе се појави во MINI GT. „Оваа машина,
                која е дизајнирана да потсетува на тркачки автомобил од ерата на
                супер силуети, е опремена со турбо мотор со 4 ротори, давајќи и
                уникатен изглед и содржина. „Овој пат, спецификациите на болидот
                бр. 23, кој беше активен во Формула дрифт Јапонија во 2021
                година, се репродуцирани со изненадувачки фини детали, како што
                е логото на спонзорот.
              </p>
            ) : (
              <p className="montserrat">
                The Liberty Walk S15 Silvia will appear in the MINI GT. “This
                machine, which is designed to resemble a racing car from the era
                of the super silhouettes, is equipped with a 4-rotor turbo
                engine, giving it a unique look and feel. “This time, the
                specifications of the car No. 23, which was active in Formula
                Drift Japan in 2021, are reproduced with surprisingly fine
                details, such as the sponsor’s logo.
              </p>
            )}

            <div className="carButton">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                width="150"
              />
            </div>

            <div className="carButtonMob">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                width="100"
              />
            </div>
          </div>
        </div>
        <div className="bg-cars car3">
          <div className="inner-box state-right">
            <h2 className="montserrat">Datsun KAIDO Fairlady Z Blue</h2>
            {subtitle ? (
              <p className="montserrat">
                Објавено во ноември 2022 година (19,99 долари). Темно сина боја,
                сребрени тркала со сребрени фелни (тип 3). Верзијата Chase има
                сиво-кафеава боја, темно сина внатрешност и темно сини тркала со
                сребрени фелни (тип 3). Хаубата може да се отвори за да се
                откријат деталите на моторот. Приближна скала 1/59. Модел
                базиран на Nissan Fairlady (RHD) од 1971 година.
              </p>
            ) : (
              <p className="montserrat">
                Released November 2022 ($19.99). Dark blue paint, silver wheels
                with silver rims (type 3). Chase version has gray-brown paint,
                dark blue interior and dark blue wheels with silver rims (type
                3). Hood can be opened to reveal engine details. Approximate
                scale 1/59. Model based on 1971 Nissan Fairlady (RHD).
              </p>
            )}

            <div className="carButton">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                width="150"
              />
            </div>

            <div className="carButtonMob">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                width="100"
              />
            </div>
          </div>
        </div>
      </div>
      <MotionBackground />

      <div className="advert"></div>
    </>
  );
};

export default HomePage;
