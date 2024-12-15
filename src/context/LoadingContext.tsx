import { createContext, useState, useEffect } from "react";
import logo from "../assets/img/Logo/6.svg";

interface LoadingProviderProps {
  children?: React.ReactNode;
}

export const LoadingContext = createContext(false);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", () => setLoading(false));
    }
    return () => window.removeEventListener("load", () => setLoading(false));
  }, []);

  // Simule le remplissage progressif
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
      }, 500); // Ajustez la vitesse ici

      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <LoadingContext.Provider value={loading}>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-dark">
          <div className="flex flex-col items-center gap-5">
            <img src={logo} alt="Logo" className="w-60" />
            <div className="w-full h-0.5 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
}
