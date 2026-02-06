import MouseBottomImg from "../assets/g203-mouse-bottom-angle-white-gallery-5.webp";

export default function AboutMouse() {
  return (
    <div className="about-mouse w-full h-screen min-h-screen flex items-center flex-col">
      <h1 className="font-bold text-4xl lg:text-8xl pt-30 pb-30  lg:pt-10 lg:pb-0  ">
        Logitech <span className="text-[#00b7fa]">G102</span>
      </h1>
      <div className="hidden lg:block lg:w-240 relative text-black">
        <span className="left-side-info absolute flex items-center justify-center gap-2 left-0 top-[50%]">
          <span className="text-[#00b7fa] font-semibold">
            Adjustable DPI: 200–8,000 DPI
          </span>
          <span className="block w-50 h-px bg-black"></span>
        </span>
        <span className="right-side-info absolute flex items-center justify-center gap-2 right-0 top-[40%]">
          <span className="block w-30 h-px bg-black"></span>
          <span className="text-[#00b7fa] font-semibold">
            6 programmable buttons
          </span>
        </span>
        <span className="left-side-info absolute flex items-center justify-center gap-2 left-10 top-[30%]">
          <span className="text-[#00b7fa] font-semibold">
            1000 Hz polling rate (1ms)
          </span>
          <span className="block w-50 h-px bg-black"></span>
        </span>
        <span className="right-side-info absolute flex items-center justify-center gap-2 right-0 top-[60%]">
          <span className="block w-50 h-px bg-black"></span>
          <span className="text-[#00b7fa] font-semibold">LIGHTSYNC RGB</span>
        </span>
        <span className="right-side-info absolute flex items-center justify-center gap-2  right-40 top-[10%]">
          <span className="block w-50 h-px bg-black"></span>
          <span className="text-[#00b7fa] font-semibold">Weight: ~85 g</span>
        </span>
        <img
          src={MouseBottomImg}
          alt="MouseBottomImg"
          className="w-full h-full scale-0"
        />
      </div>
      <div className="w-90  lg:hidden text-center">
        <img
          src={MouseBottomImg}
          alt="MouseBottomImg"
          className="w-full h-full scale-0 aspect-video"
        />

        <p className=" font-semibold text-[#00b7fa]">
          Adjustable DPI: 200–8,000 DPI,
          <br /> 6 programmable buttons,
          <br /> 1000 Hz polling rate (1ms),
          <br /> LIGHTSYNC RGB,
          <br /> Weight: ~85 g
        </p>
      </div>
    </div>
  );
}
