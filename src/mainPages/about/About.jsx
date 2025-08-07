import CarButton from "../carButton/CarButton";
import { useOutletContext } from "react-router-dom";
import NavBar from "../homePage/Navbar";

//import dieCastCars1 from "../../images/about-images/cars-die-cast1.JPG";
//import secondEventPoster from "../../images/about-images/die-cast-second-event.JPG";
import "../about/about.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import dieCastCars from "../../images/about-images/cars-die-cast.jpg";
import firstEventPoster from "../../images/about-images/die-cast-first-event.jpg";
import secontEventFlaer from "../../images/about-images/avticiki-bre-second-event.jpg";
import sakuraFestival from "../../images/about-images/sakura-festival.jpg";
import skopjeKup from "../../images/about-images/skopje-kup.JPG";
import oldtimerVitezi from "../../images/about-images/oldtimer-vitezi.jpg";
import sumaSumarum from "../../images/about-images/suma-sumarum.JPG";
import recordFair from "../../images/about-images/record-fair.jpg";

function About() {
  const [subtitle] = useOutletContext();
  return (
    <>
      <NavBar />
      <main className="container">
        <section className="introduction-section">
          <div className="introduction-poster-wrapper">
            <img
              src={dieCastCars}
              alt="small-cars"
              className="introduction-poster"
            />
          </div>
          <div className="introduction-text-wrapper">
            <h2>збор два за нас</h2>
            <p>Колекциите што ја движат страста за прецизност!</p>
            <p>
              Die-Cast Club Куманово е повеќе од само клуб, тоа е заедница на
              ентузијасти обединети од нивната заедничка љубов кон сложениот
              свет на дијагоналните модели. Основан од страна на Аце Дејановски
              (читај Хамато Јоши), животен колекционер, клубот има за цел да ги
              обедини колегите љубители на модели за да споделуваат знаења,
              искуства и нивните ценети предмети.
            </p>
            <p>Нашата Мисија:</p>
            <p>
              Градење на Заедница: Да се создаде пријатно место за собирање на
              колекционери од сите нивоа за да се поврзат, научат и растат
              заедно. Промовирање на Хобито: Да се подигне свеста за
              дијагоналното собирање како фасцинантно и наградувачко хоби.
              Покажување на Извонредност: Да се слави уметноста и занаетчиството
              зад овие минијатурни ремек-дела. Што Нудиме:
            </p>
            <p>
              Редовни Состаноци: Можности за собирање со слични луѓе,
              дискутирање за најновите изданија и споделување на знаења.
              Покажување на Модели: Настани за прикажување и восхитување на
              колекциите на другите, инспирирање на креативност и почитување.
              Образовни Работилници: Сесии за учење за грижа за модели,
              реставрација и техники на фотографирање. Ексклузивен Пристап:
              Понуди само за членови за ретки модели и колекционерски предмети.
              Придружете се на Клубот:
            </p>
            <p>
              Без разлика дали сте искусен колекционер или само го започнувате
              вашето патување, Die-Cast Club Куманово ве поканува да бидете дел
              од нашата жива заедница. Заедно ќе го истражуваме безграничниот
              свет на дијагоналните модели и ќе ја славиме страста што нè движи
              сите.
            </p>
          </div>
        </section>

        <section className="events-section">
          <div className="events-section-title-wrapper">
            <h1>Организирани Настани (Дружби)</h1>
          </div>
          <div className="event-container">
            <div className="event-title-and-description-wrapper">
              <div className="event-title-wrapper">
                <h1>Прво Die-cast Шоу Куманово 2022</h1>
              </div>
              <div className="event-description-wrapper">
                <p>Смотра на "Чуварите на времето"</p>
                <p>
                  Заљубениците и колекционерите на модели на автомобили конечно
                  ја добија долго очекуваната изложба во организација на
                  DIE-CAST CLUB KUMANOVO
                </p>
              </div>
            </div>
            <div className="event-poster-wrapper">
              <img
                src={firstEventPoster}
                alt="event-poster"
                className="event-poster"
              />
            </div>
            <div className="button-wrapper">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                textColor="#6e675f"
                width="160"
              />
            </div>
          </div>
          {/* Second Event */}
          <div className="event-container">
            <div className="event-title-and-description-wrapper">
              <div className="event-title-wrapper">
                <h1>Второ Die-Cast шоу во Куманово 2023</h1>
              </div>
              <div className="event-description-wrapper">
                <p>"Враќањето на колекционерите во Куманово"</p>
                <p>
                  Заљубениците и колекционерите на модели на автомобили конечно
                  ја добија долго очекуваната изложба во организација на
                  DIE-CAST CLUB KUMANOVO
                </p>
              </div>
            </div>
            <div className="event-poster-wrapper">
              <img
                src={secontEventFlaer}
                alt="event-poster"
                className="event-poster"
              />
            </div>
            <div className="button-wrapper">
              <CarButton
                text={subtitle ? "Повеќе" : "Learn more"}
                textColor="#6e675f"
                width="160"
              />
            </div>
          </div>
        </section>

        <section className="our-visits">
          <div className="section-title">
            <h1>наши гостувања</h1>
          </div>
          <div className="guest-visits">
            <div className="guest-appearance sakura-festival">
              <img
                src={sakuraFestival}
                alt="poster-sakura-festival"
                className="appearance-poster"
              />
              <p className="guest-event-title">сакура фестивал</p>
              <p>Фестивал на јапонска култура</p>
              <div className="social-media-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="guest-appearance">
              <img
                src={skopjeKup}
                alt="poster-skopje-kup"
                className="appearance-poster"
              />
              <p className="guest-event-title">Скопје куп 2024</p>
              <p>7ма годишна изложба на макети, минијатури и диорами</p>
              <div className="social-media-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="guest-appearance">
              <img
                src={oldtimerVitezi}
                alt="poster-oldtimer-vitezi"
                className="appearance-poster"
              />
              <p className="guest-event-title">олдтајмер витези</p>
              <p>
                изложба на олдтајмери возила и колекционерски минијатурни модели
              </p>
              <div className="social-media-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="guest-appearance">
              <img
                src={sumaSumarum}
                alt="poster-suma-sumarum"
                className="appearance-poster"
              />
              <p className="guest-event-title">сумасумарум Vol.2</p>
              <p>дружба од едукативен настан</p>
              <div className="social-media-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="guest-appearance record-fair">
              <img
                src={recordFair}
                alt="poster-record-fair"
                className="appearance-poster"
              />
              <p className="guest-event-title">record fair kumanovo</p>
              <p>изложба на винил плочи</p>
              <div className="social-media-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
