import Footer from "@/components/footer/footer";
import Nav from "@/components/nav";
import { LenisProvider } from "@/context/lenis-context";
import "@/styles/globals.css";

import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main noise">
      <LenisProvider>
        <Nav />
        <AnimatePresence mode="wait" exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        <Footer />
      </LenisProvider>
    </div>
  );
}
