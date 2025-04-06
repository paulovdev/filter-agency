import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import { useLenis } from "@/context/lenis-context";
import Layout from "@/utils/stairs";
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
    <Layout>
      <main className="w-auto min-h-screen">
        <Hero />
        <About />
        <Projects />
      </main>
    </Layout>
  );
};

export default Home;
