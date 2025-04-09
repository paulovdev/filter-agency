import { useLenis } from "@/context/lenis-context";
import { projectsData } from "@/data/projectsData";
import Layout from "@/utils/stairs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { h2Animation } from "@/animations/anim";
const ProjectView = () => {
  const router = useRouter();
  const { stopLenis, startLenis } = useLenis();
  const [isReady, setIsReady] = useState(false);
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);

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

  const projectName = project.name.split("");

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
                priority
                className="size-full object-center object-cover brightness-[85%] max-tablet:object-cover max-tablet:object-[50%_100%]"
              />
              <div className="absolute w-full px-6 flex flex-col items-center justify-center text-center overflow-hidden max-md:px-3">
                <div className="mb-4 flex items-center gap-6"></div>

                <div className="relative flex items-start overflow-hidden">
                  {projectName.map((phrase, i) => (
                    <motion.h1
                      key={i}
                      custom={i}
                      variants={h2Animation}
                      initial="initial"
                      animate="animate"
                      className="project-view-hero-txt mix-blend-exclusion"
                    >
                      {phrase}
                    </motion.h1>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full my-12 mx-auto px-6 max-md:px-3">
          <div className="flex items-start gap-4 max-md:flex-col">
            <div className="flex-[2]">
              <div className="max-w-[700px] flex flex-col items-start gap-2">
                <span className="project-view-several-txt !text-p opacity-75">
                  descrizione:
                </span>
                <p className="project-description-txt">{project.description}</p>
              </div>

              <br />
            </div>

            <div className="flex-[2]">
              <div className="flex flex-col items-start gap-2">
                <span className="project-view-several-txt !text-p opacity-75">
                  categoria:
                </span>
                <p className="project-view-content-txt">{project.category}</p>
              </div>

              <br />

              <div className="flex flex-col items-start gap-2">
                <span className="project-view-several-txt !text-p opacity-75">
                  anno:
                </span>
                <p className="project-view-content-txt">{project.year}</p>
              </div>

              <br />

              <div className="flex flex-col items-start gap-2">
                <span className="project-view-several-txt !text-p opacity-75">
                  cliente:
                </span>
                <p className="project-view-content-txt">{project.client}</p>
              </div>

              <br />

              <div className="flex flex-col items-start gap-2">
                <span className="project-view-several-txt !text-p opacity-75">
                  licenza:
                </span>
                <p className="project-view-content-txt">{project.license}</p>
              </div>
              <br />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectView;
