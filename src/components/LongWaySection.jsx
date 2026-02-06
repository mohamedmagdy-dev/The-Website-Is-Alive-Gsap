// Gsap
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

// React
import { useRef, useState } from "react";
// Imgs
import cardImg1 from "../assets/imgs/bg/Project-f1.BXJzh_3J_3nr1X.webp";
import cardImg2 from "../assets/imgs/bg/Project-harpie.BJnGIMm3_1SiYxe.webp";
import rocket from "../assets/imgs/3d/rocket.png";
import person from "../assets/imgs/3d/person.png";

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
        if (speed >= 5000 && !isFastMode.current) {
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
              setTimeout(() => {
                setToggleNewItems(true);
              }, 2000);
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
      className="LongWaySection -mt-[100vh] min-h-screen bg-[#272c33]"
      style={{ background: toggleNewItems ? "#c7f2d3" : "" }}
    >
      {toggleLongWayCards && (
        <>
          <h2 className="text-2xl lg:text-5xl text-center mb-20 font-bold text-[#f0edda] p-20">
            A website without animation <br /> is like a party without an
            invitation.
          </h2>

          <div className="flex relative flex-col p-20 text-center">
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="right" />
            <Card src={cardImg2} title="A New Look for Safety" dir="left" />
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="right" />
            <Card src={cardImg2} title="A New Look for Safety" dir="left" />
            <Card src={cardImg2} title="A New Look for  Safety" dir="right" />
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="left" />
            <Card src={cardImg2} title="A New Look for Safety" dir="right" />
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="left" />
            <Card src={cardImg2} title="A New Look for Safety" dir="right" />
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="left" />
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="right" />
            <Card src={cardImg2} title="A New Look for Safety" dir="left" />
            <Card src={cardImg1} title="Formula 1 Las Vegas" dir="right" />
            <Card src={cardImg2} title="A New Look for Safety" dir="left" />
          </div>
        </>
      )}

      {toggleNewItems && <NewItems toggleNewItems={toggleNewItems} />}
    </div>
  );
}

