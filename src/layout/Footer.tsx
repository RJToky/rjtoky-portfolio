export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center px-4 py-4 mt-10">
      <div className="text-white text-opacity-80 font-montserrat-regular text-base">
        © {currentYear} RJ Toky. All rights reserved.
      </div>
    </footer>
  );
}
