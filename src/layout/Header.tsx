import logo from "../assets/img/Logo/6.svg";

export default function Header() {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Référence au fichier dans le dossier public
    link.download = "Resume.pdf"; // Nom du fichier téléchargé
    link.click(); // Simule un clic pour démarrer le téléchargement
  };

  return (
    <header className="w-full px-[10%] py-7 relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-48" />
        <div className="ml-auto">
          <button
            onClick={downloadFile}
            className="text-white font-montserrat-semibold text-lg hover:text-opacity-70 transition"
          >
            Get Resume &#8599;
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}
