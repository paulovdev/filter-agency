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

  // Enquanto não estiver pronto, mostrar loading
  if (!isReady) {
    return (
      <Layout>
        <main className="size-full flex items-center justify-center">
          <p className="text-xl text-neutral-400">Carregando projeto...</p>
        </main>
      </Layout>
    );
  }

  // Caso o ID seja inválido ou o projeto não exista
  if (!project) {
    return (
      <Layout>
        <main className="size-full flex items-center justify-center">
          <p className="text-xl text-red-400">Projeto não encontrado 😢</p>
        </main>
      </Layout>
    );
  }

  // Tudo pronto, renderiza o projeto
  return (
    <Layout>
      <main className="size-full">
        <div className="relative top-0 w-screen h-screen flex flex-col items-center justify-end">
          <Image
            src={project.img}
            width={500}
            height={500}
            alt=""
            className="absolute size-full top-0 object-cover"
          />

          <h1 className="relative -top-24 font-robert-m font-[600] text-9xl text-white uppercase mix-blend-exclusion">
            {project.name}
          </h1>
        </div>

        <section className="max-w-[800px] w-full px-6 py-[200px]">
          <div className="flex items-center gap-6 text-sm text-black">
            <p>{project.category}</p>
            <p>{project.year}</p>
            <p>{project.client}</p>
          </div>

          <p className="mt-10 text-lg ">{project.description}</p>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectView;
