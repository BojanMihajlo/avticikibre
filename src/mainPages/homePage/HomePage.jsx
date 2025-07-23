import "./homePage.css";
// import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const [subtitle] = useOutletContext();
  // const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     // Ovoj e povik do backend
  //     setLoading(true);
  //     fetch(`https://example.com/api/images/${imageId}`)
  //         .then(response => response.json())
  //         .then(data => {
  //             setImageUrl(data.imageUrl);
  //             setLoading(false);
  //         })
  //         .catch(error => {
  //             console.error("Error fetching image:", error);
  //             setLoading(false);
  //         });
  // }, [imageId]);

  return (
    <>
      <div className="first-info">
        <div className="first-info-wrap">
          <div className="left-text">
            <h1 className="montserrat">
              {subtitle
                ? "Запознај се со нашиот колекционерски свет"
                : "Get to know our collection world"}
            </h1>
          </div>

          <div className="right-text">
            <h3 className="montserrat">
              <span>+700</span>{" "}
              {subtitle
                ? "колекционери на едно место "
                : "collectors in one place"}
            </h3>
            <div className="about-hobby">
              <p className="montserrat">
                {subtitle
                  ? "2-3 збора за нашето ХОБИ собирањето на DIE-CAST модели,е едукативна активност во која можат да уживаат и младите и старите генерации.Преку ова хоби можете да научите многу за реалните автомобили.Да си создадете еден Ваш свет на минијатури кои ќе ви биднат прибежиштево одредени моменти кои ќе придонесат до подобро расположение.Уживајте во вашето хоби."
                  : "2-3 words about our HOBBY collecting DIE-CAST models an educational activity that can be enjoyed by young people and the old generations. Through this hobby you can learn a lot about real cars. To create your own world of miniatures which will be your refuge certain moments that will contribute to a better mood. Enjoy your hobby."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="sectionTwo">
        <div
          className="bg-cars car1"
          //  style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="inner-box state-right">
            <h2 className="montserrat">
              Datsun KAIDO 510 Wagon Hanami V2 EDIT
            </h2>
            <p className="montserrat">
              Објавено во јуни 2022 година (19,99 долари). Зелена боја, златни
              тркала со сребрени фелни (тип 3). Чејс верзијата е необоена, има
              целосно зелена внатрешност и обични златни тркала со сребрени
              фелни (тип 3). Хаубата може да се отвори за да се откријат
              деталите на моторот. Приближна скала 1/55. Модел базиран на Datsun
              510 (RHD) од 1971 година.
            </p>
            <button className="icons-button">Learn more</button>
          </div>
        </div>

        <div
          className="bg-cars car2"
          //  style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="inner-box state-left">
            <h2 className="montserrat">
              LB-Super Silhouette Nissan S15 SILVIA #23 2021 Formula Drift Japan
            </h2>
            <p className="montserrat">
              Liberty Walk S15 Silvia ќе се појави во MINI GT. „Оваа машина,
              која е дизајнирана да потсетува на тркачки автомобил од ерата на
              супер силуети, е опремена со турбо мотор со 4 ротори, давајќи и
              уникатен изглед и содржина. „Овој пат, спецификациите на болидот
              бр. 23, кој беше активен во Формула дрифт Јапонија во 2021 година,
              се репродуцирани со изненадувачки фини детали, како што е логото
              на спонзорот.
            </p>
            <button className="icons-button">Learn more</button>
          </div>
        </div>
        <div
          className="bg-cars car3"
          // style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="inner-box state-right">
            <h2 className="montserrat">Datsun KAIDO Fairlady Z Blue</h2>
            <p className="montserrat">
              Објавено во ноември 2022 година (19,99 долари). Темно сина боја,
              сребрени тркала со сребрени фелни (тип 3). Верзијата Chase има
              сиво-кафеава боја, темно сина внатрешност и темно сини тркала со
              сребрени фелни (тип 3). Хаубата може да се отвори за да се
              откријат деталите на моторот. Приближна скала 1/59. Модел базиран
              на Nissan Fairlady (RHD) од 1971 година.
            </p>
            <button className="icons-button">Learn more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
