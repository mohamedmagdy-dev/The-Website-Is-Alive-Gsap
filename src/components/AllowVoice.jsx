// Gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// React
import { useRef } from "react";

// Voices
import voice1 from "../assets/voice/1.mp3";
import voice1_1 from "../assets/voice/1.1.mp3";
import voice1_2 from "../assets/voice/1.2.mp3";
import voice1_3 from "../assets/voice/1.3.mp3";
import voice2 from "../assets/voice/2.mp3";

// Video
import MoveSection from "../assets/video/SectionRemover.mp4";

export default function AllowVoice({ hideMe }) {
  // Create Section Voice

  // Voice 1
  const voiceLine1 = new Audio(voice1);
  const voiceLine1_1 = new Audio(voice1_1);
  const voiceLine1_2 = new Audio(voice1_2);
  const voiceLine1_3 = new Audio(voice1_3);
  // Voice 2
  const voiceLine2 = new Audio(voice2);

  //
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const allowVoiceText = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      // Intro Text Animation
      const tl = gsap.timeline({
        ease: "none",
      });

      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 3.5,
        text: "Oh… someone is here",
      });
      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 1.5,
        text: "Hello......",
      });
      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 1.5,
        text: "Can you hear me?",
      });
      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 1.5,
        text: "No ????",
      });
      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 1.5,

        text: "Like How",
      });
      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 1.5,
        text: "Oh I remembered these new browser policies.",
      });
      tl.to(allowVoiceText.current, {
        duration: 1.5,
        delay: 1.5,
        text: "Please allow me to speak.",
      });

      // Show Speak button
      tl.to(
        ".speak-btn",
        {
          opacity: 1,
          delay: 1.5,
          visibility: "visible",
          duration: 1,
          ease: "power4.out",
          onStart: () => {
            // Bg Text Animation
            const bgText = gsap.utils.toArray(".bg-text");

            bgText.forEach((text) => {
              gsap.set(text, { left: `random(0,${screenWidth})` });
              gsap.to(text, {
                duration: 2,
                delay: "random(0.5,1)",
                rotate: "random(0,180)",
                ease: "none",
                y: `${screenHeight + 400}px`,
                repeat: -1,
                // left: `random(0,${screenWidth})`,
                yoyo: true,
              });
            });
          },
        },
        "<",
      );

      document.querySelector(".speak-btn").onclick = (e) => {
        // Start Voice Over 1
        voiceLine1.play();
        // Hide Speak Button
        e.target.style.display = "none";

        // Start Voice Over 1.1
        tl.to(".speak-btn", {
          delay: 12,
          onStart: () => {
            voiceLine1_1.play();
          },
          onComplete: () => {
            // Start Voice Over 1.2
            setTimeout(() => {
              voiceLine1_2.play();
            }, 11000);
          },
        });

        // Show Fake Go Button
        tl.to(".fake-go-btn", {
          ease: "power4.out",
          autoAlpha: 1,
          delay: 17,
        });
      };

      document.querySelector(".fake-go-btn").onclick = () => {
        // Start Voice Over 1.3
        setTimeout(() => {
          voiceLine1_3.play();
        }, 3000);
        // Hide Fake Button
        tl.to(".fake-go-btn", {
          delay: 1,
          ease: "power4.out",
          autoAlpha: 0,
        });
        // Show Real Go Button
        tl.to(".real-go-btn", {
          delay: 8.5,
          ease: "power4.out",
          autoAlpha: 1,
          onComplete: () => {
            document.querySelector(".real-go-btn").onclick = (e) => {
              // Start Voice Over 2
              setTimeout(() => {
                voiceLine2.play();
              }, 1500);
              e.target.style.display = "none";
              // Here Animation Of Moving Loader
              tl.to(".allow-voice-section", {

                xPercent: 100,
                duration: 3,
                delay: 4,
              });

              tl.to(".move-section", {
                xPercent: 100,
                duration: 1,
                onComplete: () => {
                  hideMe(true);
                },
              });
            };
          },
        });
      };
    });
  });

  return (
    <div className="allow-voice-section w-screen h-screen relative flex flex-col items-center justify-center text-white ">
      {/* Bg Text */}
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      <BgText />
      {/* Bg Text */}
      {/* Talk Text */}
      <span
        ref={allowVoiceText}
        className=" text-6xl select-none text-center  text-shadow-sm text-shadow-[#27a7e3]"
      ></span>
      {/* Speak button */}
      <button
        className="speak-btn shadow-lg z-30 opacity-0 invisible mt-10 pl-5 pr-5 pt-2 pb-2 bg-white text-black text-3xl cursor-pointer rounded-md select-none"
        style={{ boxShadow: "rgb(39, 167, 227) 3px 3px 0px" }}
      >
        speak
      </button>
      {/* Fake Go button */}
      <button
        className="fake-go-btn mt-10 pl-5 pr-5 pt-2 pb-2 opacity-0 invisible absolute top-5 right-5 bg-white text-black text-3xl cursor-pointer rounded-md select-none"
        style={{ boxShadow: "rgb(39, 167, 227) 3px 3px 0px" }}
      >
        Go
      </button>
      {/* Real Go button */}
      <button
        className="real-go-btn opacity-0 invisible mt-10 pl-5 pr-5 pt-2 pb-2 absolute top-5 left-5 bg-white text-black text-3xl cursor-pointer rounded-md select-none"
        style={{ boxShadow: "rgb(39, 167, 227) 3px 3px 0px" }}
      >
        Go
      </button>
      {/* Section Mover */}
      <div className="move-section min-w-screen h-screen absolute top-0 left-0 -translate-x-full aspect-video">
        <video src={MoveSection} loop autoPlay muted></video>
      </div>
    </div>
  );
}

function BgText() {
  return (
    <span className="bg-text text-lg font-bold absolute -top-100 select-none text-nowrap text-shadow-2xs text-shadow-[#27a7e3]">
      let me Talk
    </span>
  );
}
