import logo from "../assets/img/Logo/6.svg";

export default function Header() {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Référence au fichier dans le dossier public
    link.download = "Resume.pdf"; // Nom du fichier téléchargé
    link.click(); // Simule un clic pour démarrer le téléchargement
  };

  return (
    <header className="w-full lg:px-[10%] md:px-[5%] px-4 py-7 relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="lg:w-48 md:w-40 w-32" />
        <div className="ml-auto">
          <button
            onClick={downloadFile}
            className="text-white font-montserrat-semibold md:text-lg text-base hover:text-opacity-70 transition"
          >
            Get Resume &#8599;
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}
