// Gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

// Import Imgs

import shockedDog from "../assets/imgs/bg/shocked.png";
import happyDog from "../assets/imgs/bg/happy.png";

export default function MouseFollower() {
  const dogRef = useRef(null);
  const [shownDog, setShownDog] = useState(true);
  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  useGSAP(() => {
    let xQuick = gsap.quickTo(dogRef.current, "x", {
      duration: 0.8,
      ease: "power3",
    });
    let yQuick = gsap.quickTo(dogRef.current, "y", {
      duration: 0.8,
      ease: "power3",
    });

    const onMove = (e) => {
      xQuick(e.clientX);
      yQuick(e.clientY);

      const distance = Math.hypot(e.clientX - center.x, e.clientY - center.y);

      if (distance > 450) {
        setShownDog(false);
      } else {
        setShownDog(true);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  });
  return (
    <div
      ref={dogRef}
      className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-99"
      style={{
        backgroundImage: `url(${shownDog})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {shownDog && <img src={happyDog} alt="img" className="w-full h-full" />}
      {!shownDog && (
        <img src={shockedDog} alt="img" className="w-full h-full" />
      )}
    </div>
  );
}
