import MouseVideo from "../assets/MouseVideo.mp4";
import MouseVideo2 from "../assets/g203-video-desktop.mp4";

export default function MouseVideoSection() {
  return (
    <div className="MouseVideoSection relative w-full h-screen overflow-hidden">
      <div className="absolute main-mouse-video w-full h-full">
        <video
          src={MouseVideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="lightsycn-video-bg absolute w-full h-full scale-0 bg-white"></div>
      <div className="lightsycn-video absolute w-full h-full scale-0 rounded">
        <video
          src={MouseVideo2}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover "
        ></video>
        <div className="absolute -bottom-20 lg:bottom-20 left-[50%] lg:w-140 text-center translate-[-50%] text-white">
          <h2 className="text-4xl pb-5 mb-5 border-b border-b-white font-bold">
            LIGHTSYNC RGB COLOR WAVE
          </h2>
          <p className="pl-4 pr-4">
            Choose from vibrant animations, game- and media-driven settings, or
            program your own from approximately 16.8 million colors
          </p>
        </div>
      </div>
    </div>
  );
}