function NewItems({ toggleNewItems }) {
  useGSAP(() => {
    if (toggleNewItems) {
      const tl = gsap.timeline();
      // First New Items Animation
      tl.from(".new-items .new-items-1 p span", {
        duration: 1.5,
        opacity: 0,
        rotate: 10,
        x: 25,
        y: 100,
        stagger: 0.3,
      });
      tl.to(".new-items .new-items-1", {
        autoAlpha: 0,
        delay: 1,
        duration: 1,
        xPercent: -300,
        onComplete: () => {
          gsap.set(".new-items .new-items-2", { display: "block" });
        },
      });

      // Second New Items Animation
      tl.from(".new-items .new-items-2 img", {
        duration: 1.8,
        opacity: 0,
        y: 80,
        ease: "elastic",
      });
      tl.from(
        ".new-items .new-items-2 span",
        {
          duration: 1.5,
          opacity: 0,
          y: 80,
          scale: 0,
          stagger: 0.2,
          ease: "elastic",
        },
        "<",
      );
      tl.to(".new-items .new-items-2 img", {
        delay: 1,
        duration: 0.8,
        y: -120,
        ease: "elastic",
      });
      tl.to(
        ".new-items .new-items-2",
        {
          autoAlpha: 0,
          delay: 1,
          duration: 1,
          xPercent: -300,
          ease: "elastic",
          onComplete: () => {
            gsap.set(".new-items .new-items-3", { display: "block" });
          },
        },
        "<",
      );

      // Third New Items Animation
      tl.from(".new-items .new-items-3 span", {
        duration: 1.8,
        opacity: 0,
        y: 80,
        stagger: 0.4,
        ease: "elastic",
      });
      tl.to(".new-items .new-items-3 span:first-child", {
        delay: 0.5,
        rotate: 45,
        ease: "elastic",
        scale: 0.5,
      });
      tl.to(
        ".new-items .new-items-3 span:last-child",
        {
          delay: 0.5,
          rotate: -45,
          ease: "elastic",
          scale: 0.5,
        },
        "<",
      );
      tl.to(".new-items .new-items-3", {
        autoAlpha: 0,
        delay: 1,
        duration: 3,
        xPercent: -300,
        ease: "power",
        onComplete: () => {
          gsap.set(".new-items .new-items-4", { display: "block" });
        },
      });

      // Forth New Items Animation
      tl.to(".new-items ", {
        backgroundColor: "#41caf0",
        duration: 1,
        ease: "power",
      });
      tl.to(".new-items .new-items-4 span", {
        x: 40,
        y: 40,
        ease: "power",
      });
      tl.to(".new-items .new-items-4 span", {
        x: -40,
        y: -40,
        ease: "power",
        yoyo: true,
        repeat: 4,
      });
      tl.to(".new-items .new-items-4", {
        autoAlpha: 0,
        delay: 1,
        duration: 3,
        yPercent: -300,
        ease: "power",
        onComplete: () => {
          gsap.set(".new-items .new-items-5", { display: "block" });
        },
      });

      // Fifth New Items Animation
      tl.to(".new-items .new-items-5 img", {
        delay: 1,
        duration: 0.8,
        y: -80,
        ease: "elastic",
      });
      tl.to(".new-items .new-items-5 img", {
        delay: 1,
        duration: 0.8,
        y: 0,
        ease: "elastic",
      });
      tl.to(
        ".new-items .new-items-5 ",
        {
          duration: 3,
          yPercent: 300,
          // xPercent: 300,
          ease: "bounce",
        },
        "<",
      );

      tl.to(
        ".new-items",
        {
          backgroundColor: "#d1bce3",
          duration: 1,
        },
        "<",
      );
    }
  });

  return (
    <div className="new-items relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* First Bulk */}
      <div className="absolute text-center new-items-1">
        <p className="relative">
          <span className="lg:text-[200px] text-4xl font-bold text-[#283982]">
            Web
          </span>
          <span className="pl-10 pr-10 pt-2 pb-2 absolute -left-20 top-[40%] rotate-2 rounded-full bg-white text-lg text-[#283982]">
            Creative
          </span>
        </p>
        <p className="-mt-20 relative">
          <span className="lg:text-[200px] text-4xl font-bold text-[#283982]">
            Toso
          </span>
          <span className="pl-10 pr-10 pt-2 pb-2 absolute -right-20 top-[40%] -rotate-2 rounded-full bg-white text-lg text-[#283982]">
            Instructor
          </span>
        </p>
      </div>

      <div className="absolute hidden text-center new-items-2">
        <span className="lg:text-7xl text-2xl block font-bold text-[#283982]">
          Not everything is ready
        </span>

        <span className="lg:text-7xl text-2xl block font-bold mt-5 text-[#283982]">
          when you are
        </span>
        <div className="flex justify-center">
          <img src={rocket} alt="rocket" className="w-40" />
        </div>
        <span className="lg:text-7xl text-2xl block font-bold text-[#283982]">
          Waiting is part
        </span>
        <span className="lg:text-7xl text-2xl block font-bold  mt-5 text-[#283982]">
          of the experience
        </span>
      </div>

      <div className="absolute hidden text-center new-items-3">
        <span className="lg:text-7xl text-2xl block font-bold text-white">
          Some things need time to exist
        </span>
        <span className="lg:text-7xl text-2xl block font-bold text-[#283982]">
          Some things need time to exist
        </span>
      </div>
      <div className="absolute hidden text-center new-items-4">
        <span className="lg:text-7xl text-3xl block font-bold text-white">
          " Be Careful "
        </span>
        <span className="lg:text-3xl text-2xl mt-5 block font-bold text-[#283982]">
          Control breaks <br /> what trust builds
        </span>
      </div>
      <div className="absolute hidden text-center new-items-5">
        <div className="flex justify-center">
          <img src={person} alt="person" className="w-40" />
        </div>
        <span className="lg:text-7xl text-2xl block font-bold  mt-5 text-white">
          Still rendering
        </span>
        <span className="lg:text-7xl text-2xl block font-bold text-[#283982]">
          Give it time
        </span>

        <span className="lg:text-7xl text-2xl block font-bold mt-5 text-white">
          Wait gently
        </span>

        <span className="lg:text-7xl text-2xl block font-bold text-[#283982]">
          Almost there.
        </span>
      </div>
    </div>
  );
}

function Card({ src, title, dir }) {
  return (
    <div
      className="card relative w-fit mt-10 z-10"
      style={dir === "right" ? { alignSelf: "end" } : {}}
    >
      <div className="lg:w-100 overflow-hidden">
        <img
          src={src}
          alt="img"
          className="w-full duration-500 hover:scale-[1.2] rounded-2xl"
        />
      </div>
      <h3 className="font-bold text-lg lg:text-4xl mt-5 text-white">{title}</h3>
    </div>
  );
}
