import Logo from "../assets/logetechLogoSq.webp";

export default function Header() {
  return (
    <header className="p-5 flex justify-between items-center fixed w-full z-10">
      <img src={Logo} alt="Logo" className="w-20 rounded" />
      <a
        className="text-2xl font-bold  text-[#293f91] "
        href="https://www.logitechg.com/en-ph/products/gaming-mice/g102-lightsync-rgb-gaming-mouse.910-005803.html"
      >
        Buy Now
      </a>
    </header>
  );
}
