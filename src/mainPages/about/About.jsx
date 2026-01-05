import CarButton from "../carButton/CarButton";
import { useOutletContext } from "react-router-dom";
import NavBar from "../homePage/Navbar";

import "../about/about.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import dieCastCars from "../../images/about-images/cars-die-cast.jpg";
import firstEventPoster from "../../images/about-images/die-cast-first-event.jpg";
import secontEventFlaer from "../../images/about-images/avticiki-bre-second-event.jpg";
import thirdEventFlaer from "../../images/about-images/avticiki-bre-third-event.jpg";
import sakuraFestival from "../../images/about-images/sakura-festival.jpg";
import skopjeKup from "../../images/about-images/skopje-kup.JPG";
import oldtimerVitezi from "../../images/about-images/oldtimer-vitezi.jpg";
import sumaSumarum from "../../images/about-images/suma-sumarum.JPG";
import recordFair from "../../images/about-images/record-fair.jpg";

import asdsSenegal from "../../images/local-images/asds-senegal.jpg";
import balbus from "../../images/local-images/balbus.jpg";
import beseda from "../../images/local-images/beseda.jpg";
import formaKumanovo from "../../images/local-images/forma-kumanovo.jpg";
import pucaCerep from "../../images/local-images/puca-cerep.jpg";
import qrec from "../../images/local-images/qrec.jpg";
import tuningSlavia from "../../images/local-images/tuning-slavia.jpg";


