import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import "./ImageComparison.css";
import back1 from "../../images/img22.png";
import back2 from "../../images/img11.png";

export default function ImageComparison() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rawOpacity1 = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const rawScale1 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const opacity1 = useSpring(rawOpacity1, { stiffness: 80, damping: 20 });
  const scale1 = useSpring(rawScale1, { stiffness: 80, damping: 20 });

  const rawOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const rawScale2 = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const opacity2 = useSpring(rawOpacity2, { stiffness: 80, damping: 20 });
  const scale2 = useSpring(rawScale2, { stiffness: 80, damping: 20 });

  return (
    <>
    

      <div ref={ref} className="container23">
        <motion.img
          src={back1}
          alt="background"
          className="bg-image23"
          style={{ opacity: opacity1, scale: scale1 }}
        />
        <motion.img
          src={back2}
          alt="foreground"
          className="fg-image23"
          style={{ opacity: opacity2, scale: scale2 }}
        />
      </div>
    </>
  );
}
