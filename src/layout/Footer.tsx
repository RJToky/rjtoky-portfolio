export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-5 mt-10">
      <div className="text-white text-opacity-80 font-montserrat-regular text-base text-center">
        © {currentYear} RJ Toky. All rights reserved.
      </div>
    </footer>
  );
}
