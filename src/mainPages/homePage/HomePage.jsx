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
            <h1>
              {subtitle
                ? "Запознај се со нашиот колекционерски свет"
                : "Get to know our collection world"}
            </h1>
          </div>

          <div className="right-text">
            <h3>
              <span>+700</span>{" "}
              {subtitle
                ? "колекционери на едно место "
                : "collectors in one place"}
            </h3>
            <div className="about-hobby">
              <p>
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
            <h2>Interdum ament non magna agusnam</h2>
            <p className="subtitle">
              Nun comodo ament visi comand magna ipsum dolor sit amet
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut,
              doloremque sit molestiae id doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab, explicabo molestiae ipsum dolore
              itaque praesentium facilis quia deleniti dolorem suscipit.
            </p>
            <button className="icons-button">Learn more</button>
          </div>
        </div>

        <div
          className="bg-cars car2"
          //  style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="inner-box state-left">
            <h2>Interdum felis blandid praesent sed augue</h2>
            <p className="subtitle">
              Nun comodo ament visi comand magna amet consectetur adipisicing
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut,
              doloremque sit molestiae id doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab, explicabo molestiae ipsum dolore
              itaque praesentium facilis quia deleniti dolorem suscipit.
            </p>
            <button className="icons-button">Learn more</button>
          </div>
        </div>
        <div
          className="bg-cars car3"
          // style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="inner-box state-right">
            <h2>Interdum ament non magna agusnam</h2>
            <p className="subtitle">
              Nun comodo ament visi comand magna ipsum dolor sit amet
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut,
              doloremque sit molestiae id doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab, explicabo molestiae ipsum dolore
              itaque praesentium facilis quia deleniti dolorem suscipit.
            </p>
            <button className="icons-button">Learn more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
