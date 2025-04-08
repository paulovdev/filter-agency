import { useLenis } from "@/context/lenis-context";
import { projectsData } from "@/data/projectsData";
import Layout from "@/utils/stairs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
const ProjectView = () => {
  const router = useRouter();
  const { stopLenis, startLenis } = useLenis();
  const [isReady, setIsReady] = useState(false);
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);

  useEffect(() => {
    if (!router.isReady) return;

    stopLenis();
    setTimeout(() => {
      startLenis();
    }, 1000);

    setIsReady(true);
  }, [router.isReady]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  const { projectsId } = router.query;

  const project = projectsData.find(
    (project) => project.id === String(projectsId)
  );

  if (!isReady) {
    return (
      <Layout>
        <main className="size-full flex items-center justify-center">
          <p className="text-xl text-neutral-400">Carregando projeto...</p>
        </main>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <main className="size-full flex items-center justify-center">
          <p className="text-xl text-red-400">Projeto não encontrado 😢</p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="w-auto min-h-screen" ref={container}>
        <section className="relative w-screen h-screen">
          <div className="h-screen overflow-hidden">
            <motion.div
              className="relative w-screen h-screen flex items-center justify-center"
              style={{ y }}
            >
              <Image
                src={project.img}
                width={1200}
                height={1200}
                alt=""
                className="size-full object-center object-cover brightness-[85%] max-tablet:object-cover max-tablet:object-[50%_100%]"
              />
              <div className="absolute w-full px-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="mb-4 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="font-[600] text-[.9rem] text-s leading-[1] max-sm:text-[.8rem]">
                      categoria:
                    </span>
                    <p className="font-[600] text-[.9rem] text-s leading-[1] max-sm:text-[.8rem]">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-[600] text-[.9rem] text-s leading-[1] max-sm:text-[.8rem]">
                      anno:
                    </span>
                    <p className="font-[600] text-[.9rem] text-s leading-[1] max-sm:text-[.8rem]">
                      {project.year}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-[600] text-[.9rem] text-s leading-[1] max-sm:text-[.8rem]">
                      cliente:
                    </span>
                    <p className="font-[600] text-[.9rem] text-s leading-[1] max-sm:text-[.8rem]">
                      {project.client}
                    </p>
                  </div>
                </div>

                <h1 className="font-[600] text-[8rem] text-s leading-[1] uppercase mix-blend-exclusion max-lg:text-[6rem] max-md:text-[4rem] max-sm:text-[3.5rem]">
                  {project.name}
                </h1>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full my-12 mx-auto px-6">
          <div className="max-w-[800px] max-md:max-w-full">
            <p className="text-lg ">{project.description}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectView;
