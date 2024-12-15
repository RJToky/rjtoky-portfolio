import { createContext, useState, useEffect } from "react";
import logo from "../assets/img/Logo/6.svg";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../components/Reveal";

interface LoadingProviderProps {
  children?: React.ReactNode;
}

export const LoadingContext = createContext(false);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            const newProgress = Math.min(prevProgress + 2, 100);
            return newProgress;
          }
          return Math.min(prevProgress + 10, 100);
        });
      }, 500);

      return () => clearInterval(timer);
    }
  }, [loading]);

  return (
    <LoadingContext.Provider value={loading}>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-dark"
          >
            <div className="flex flex-col items-center gap-5">
              <Reveal>
                <img src={logo} alt="Logo" className="md:w-60 sm:w-52 w-40" />
              </Reveal>
              <div className="w-full h-0.5 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        )}
        {!loading && children}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}
