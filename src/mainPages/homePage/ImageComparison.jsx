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

  // Втората слика
  const rawOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const rawScale2 = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const opacity2 = useSpring(rawOpacity2, { stiffness: 80, damping: 20 });
  const scale2 = useSpring(rawScale2, { stiffness: 80, damping: 20 });

  return (
    <>
      <section className="panel">
        <motion.div
          className="reveal-text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>Some text about logo and beginning of the AvticikiBre</p>
        </motion.div>
      </section>

      <div ref={ref} className="container">
        <motion.img
          src={back1}
          alt="background"
          className="bg-image"
          style={{ opacity: opacity1, scale: scale1 }}
        />
        <motion.img
          src={back2}
          alt="foreground"
          className="fg-image"
          style={{ opacity: opacity2, scale: scale2 }}
        />
      </div>
    </>
  );
}
