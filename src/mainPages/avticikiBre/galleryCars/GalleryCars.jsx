import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GalleryCars.css";
import car1 from "../../../images/avticikiBre-images/car1.JPG";
import car2 from "../../../images/avticikiBre-images/car2.JPG";
import car3 from "../../../images/avticikiBre-images/car3.JPG";
import car4 from "../../../images/avticikiBre-images/car4.JPG";
import car5 from "../../../images/avticikiBre-images/car5.JPG";
import car6 from "../../../images/avticikiBre-images/car6.JPG";
import car7 from "../../../images/avticikiBre-images/car7.JPG";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    img: { car1 },
    title: "1968 Dodge Charger",
  },
  {
    id: 2,
    img: { car2 },
    title: "Card 2",
  },
  {
    id: 3,
    img: { car3 },
    title: "Card 3",
  },
  {
    id: 4,
    img: { car4 },
    title: "Card 4",
  },
  {
    id: 5,
    img: { car5 },
    title: "Card 5",
  },
  {
    id: 6,
    img: { car6 },
    title: "Card 6",
  },
  {
    id: 7,
    img: { car7 },
    title: "Card 7",
  },
];

export default function GalleryCars() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".cards li");

    let iteration = 0;

    gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

    const spacing = 0.1;
    const snapTime = gsap.utils.snap(spacing);

    const animateFunc = (element) => {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
        0
      );
      return tl;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
    const playhead = { offset: 0 };

    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        let scroll = self.scroll();
        if (scroll > self.end - 1) {
          wrap(1, 2);
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 2);
        } else {
          scrub.vars.offset =
            (iteration + self.progress) * seamlessLoop.duration();
          scrub.invalidate().restart();
        }
      },
      end: "+=3000",
      pin: galleryRef.current,
      markers: false, // set to true for debugging
    });

    const progressToScroll = (progress) =>
      gsap.utils.clamp(
        1,
        trigger.end - 1,
        gsap.utils.wrap(0, 1, progress) * trigger.end
      );

    function wrap(iterationDelta, scrollTo) {
      iteration += iterationDelta;
      trigger.scroll(scrollTo);
      trigger.update();
    }

    function scrollToOffset(offset) {
      let snappedTime = snapTime(offset);
      let progress =
        (snappedTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();
      let scroll = progressToScroll(progress);
      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll);
      }
      trigger.scroll(scroll);
    }

    document
      .querySelector(".next")
      .addEventListener("click", () =>
        scrollToOffset(scrub.vars.offset + spacing)
      );
    document
      .querySelector(".prev")
      .addEventListener("click", () =>
        scrollToOffset(scrub.vars.offset - spacing)
      );

    return () => {
      trigger.kill();
      scrub.kill();
      seamlessLoop.kill();
    };
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <ul className="cards">
        {cardsData.map((card) => (
          <li key={card.id}>
            <div className="card-content">
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
}

// buildSeamlessLoop helper
function buildSeamlessLoop(items, spacing, animateFunc) {
  let rawSequence = gsap.timeline({ paused: true });
  let seamlessLoop = gsap.timeline({
    paused: true,
    repeat: -1,
    onRepeat() {
      this._time === this._dur && (this._tTime += this._dur - 0.01);
    },
    onReverseComplete() {
      this.totalTime(this.rawTime() + this.duration() * 100);
    },
  });

  let cycleDuration = spacing * items.length;
  let dur;

  items
    .concat(items)
    .concat(items)
    .forEach((item, i) => {
      let anim = animateFunc(items[i % items.length]);
      rawSequence.add(anim, i * spacing);
      dur || (dur = anim.duration());
    });

  seamlessLoop.fromTo(
    rawSequence,
    { time: cycleDuration + dur / 2 },
    { time: "+=" + cycleDuration, duration: cycleDuration, ease: "none" }
  );

  return seamlessLoop;
}
