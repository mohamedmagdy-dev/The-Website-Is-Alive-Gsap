// Styles
import "./styles/App.css";

// Components
import AllowVoiceSection from "./components/AllowVoice";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import LongWaySection from "./components/LongWaySection";
import MouseFollower from "./components/MouseFollower";

// Components Real Work

import Header from "./components/Header";
import HeroSection2 from "./components/HeroSection2";
import MouseVideoSection from "./components/MouseVideoSection";
import AboutMouseSection from "./components/AboutMouse";
import GhubSection from "./components/GhubSection";
import Quote from "./components/Quote";
import Outro from "./components/Outro";

// React
import { useState, useEffect } from "react";

// Gsap
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const [hideAllowVoice, setHideAllowVoice] = useState(false); // default false
  // For If website loaded
  const [isLoaded, setIsLoaded] = useState(false); // default false

  // For Loader Animation is Done
  const [loaderAnimationDone, setLoaderAnimationDone] = useState(false);

  // Hide Hero Section
  const [hideHeroSection, setHideHeroSection] = useState(false);

  // Hide long way Section
  const [hideLongSection, setHideLongSection] = useState(false);

  // Show Real Work
  const [showRealWork, setShowRealWork] = useState(false);

  const scrollSmoother = ScrollSmoother.create({
    smooth: 0.6,
    effects: true,
    smoothTouch: 0.1,
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  });

  // Website Loading Check
  useEffect(() => {
    const onLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Hide Loader After WEbsite Loading
  useEffect(() => {
    if (isLoaded && loaderAnimationDone) {
      gsap.to(".loader", { autoAlpha: 0, duration: 1, delay: 1 });
    }
  }, [isLoaded, loaderAnimationDone]);

  return (
    <>
      <MouseFollower />
      <Loader isAnimationEnd={setLoaderAnimationDone} />
      {/* Real Work Header */}
      {showRealWork && hideLongSection && <Header />}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="overflow-hidden">
            {!hideAllowVoice && isLoaded && loaderAnimationDone && (
              <AllowVoiceSection hideMe={setHideAllowVoice} />
            )}
            {hideAllowVoice && !hideLongSection && (
              <HeroSection
                scrollSmoother={scrollSmoother}
                hideMe={setHideHeroSection}
              />
            )}
            {hideHeroSection && !hideLongSection && (
              <LongWaySection
                scrollSmoother={scrollSmoother}
                hideMe={setHideLongSection}
                showRealWorkSection={setShowRealWork}
              />
            )}

            {/* Real Work */}
            {showRealWork && hideLongSection && (
              <RealWorkSection showRealWork={showRealWork} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function RealWorkSection({ showRealWork }) {
  // Handel Hide Header When Scroll
  useGSAP(() => {
    if (showRealWork) {
      let showHeader = gsap
        .from("header", {
          yPercent: -100,
          paused: true,
          duration: 0.3,
          ease: "power2.out",
        })
        .progress(1);

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) {
            showHeader.play();
          } else {
            showHeader.reverse();
          }
        },
      });
    }
  });

  // Handel website Into animation
  useGSAP(() => {
    if (showRealWork) {
      const introTl = gsap.timeline();

      // Hide Loader After Page Loading
      introTl.to(".loader", {
        duration: 1,
        autoAlpha: 0,
        delay: 2,
      });

      // Header
      introTl.from("header img", {
        x: -200,
      });
      introTl.from(
        "header a",
        {
          x: 140,
        },
        "<",
      );

      // Hero Section Text
      const splitText = SplitText.create(".hero-section h1", {
        type: "chars",
        charsClass: "hero-char",
        smartWrap: true,
      });

      introTl.from(
        splitText.chars,
        {
          y: 200,
          opacity: 0,
          stagger: 0.1,
        },
        ">-20%",
      );

      introTl.to(".hero-section .mouse-img ", {
        y: -90,
      });

      introTl.from(
        ".hero-section p",
        {
          opacity: 0,
        },
        "<20%",
      );
    }
  });

  useGSAP(() => {
    if (showRealWork) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=8000px",
        },
      });

      tl.to(".hero-section h1", {
        opacity: 0,
      });

      tl.to(
        ".hero-section .hero-text",
        {
          opacity: 0,
        },
        "<",
      );

      tl.to(".hero-section .mouse-img ", {
        y: -560,
        scale: 0.5,
      });

      tl.to(
        ".hero-section .blue-mouse-img",
        {
          x: -400,
        },
        "<",
      );

      tl.to(
        ".hero-section .black-mouse-img",
        {
          x: 400,
        },
        "<",
      );
    }
  });

  // Mouse Video Section
  useGSAP(() => {
    if (showRealWork) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".MouseVideoSection",
          start: "top top",
          end: "+=1000px",
          scrub: true,
          pin: true,
          ease: "power2.inOut",
        },
      });
      tl.to(".main-mouse-video", {
        filter: "blur(10px)",
        scale: 1.5,
      });
      tl.to(
        ".lightsycn-video-bg",
        {
          scale: 1,
          delay: 0.5,
        },
        "<5%",
      );
      tl.to(
        ".lightsycn-video",
        {
          scale: 1,
        },
        "<10%",
      );
    }
  });

  // About Mouse
  useGSAP(() => {
    if (showRealWork) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-mouse",
          start: "top bottom",
          end: "+=2000px",
          ease: "none",
        },
      });

      const splitText = SplitText.create(".about-mouse h1", { type: "chars" });
      tl.from(splitText.chars, {
        opacity: 0,
        x: -100,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: 0.3,
      });
      tl.to(".about-mouse img", {
        scale: 1,
        delay: 0.3,
      });

      tl.from(".about-mouse .left-side-info", {
        opacity: 0,
        x: -100,
        delay: 0.3,
        stagger: 0.3,
      });
      tl.from(
        ".about-mouse .right-side-info",
        {
          opacity: 0,
          x: 100,
          delay: 0.3,
          stagger: 0.3,
        },
        "<",
      );
    }
  });

  // G-hub Section
  useGSAP(() => {
    if (showRealWork) {
      const texts = gsap.utils.toArray(".G-hub-text");
      const cards = gsap.utils.toArray(".G-hub .card");

      const gHubTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".G-hub",
          end: `+=${texts.length * 4000}px`,
          pin: true,
          scrub: 1,
        },
      });

      texts.forEach((text, i) => {
        gHubTl.to(text, {
          display: "block",
          autoAlpha: 1,
          x: i % 2 == 0 ? -70 : 70,
          duration: 1,
        });

        if (i !== texts.length - 1) {
          gHubTl.to(text, {
            display: "none",
            autoAlpha: 0,
            duration: 0.3,
          });
        }
      });

      gHubTl.to(".G-hub-overlay", {
        xPercent: -100,
      });

      cards.forEach((card, i) => {
        const cardImg = card.querySelector(".card-img");
        const cardInfo = card.querySelector(".info");

        if (i == cards.length - 1) {
          gHubTl.to(card, {
            autoAlpha: 1,
          });
        } else {
          gHubTl.to(card, {
            opacity: 1,
            duration: 0.3,
          });
          gHubTl.to(cardImg, {
            xPercent: 300,
            duration: 1,
          });
          gHubTl.to(
            cardInfo,
            {
              xPercent: -300,
              duration: 1,
            },
            "<",
          );
        }
      });
    }
  });

  // Quote Section
  useGSAP(() => {
    if (showRealWork) {
      const splitText = SplitText.create(".Quote p", { type: "chars" });
      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: ".Quote",
          start: "top top",
        },
        y: 100,
        duration: 1,
        opacity: 0,
        rotate: 90,
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    }
  });
  return (
    <>
      <HeroSection2 />
      <MouseVideoSection />
      <AboutMouseSection />
      <GhubSection />
      <Quote />
      <Outro />
    </>
  );
}
