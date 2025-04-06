import { useLenis } from "@/context/lenis-context";
import { projectsData } from "@/data/projectsData";
import Layout from "@/utils/stairs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectView = () => {
  const router = useRouter();
  const { stopLenis, startLenis } = useLenis();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    stopLenis();
    setTimeout(() => {
      startLenis();
    }, 1000);

    // Marcar como pronto quando a rota estiver disponível
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
      <main className="size-full">
        <div className="relative top-0 w-screen h-screen flex flex-col items-center justify-center">
          <Image
            src={project.img}
            width={500}
            height={500}
            alt=""
            className="absolute size-full top-0 object-cover"
          />
          <div className="relative w-full px-6 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="mb-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-[600] text-[.9rem] text-s leading-[1]">
                  categoria:
                </span>
                <p className="font-[600] text-[.9rem] text-s leading-[1]">
                  {project.category}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-[600] text-[.9rem] text-s leading-[1]">
                  anno:
                </span>
                <p className="font-[600] text-[.9rem] text-s leading-[1]">
                  {project.year}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-[600] text-[.9rem] text-s leading-[1]">
                  cliente:
                </span>
                <p className="font-[600] text-[.9rem] text-s leading-[1]">
                  {project.client}
                </p>
              </div>
            </div>

            <h1 className="font-[600] text-[8rem] text-s leading-[1] uppercase mix-blend-exclusion max-md:text-[6rem] ">
              {project.name}
            </h1>
          </div>
        </div>

        <section className="max-w-[800px] w-full px-6 py-[100px] max-md:pt-[50px]">
          <p className="mt-10 text-lg ">{project.description}</p>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectView;
