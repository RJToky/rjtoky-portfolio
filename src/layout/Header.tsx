import logo from "../assets/img/Logo/6.svg";

export default function Header() {
  return (
    <header className="w-full px-[15%] py-7 relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-48" />
        <div className="ml-auto">
          <button className="text-white font-montserrat-semibold text-lg hover:text-opacity-70 transition">
            Get Resume &#8599;
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}
