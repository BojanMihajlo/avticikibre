import React from "react";
import "./Advert.css";
// import img1 from "../../images/colcar1.jpg";
// import img2 from "../../images/colcar2.jpg";
// import img3 from "../../images/colcar3.jpg";
// import img4 from "../../images/colcar4.jpg";
// import img5 from "../../images/colcar5.jpg";

// const testimonials = [
//   {
//     image: img1,
//     text: "Avtomakedonija",
//   },
//   {
//     image: img2,
//     text: "John S.",
//   },
//   {
//     image: img3,
//     text: "Maria K.",
//   },
//   {
//     image: img4,
//     text: "Alex R.",
//   },
//   {
//     image: img5,
//     text: "Linda T.",
//   },
// ];

const Advert = () => {
  return (
    <div className="advert">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={item.image}
                alt={item.text}
                className="testimonial-img"
              />
              <p className="testimonial-text">{item.text}</p>
            </div>
          ))} */}
          <h1>MESTO ZA REKLAMA----</h1> <h1>MESTO ZA REKLAMA</h1>
        </div>
      </div>
    </div>
  );
};

export default Advert;