function About() {
  const [subtitle] = useOutletContext();

  
  return (
    <>
      <NavBar bgColor={ "#edebd7"}/>
     
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
            <h2>{subtitle? "збор два за нас" : "A word about us"}</h2>
            <h4>{subtitle? "Колекциите што ја движат страста за прецизност!" : "The collections that drive the passion for precision!"}</h4>
            <p>
              {subtitle?"Основан од страна на Аце Дејановски (АКА Хамато Јоши), Die-Cast Club Автичики БРЕ е повеќе од само клуб, тоа е заедница на ентузијасти обединети од нивната заедничка љубов кон сложениот свет на дијагоналните модели. Клубот има за цел да ги обедини колегите љубители на модели за да споделуваат знаења, искуства и нивните ценети предмети." : "Founded by Ace Dejanovski (AKA Hamato Yoshi), Die-Cas Club Avtichiki BRE is more than just a club, it is a community of enthusiasts united by their shared love for the intricate world of die-cast models. The club aims to bring together fellow model enthusiasts to share knowledge, experiences and their prized possessions."}
            </p>
            <h4>{subtitle? "Нашата Мисија:" : "Our mission:"}</h4>
            <p>
              {subtitle? "Градење на Заедница: Да се создаде пријатно место за собирање на колекционери од сите нивоа за да се поврзат, научат и растат заедно." : "Building a Community: To create a welcoming place for collectors of all levels to connect, learn, and grow together."}
            </p>
            <p>
             {subtitle? "Промовирање на Хобито: Да се подигне свеста за дијагоналното собирање како фасцинантно и наградувачко хоби." : "Promoting the Hobby: To raise awareness of diagonal collecting as a fascinating and rewarding hobby."}
            </p>
            <p>
              {subtitle?"Покажување на Извонредност: Да се слави уметноста и занаетчиството зад овие минијатурни ремек-дела.":"Showcasing Excellence: Celebrating the art and craftsmanship behind these miniature masterpieces."}
            </p>
            <h4> {subtitle? "Што Нудиме:":"What We Offer:"}</h4>
            <p>
              {subtitle?"Редовни Состаноци: Можности за собирање со слични луѓе,дискутирање за најновите изданија и споделување на знаења." : "Regular Meetings: Opportunities to gather with like-minded people, discuss the latest releases, and share knowledge."}
            </p>
            <p>
              {subtitle? "Покажување на Модели: Настани за прикажување и восхитување на колекциите на другите, инспирирање на креативност и почитување.":"Model Shows: Events to showcase and admire the collections of others, inspiring creativity and respect."}
            </p>
            <p>
              {subtitle? "Образовни Работилници: Сесии за учење за грижа за модели,реставрација и техники на фотографирање.":"Educational Workshops: Learning sessions on model care, restoration, and photography techniques."}
            </p>
            <p>
              {subtitle? "Ексклузивен Пристап: Понуди само за членови за ретки модели и колекционерски предмети.":"Exclusive Access: Members-only offers on rare models and collectibles."}
            </p>
            <h4> {subtitle?"Придружете се на Клубот:":"Join the Club:"}</h4>
            <p>
              {subtitle?"Без разлика дали сте искусен колекционер или само го започнувате вашето патување, Die-Cast Club Куманово ве поканува да бидете дел од нашата жива заедница. Заедно ќе го истражуваме безграничниот свет на дијагоналните модели и ќе ја славиме страста што нè движи сите.":"Whether you are an experienced collector or just starting your journey, Die-Cast Club Kumanovo invites you to be part of our vibrant community. Together we will explore the limitless world of diecast models and celebrate the passion that drives us all."}
            </p>
          </div>
        </section>

        <section className="events-section">
          <div className="events-section-title-wrapper">
            <h1>{subtitle? "Организирани Настани (Дружби)":"Organized Events (Social Events)"}</h1>
          </div>
          {/* Third Event */}
          <div className="event-container">
            <div className="event-title-and-description-wrapper">
              <div className="event-title-wrapper">
                <h1>{subtitle? "Трето Die-Cast шоу во Куманово 2025":"Third Die-Cast Show in Kumanovo 2025"}</h1>
              </div>
              <div className="event-description-wrapper">
                <p>{subtitle?"И ја собирам Автичики Бре":"And I collect Avtichikki Bre"}</p>
                <p>
                  {subtitle ? "Заљубениците и колекционерите на модели на автомобили конечно ја добија долго очекуваната изложба во организација на DIE-CAST CLUB KUMANOVO" :"Model car enthusiasts and collectors finally got the long-awaited exhibition organized by DIE-CAST CLUB KUMANOVO"}
                </p>
              </div>
            </div>
            <div className="event-poster-wrapper">
              <img
                src={thirdEventFlaer}
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
                <h1>{subtitle? "Второ Die-Cast шоу во Куманово 2023":"Second Die-Cast Show in Kumanovo 2023"}</h1>
              </div>
              <div className="event-description-wrapper">
                <p>{subtitle ? "Враќањето на колекционерите во Куманово":"The return of collectors to Kumanovo"}</p>
                <p>
                  {subtitle ? "Заљубениците и колекционерите на модели на автомобили конечно ја добија долго очекуваната изложба во организација на DIE-CAST CLUB KUMANOVO" :"Model car enthusiasts and collectors finally got the long-awaited exhibition organized by DIE-CAST CLUB KUMANOVO"}
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
          {/* First Event */}
          <div className="event-container">
            <div className="event-title-and-description-wrapper">
              <div className="event-title-wrapper">
                <h1>{subtitle? "Прво Die-cast Шоу Куманово 2022":"First Die-Cast Show in Kumanovo 2022"}</h1>
              </div>
              <div className="event-description-wrapper">
                <p>{subtitle?"Смотра на Чуварите на времето":"Review of The Guardians of Time"}</p>
                <p>
                  {subtitle ? "Заљубениците и колекционерите на модели на автомобили конечно ја добија долго очекуваната изложба во организација на DIE-CAST CLUB KUMANOVO" :"Model car enthusiasts and collectors finally got the long-awaited exhibition organized by DIE-CAST CLUB KUMANOVO"}
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
        </section>

        <section className="our-visits">
          <div className="section-title">
            <h1>{subtitle?"наши гостувања" :"our visits"}</h1>
          </div>
          <div className="guest-visits">
            <div className="guest-appearance sakura-festival">
              <img
                src={sakuraFestival}
                alt="poster-sakura-festival"
                className="appearance-poster"
              />
              <p className="guest-event-title">{subtitle?"сакура фестивал":"sakura festival"}</p>
              <p>{subtitle? "Фестивал на јапонска култура":"Japanese Culture Festival"}</p>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/groups/1067216153780659"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/diecastclubavticikibre/"
                 target="_blank"
                  rel="noopener noreferrer"
                >
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
              <p className="guest-event-title">{subtitle?"Скопје куп 2024":"Skopje cup 2024"}</p>
              <p>{subtitle?"7ма годишна изложба на макети, минијатури и диорами":"7th Annual Exhibition of Models, Miniatures and Dioramas"}</p>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/groups/1067216153780659"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/diecastclubavticikibre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <p className="guest-event-title">{subtitle?"олдтајмер витези":"old timer knights"}</p>
              <p>
                {subtitle?"изложба на олдтајмери возила и колекционерски минијатурни модели":"exhibition of old-timer vehicles and collectible miniature models"}
              </p>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/groups/1067216153780659"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/diecastclubavticikibre/"
                target="_blank"
                rel="noopener noreferrer"
                >
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
              <p className="guest-event-title">{subtitle?"сумасумарум Vol.2":"sumasumarum Vol.2"}</p>
              <p>{subtitle?"дружба од едукативен настан":"friendship from an educational event"}</p>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/groups/1067216153780659"
                 target="_blank"
                 rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/diecastclubavticikibre/"
                   target="_blank"
                   rel="noopener noreferrer"
                >
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
              <p>{subtitle?"изложба на винил плочи":"vinyl record exhibition"}</p>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/groups/1067216153780659"
                 target="_blank"
                 rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/diecastclubavticikibre/"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL SECTION */}

        <section className="local-section-container">
          <div className="local-title-wrapper">
            <h2>{subtitle?"Локални поддржувачи":"Local supporters"}</h2>
          </div>
          <div className="cards-wrapper">
            <div className="card">
              <img className="logo" src={asdsSenegal} alt="asds-senegal-logo" />
              <p className="item-title">asds Senegal</p>
            </div>
            <div className="card">
              <img className="logo" src={balbus} alt="balbus-logo" />
              <p className="item-title">Balbus</p>
            </div>
            <div className="card">
              <img className="logo" src={beseda} alt="beseda-logo" />
              <p className="item-title">Beseda</p>
            </div>
            <div className="card">
              <img
                className="logo"
                src={formaKumanovo}
                alt="forma-kumanovo-logo"
              />
              <p className="item-title">Forma Kumanovo</p>
            </div>
            <div className="card">
              <img className="logo" src={pucaCerep} alt="puca=cerep-logo" />
              <p className="item-title">Puca Cerep</p>
            </div>
            <div className="card">
              <img className="logo" src={qrec} alt="qrec-logo" />
              <p className="item-title">Qrec</p>
            </div>
            <div className="card">
              <img
                className="logo"
                src={tuningSlavia}
                alt="tuning-slavia-logo"
              />
              <p className="item-title">Tuning Slavia</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
