import { useEffect, useRef, useState } from "react";
import "./ScrollCover.css";

export default function ScrollCover() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [active, setActive] = useState(false);

 

   useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!sectionRef.current || !imageRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // 👉 mobile check
    const isMobile = windowWidth <= 768;

    // дали сме во ScrollCover
    const isActive =
      rect.top <= 0 && rect.bottom >= windowHeight;

    setActive(isActive);

    const scrollProgress = Math.min(
      Math.max(-rect.top / (rect.height - windowHeight), 0),
      1
    );

    // 👇 САМО ОВА Е РАЗЛИЧНО
    const minSize = isMobile ? 260 : 350;

    const maxWidth = windowWidth;
    const maxHeight = windowHeight;

    const newWidth = minSize + (maxWidth - minSize) * scrollProgress;
    const newHeight = minSize + (maxHeight - minSize) * scrollProgress;

    imageRef.current.style.width = `${newWidth}px`;
    imageRef.current.style.height = `${newHeight}px`;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <>
      {active && (
        <>
          <div className="text-top">PERFORMANCE</div>
          
        </>
      )}

      <section ref={sectionRef} className="scroll-section-car">
        <div className="image-container-car">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car"
          />
        </div>
      </section>
    </>
  );
}
