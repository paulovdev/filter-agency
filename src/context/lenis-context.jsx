import { createContext, useContext, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";

const LenisContext = createContext();

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
    });

    lenisRef.current = lenis;

    if (router.pathname === "/") {
      lenis.stop();
    }

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, [router]);

  const scrollToLenis = (anchorName) => {
    const targetElement = document.querySelector(anchorName);
    if (targetElement) {
      lenisRef.current?.scrollTo(targetElement);
    }
  };

  const stopLenis = () => lenisRef.current?.stop();
  const startLenis = () => lenisRef.current?.start();

  const goToTop = () => {
    stopLenis();
    window.scrollTo({ top: 0, behavior: "smooth" });
    startLenis();
  };

  return (
    <LenisContext.Provider
      value={{ stopLenis, startLenis, goToTop, scrollToLenis }}
    >
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
