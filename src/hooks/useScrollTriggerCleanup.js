import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollTriggerCleanup() {
  const location = useLocation();
  const previousPath = useRef(location.pathname); // стартува со првиот pathname

  useEffect(() => {
    // Ако е прв load, само сетирај path, не чисти
    if (previousPath.current === location.pathname) return;

    // cleanup само кога pathname се менува
    ScrollTrigger.getAll().forEach((t) => t.kill(true));
    gsap.globalTimeline.clear();

    // сетирај нов previous
    previousPath.current = location.pathname;
  }, [location.pathname]);
}
