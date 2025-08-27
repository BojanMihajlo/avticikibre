import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImageComparison.css";
import img1 from "../../images/img22.png";
import img2 from "../../images/img11.png";
import { motion, useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ImageComparison = () => {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {  margin: '-100px' }); // trigger when in view

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: () => "+=" + section.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "none" },
    });

    const afterImage = section.querySelector(".afterImage");
    const afterImg = afterImage.querySelector("img");

    tl.fromTo(afterImage, { xPercent: 100, x: 0 }, { xPercent: 0 }).fromTo(
      afterImg,
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      0
    );

    // Cleanup on unmount
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <section className="main">

       <section className="panel">
         <motion.div
      ref={ref}
      className="reveal-text"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.8,  }}
    >
          
          <p>Some text about logo and begining of the AvticikiBre</p>
        
    </motion.div>
    </section>
    

        <section className="comparisonSection" ref={sectionRef}>
          <div className="comparisonImage beforeImage">
            <img src={img1} alt="Before" />
          </div>
          <div className="comparisonImage afterImage">
            <img src={img2} alt="After" />
          </div>
        </section>
      </section>
    </>
  );
};

export default ImageComparison;
