import g102TopWhiteImg from "../assets/g203-mouse-top-angle-white-gallery-1 (1).png";
import g102TopBlueImg from "../assets/logitech-g102-lightsync-rgb-6-gaming-mouse-blue.png";
import g102TopBlackImg from "../assets/g203-mouse-top-angle-black-gallery-1.png";

export default function HeroSection() {
  return (
    <div className="hero-section relative bg-[#f7f3eb] h-screen w-full">
      <h1 className="absolute text-[#a089e0] left-[50%] translate-x-[-50%] top-25 text-center text-7xl  lg:text-[150px] leading-none font-bold">
        READY TO <br /> PLAY
      </h1>
      <div className="mouse-img white-mouse-img w-100 lg:w-130 absolute z-10 -bottom-100 lg:-bottom-140 left-[50%] translate-x-[-50%] ">
        <img
          src={g102TopWhiteImg}
          alt="g102WhiteTopWhiteImg"
          className="w-full h-full"
        />
      </div>
      <div className="mouse-img blue-mouse-img  w-130 absolute max-md:hidden z-1 lg:-bottom-140 left-[50%] translate-x-[-50%] scale-0">
        <img
          src={g102TopBlueImg}
          alt="g102WhiteTopBlueImg"
          className="w-full h-full"
        />
      </div>

      <div className="mouse-img black-mouse-img w-130 absolute z-1 max-md:hidden lg:-bottom-140 left-[50%] translate-x-[-50%] scale-0">
        <img
          src={g102TopBlackImg}
          alt="g102WhiteTopBlackImg"
          className="w-full h-full"
        />
      </div>

      <div className="hero-text">
        <p className="absolute w-90 right-5  lg:right-50 bottom-90 lg:bottom-50 text-2xl  text-[#11255c]">
          Make the most of your game time with G203 gaming mouse available in a
          variety of vibrant colors desk.
        </p>
      </div>
    </div>
  );
}
