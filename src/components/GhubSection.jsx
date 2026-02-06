import GhubImg1 from "../assets/g203-screen1.webp";
import GhubImg2 from "../assets/g203-screen2.webp";
import GhubImg3 from "../assets/g203-screen7.webp";
import GhubImg4 from "../assets/g102-screen4-en.webp";
import GhubImg5 from "../assets/g102-screen5-en.webp";
import GhubImg6 from "../assets/g102-screen6-en.webp";
import GhubOverlayImg from "../assets/g203-color-feature-3-desktop.webp";

export default function GhubSection() {
  return (
    <div className="G-hub relative bg-[#f7f3eb] h-screen w-full overflow-hidden ">
      <div
        className="G-hub-overlay absolute z-10 h-screen w-full flex items-center justify-center"
        style={{
          background: `url(${GhubOverlayImg})`,
          backgroundSize: "cover",
        }}
      >
        <span className=" G-hub-text text-4xl lg:text-8xl text-white font-bold ">
          What do you want?
        </span>
        <span className="hidden G-hub-text  text-4xl lg:text-8xl text-white font-bold ">
          Customization ?
        </span>
        <span className="hidden G-hub-text text-4xl lg:text-8xl text-white font-bold ">
          Dynamic Screen Sampling ?
        </span>
        <span className="hidden G-hub-text  text-4xl lg:text-8xl text-white font-bold ">
          Audio Visualizer ?
        </span>
        <span className="hidden G-hub-text  text-4xl lg:text-8xl text-white font-bold ">
          Button Assignments ?
        </span>
        <span className="hidden G-hub-text  text-4xl lg:text-8xl text-white font-bold ">
          Set your Sensitivity ?
        </span>
        <span className="hidden G-hub-text  text-4xl lg:text-8xl text-white font-bold ">
          Onboard Memory ?
        </span>
      </div>
      <div className="card absolute w-full h-screen flex items-center max-md:justify-center max-md:flex-col gap-10 p-10">
        <div className="info ">
          <h1 className="font-bold text-4xl lg:text-6xl mb-8">
            Easy Customization
          </h1>
          <p className="lg:text-xl ">
            Pick one color, blend three, choose a fun animation preset, or make
            your own. The choice is yours! You can even sync your mouse with
            other Logitech G LIGHTSYNC gear so it’s a perfect match.
          </p>
        </div>
        <div className="card-img lg:w-450 shadow-sm ">
          <img src={GhubImg1} alt="GhubImg1" className="w-full rounded-md" />
        </div>
      </div>
      <div className="card opacity-0 absolute w-full h-screen flex items-center gap-10 p-10 max-md:justify-center max-md:flex-col">
        <div className="info">
          <h1 className="font-bold text-4xl lg:text-6xl mb-8">
            AUDIO VISUALIZER
          </h1>
          <p className="lg:text-xl ">
            Play music, movies, games—any sound, really—and G203 will flash
            colors to the beat. Customize levels and colors to make the dance
            party all your own.
          </p>
        </div>
        <div className="card-img lg:w-450 shadow-sm ">
          <img src={GhubImg3} alt="GhubImg3" className="w-full rounded-md" />
        </div>
      </div>
      <div className="card opacity-0 absolute w-full h-screen flex items-center gap-10 p-10 max-md:justify-center max-md:flex-col">
        <div className="info">
          <h1 className="font-bold text-4xl lg:text-6xl mb-8">
            Dynamic Screen Sampling
          </h1>
          <p className="lg:text-xl">
            Set your lighting to Screen Sampler to make it synchronise with your
            screen. Set up your mouse to react to color shifts in games, movies,
            and more.
          </p>
        </div>
        <div className="card-img lg:w-450 shadow-sm ">
          <img src={GhubImg2} alt="GhubImg2" className="w-full rounded-md" />
        </div>
      </div>

      <div className="card opacity-0 absolute w-full h-screen flex items-center gap-10 p-10 max-md:justify-center max-md:flex-col">
        <div className="info">
          <h1 className="font-bold text-4xl lg:text-6xl mb-8">
            Button Assignments
          </h1>
          <p className="lg:text-xl">
            Assign system commands, shortcut keys, and keyboard commands to the
            6 buttons. You can also create powerful macros, which let you input
            sequences of commands in a row that execute every time you click the
            assigned button.
          </p>
        </div>
        <div className="card-img lg:w-450 shadow-sm ">
          <img src={GhubImg4} alt="GhubImg2" className="w-full rounded-md" />
        </div>
      </div>
      <div className="card opacity-0 absolute w-full h-screen flex items-center gap-10 p-10 max-md:justify-center max-md:flex-col">
        <div className="info">
          <h1 className="font-bold text-4xl lg:text-6xl mb-8">
            Set your Sensitivity
          </h1>
          <p className="lg:text-xl">
            G102 sensor is capable of sensitivity up to 8,000 DPI (dots per
            inch). G102 lets you choose sensitivity settings as easy as sliding
            a scroll bar. Set up to 5 levels and cycle through them with the
            press of a button. It’s great for games that have different modes or
            levels that might require more control, like a sniper scope or a
            speed clicking level.
          </p>
        </div>
        <div className="card-img lg:w-450 shadow-sm ">
          <img src={GhubImg5} alt="GhubImg2" className="w-full rounded-md" />
        </div>
      </div>
      <div className="card opacity-0 absolute w-full h-screen flex items-center gap-10 p-10 max-md:justify-center max-md:flex-col">
        <div className="info">
          <h1 className="font-bold text-4xl lg:text-6xl mb-8">
            Onboard Memory
          </h1>
          <p className="lg:text-xl ">
            When you take your G102 with you, your custom settings can come
            along. By saving your preferences to the onboard memory using
            Logitech G HUB device settings you can use it on other computers
            with no need to install software or reconfigure your settings. Plug
            and play your way.
          </p>
        </div>
        <div className="card-img lg:w-450 shadow-sm ">
          <img src={GhubImg6} alt="GhubImg2" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
