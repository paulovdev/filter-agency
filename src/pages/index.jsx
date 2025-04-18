import About from "@/components/about/about";
import Background from "@/components/background/background";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import { useLenis } from "@/context/lenis-context";
import Layout from "@/utils/loader";
import PreLoader from "@/utils/preloader";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { stopLenis, startLenis } = useLenis();
  useEffect(() => {
    stopLenis();
    setTimeout(() => {
      startLenis();
    }, 1000);
  }, [router.asPath]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PreLoader>
      <Layout>
        <main className="w-auto min-h-screen">
          <Hero />
          <Background />
          <About />
          <Projects />
        </main>
      </Layout>
    </PreLoader>
  );
};

export default Home;
