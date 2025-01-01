import "./homePage.css";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const [subtitle] = useOutletContext();
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
    </>
  );
};

export default HomePage;
