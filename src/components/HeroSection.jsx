// Gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

// Voice
import voice3 from "../assets/voice/3.mp3";
import voice3_1 from "../assets/voice/3.1.mp3";

// Imgs
import BgImg1 from "../assets/imgs/3d/Backpack (no shadow).png";
import BgImg2 from "../assets/imgs/3d/Coin.png";
import BgImg3 from "../assets/imgs/3d/Notebook.png";
import BgImg4 from "../assets/imgs/3d/Pineapple.png";

import { useRef } from "react";

export default function HeroSection({ scrollSmoother, hideMe }) {
  const heroSectionRef = useRef(null);
  const voiceLine3 = new Audio(voice3);
  const voiceLine3_1 = new Audio(voice3_1);
  // Stop Scroll

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "elastic",
    });

    // Add Delay For Section
    tl.to(".bg-img", {
      delay: 1,
      onStart: () => {
        scrollSmoother.paused(true);
      },
    });
    const heroText = gsap.utils.toArray(".hero-text");
    heroText.forEach((text) => {
      const splitText = SplitText.create(text, { type: "chars" });
      tl.from(
        splitText.chars,
        {
          rotate: 45,
          y: 50,
          opacity: 0,
          stagger: 0.1,
        },
        0,
      );
    });
    tl.from(".bg-img", {
      x: 100,
      opacity: 0,
      stagger: 0.3,
    });

    // Move Imgs While Mouse Move
    const bgImgs = gsap.utils.toArray(".bg-img");
    const setters = bgImgs.map((img, i) => {
      return {
        x: gsap.quickTo(img, "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(img, "y", { duration: 0.6, ease: "power3" }),
        depth: (i + 1) * 15,
      };
    });

    heroSectionRef.current.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setters.forEach(({ x: setX, y: setY, depth }) => {
        setX(x * depth);
        setY(y * depth);
      });
    });

    tl.to(".drop-item", {
      delay: 0.5,
      physics2D: {
        velocity: 100,
        angle: -180,
        gravity: 400,
      },
    });
    tl.to(".rotated-item", {
      delay: 0.5,
      rotate: 10,
      onComplete: () => {
        setTimeout(() => {
          voiceLine3.play();
        }, 1000);
        setTimeout(() => {
          voiceLine3_1.play();
        }, 20000);
      },
      // Show Long Way Section
      onStart: () => {
        hideMe(true);
      },
    });

    // Start Scrolling After Finish All Voice Lines
    tl.to(".hero-section", {
      delay: 34.5,
      duration: 2,
      xPercent: 100,

      onComplete: () => {
        scrollSmoother.paused(false);
        document.body.style.overflow = "auto";
      },
    });
  });

  return (
    <div
      ref={heroSectionRef}
      className="hero-section z-20 relative w-full h-screen bg-[#ebe8d5] flex items-center justify-center flex-col font-bold"
    >
      <div className="flex items-center gap-5">
        <span className="hero-text text-lg lg:text-6xl">WE DON't WRITE</span>
        <img src={BgImg1} alt="bg1" className="bg-img w-18 lg:w-30 " />
      </div>
      <div className="flex items-center gap-5 max-md:m-20">
        <img src={BgImg2} alt="bg2" className="bg-img w-20 lg:w-40" />
        <span className="hero-text rotated-item text-2xl lg:text-[250px] text-[#d63838]">
          CODE
        </span>
      </div>
      <div className="flex items-center gap-5 max-md:m-20">
        <span className="hero-text drop-item lg:text-6xl max-md:-mt-20">
          WE CREATE
        </span>
        <img src={BgImg4} alt="bg4" className="bg-img w-15 lg:w-20 " />
      </div>
      <div className="flex items-center gap-5 max-md:m-20">
        <img src={BgImg3} alt="bg3" className="bg-img  w-20 lg:w-40" />
        <span className="hero-text text-2xl lg:text-[250px] text-[#d63838]">
          ART
        </span>
      </div>
    </div>
  );
}
