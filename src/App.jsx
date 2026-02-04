// Styles
import "./styles/App.css";

// Components
import AllowVoiceSection from "./components/AllowVoice";
import Loader from "./components/Loader";

// React
import { useState, useEffect } from "react";

// Gsap
import { gsap } from "gsap";

export default function App() {
  const [showAllowVoice, setShowAllowVoice] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loaderAnimationDone, setLoaderAnimationDone] = useState(false);
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
      <Loader isAnimationEnd={setLoaderAnimationDone} />
      <div className="overflow-hidden">
        {showAllowVoice && isLoaded && loaderAnimationDone && (
          <AllowVoiceSection hideMe={setShowAllowVoice} />
        )}
      </div>
    </>
  );
}
