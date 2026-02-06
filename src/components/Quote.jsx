import SectionBg from "../assets/g203-video.png";

export default function Quote() {
  return (
    <div
      className="Quote w-full h-screen flex justify-center items-center relative"
      style={{ background: `url(${SectionBg})`, backgroundSize: "cover" }}
    >
      <p className="text-4xl lg:text-8xl font-bold text-white text-shadow-md text-shadow-[#8ef0f5]">
        From Gamer To Gamer
      </p>
    </div>
  );
}
