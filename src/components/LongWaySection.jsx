// Gsap
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

// React
import { useRef, useState } from "react";
// Imgs
import cardImg1 from "../assets/imgs/bg/Project-f1.BXJzh_3J_3nr1X.webp";
import cardImg2 from "../assets/imgs/bg/Project-harpie.BJnGIMm3_1SiYxe.webp";

// Voice Lines And Sound
import BreakSound from "../assets/sound/freesound_community-brake-6315.mp3";
import voice3_2 from "../assets/voice/3.2.mp3";
import voice3_3 from "../assets/voice/3.3.mp3";
import voice3_4 from "../assets/voice/3.4.mp3";
import voice3_5 from "../assets/voice/3.5.mp3";
import voice3_6 from "../assets/voice/3.6.mp3";

export default function LongWaySection({ scrollSmoother }) {
  // Voice Lines And Sound
  const BreakSoundEl = new Audio(BreakSound);
  const voiceLine3_2 = new Audio(voice3_2);
  const voiceLine3_3 = new Audio(voice3_3);
  const voiceLine3_4 = new Audio(voice3_4);
  const voiceLine3_5 = new Audio(voice3_5);
  const voiceLine3_6 = new Audio(voice3_6);

  //
  const LongWaySection = useRef(null);
  const isFastMode = useRef(false);
  const slowAnimationCreated = useRef(false);

  const [toggleLongWayCards, setToggleLongWayCards] = useState(true);
  const [toggleNewItems, setToggleNewItems] = useState(false);

  useGSAP(() => {
    const observer = Observer.create({
      target: window,
      type: "wheel,touch",
      onChangeY(self) {
        const speed = Math.abs(self.velocityY);

        // ===== FAST MODE =====
        if (speed >= 4000 && !isFastMode.current) {
          isFastMode.current = true;

          console.log("FAST MODE");

          BreakSoundEl.play();
          scrollSmoother.paused(true);

          const tl = gsap.timeline();
          // Play Voice Line 3.2
          tl.to(".LongWaySection", {
            delay: 0.5,
            duration: 4.5,
            onStart: () => {
              voiceLine3_2.play();
            },
          });
          // Play Voice Line 3.3

          tl.to(".LongWaySection", {
            duration: 1.5,
            onStart: () => {
              voiceLine3_3.play();
              scrollSmoother.scrollTo(LongWaySection.current.scrollHeight);
            },
          });

          // Play Voice Line 3.4
          tl.to(".LongWaySection", {
            duration: 5.5,
            onStart: () => {
              voiceLine3_4.play();
            },
          });

          // Play Voice Line 3.5
          tl.to(".LongWaySection", {
            duration: 5.5,
            onStart: () => {
              voiceLine3_5.play();
            },
          });
          setTimeout(() => {
            scrollSmoother.scrollTo(-LongWaySection.current.scrollHeight);
          }, 14000);

          // Play Voice Line 3.6
          tl.to(".LongWaySection", {
            duration: 2.5,
            onStart: () => {
              voiceLine3_6.play();
            },
            onComplete: () => {
              setToggleLongWayCards(false);
              setToggleNewItems(true);
            },
          });
          return;
        }

        // ===== SLOW MODE =====
        if (!isFastMode.current && !slowAnimationCreated.current) {
          slowAnimationCreated.current = true;

          console.log("SLOW MODE");

          gsap.to(".card", {
            x: 50,
            y: 50,
            stagger: 0.3,
            scrollTrigger: {
              trigger: ".LongWaySection",
              start: "top top",
              scrub: true,
            },
          });
        }
      },
    });
    return () => observer.kill();
  });

  return (
    <div
      ref={LongWaySection}
      className="LongWaySection  min-h-screen bg-[#272c33] p-10 "
    >
      <h2 className="text-5xl text-center mb-20 font-bold text-[#f0edda]">
        A website without animation <br /> is like a party without an
        invitation.
      </h2>
      {toggleLongWayCards && (
        <div className="flex relative flex-col">
          <Card src={cardImg1} title="Formula 1 Las Vegas" dir="right" />
          <Card src={cardImg2} title="A New Look for Web3 Safety" dir="left" />
          <Card src={cardImg1} title="Formula 1 Las Vegas" dir="right" />
          <Card src={cardImg2} title="A New Look for Web3 Safety" dir="left" />
          <Card src={cardImg2} title="A New Look for Web3 Safety" dir="right" />
          <Card src={cardImg1} title="Formula 1 Las Vegas" dir="left" />
          <Card src={cardImg2} title="A New Look for Web3 Safety" dir="right" />
          <Card src={cardImg1} title="Formula 1 Las Vegas" dir="left" />
          <Card src={cardImg2} title="A New Look for Web3 Safety" dir="right" />
          <Card src={cardImg1} title="Formula 1 Las Vegas" dir="left" />
        </div>
      )}

      {toggleNewItems && <NewItems />}
    </div>
  );
}

function NewItems() {
  return <div> Hello I'm new one </div>;
}

function Card({ src, title, dir }) {
  return (
    <div
      className="card relative w-fit"
      style={dir === "right" ? { alignSelf: "end" } : {}}
    >
      <div className="lg:w-100 overflow-hidden">
        <img
          src={src}
          alt="img"
          className="w-full duration-500 hover:scale-[1.2]"
        />
      </div>
      <h3 className="font-bold text-4xl mt-5 text-white">{title}</h3>
    </div>
  );
}
