// Styles
import "./styles/App.css";

// Components
import AllowVoiceSection from "./components/AllowVoice";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import LongWaySection from "./components/LongWaySection";
import MouseFollower from "./components/MouseFollower";

// React
import { useState, useEffect } from "react";

// Gsap
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function App() {
  const [hideAllowVoice, setHideAllowVoice] = useState(false); // default false
  // For If website loaded
  const [isLoaded, setIsLoaded] = useState(false); // default false

  // For Loader Animation is Done
  const [loaderAnimationDone, setLoaderAnimationDone] = useState(false);

  const [hideHeroSection, setHideHeroSection] = useState(false);

  const scrollSmoother = ScrollSmoother.create({
    smooth: 0.6,
    effects: true,
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

  // ----------------------------------------------

  return (
    <>
      <MouseFollower />
      <Loader isAnimationEnd={setLoaderAnimationDone} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="overflow-hidden">
            {!hideAllowVoice && isLoaded && loaderAnimationDone && (
              <AllowVoiceSection hideMe={setHideAllowVoice} />
            )}
            {hideAllowVoice && (
              <HeroSection
                scrollSmoother={scrollSmoother}
                hideMe={setHideHeroSection}
              />
            )}
            {hideHeroSection && (
              <LongWaySection scrollSmoother={scrollSmoother} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
