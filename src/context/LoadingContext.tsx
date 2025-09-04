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
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Fonction pour attendre le chargement des polices CSS
  const waitForFonts = (): Promise<void> => {
    return document.fonts.ready
      .then(() => {
        console.log("All CSS fonts loaded");
      })
      .catch(() => {
        console.warn("Font loading failed, continuing...");
      });
  };

  // Fonction pour précharger toutes les images de la page
  const preloadImages = (): Promise<void> => {
    return new Promise((resolve) => {
      const images = Array.from(
        document.querySelectorAll("img[src]")
      ) as HTMLImageElement[];
      const imagePromises: Promise<void>[] = [];

      // Ajouter le logo explicitement
      imagePromises.push(
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => {
            console.warn(`Failed to load image: ${logo}`);
            resolve();
          };
          img.src = logo;
        })
      );

      // Précharger toutes les images trouvées dans le DOM
      images.forEach((img) => {
        if (img.complete) {
          return; // Image déjà chargée
        }

        const promise = new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => {
            console.warn(`Failed to load image: ${img.src}`);
            resolve();
          };
          image.src = img.src;
        });

        imagePromises.push(promise);
      });

      // Également chercher les images en arrière-plan CSS
      const elementsWithBgImage = Array.from(
        document.querySelectorAll("*")
      ).filter((el) => {
        const style = window.getComputedStyle(el);
        return style.backgroundImage && style.backgroundImage !== "none";
      });

      elementsWithBgImage.forEach((el) => {
        const style = window.getComputedStyle(el);
        const bgImage = style.backgroundImage;
        const urlMatch = bgImage.match(/url\(["']?([^"']+)["']?\)/);

        if (urlMatch && urlMatch[1]) {
          const promise = new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => {
              console.warn(`Failed to load background image: ${urlMatch[1]}`);
              resolve();
            };
            img.src = urlMatch[1];
          });
          imagePromises.push(promise);
        }
      });

      Promise.all(imagePromises).then(() => resolve());
    });
  };

  // Gérer le chargement de la page
  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Précharger tous les assets
  useEffect(() => {
    const loadAssets = async () => {
      try {
        // Attendre un petit délai pour que le DOM soit prêt
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Charger polices et images en parallèle
        await Promise.all([waitForFonts(), preloadImages()]);

        setAssetsLoaded(true);
      } catch (error) {
        console.warn("Error loading assets:", error);
        setAssetsLoaded(true); // Continuer même en cas d'erreur
      }
    };

    loadAssets();
  }, []);

  // Gérer la progression du loading
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          // Si les assets sont chargés et la page est prête, aller jusqu'à 100%
          if (assetsLoaded && pageLoaded) {
            return 100;
          }

          // Sinon, progresser plus lentement
          if (prevProgress >= 90) {
            return Math.min(prevProgress + 1, 95); // Rester bloqué à 95% max
          }

          // Progression normale au début
          const increment = assetsLoaded ? 15 : pageLoaded ? 10 : 5;
          return Math.min(prevProgress + increment, 90);
        });
      }, 300);

      return () => clearInterval(timer);
    }
  }, [loading, assetsLoaded, pageLoaded]);

  // Terminer le loading quand tout est prêt
  useEffect(() => {
    if (progress === 100 && assetsLoaded && pageLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, assetsLoaded, pageLoaded]);

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
                  className="h-full bg-primary transition-all duration-300"
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
