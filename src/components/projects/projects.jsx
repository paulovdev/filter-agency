import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import { useRouter } from "next/router";
import { arraySlideUpAnimation, spanAnimation } from "@/animations/anim";
import { useMedia } from "react-use";

const Projects = () => {
  const router = useRouter();
  const container = useRef(null);
  const text = useRef(null);
  const isTablet = useMedia("(max-width: 768px)");
  const a = useMedia("(max-width: 1400px)");
  const b = useMedia("(max-width: 1200px)");
  const c = useMedia("(max-width: 1024px)");
  const d = useMedia("(max-width: 820px)");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const isInView = useInView(text);

  return (
    <section
      className="relative w-screen px-6 pb-[250px] max-md:px-3"
      ref={container}
      id="project"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-50 !mix-blend-exclusion pointer-events-none select-none">
        <div className="flex items-start" ref={text}>
          <div className="relative flex items-start overflow-hidden">
            {["P", "R", "O", "G", "E", "T", "T", "I", "S"].map((phrase, i) => (
              <motion.h2
                key={i}
                custom={i}
                variants={arraySlideUpAnimation}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="project-txt"
              >
                {phrase}
              </motion.h2>
            ))}
          </div>
          <motion.span
            className="project-length-txt"
            variants={spanAnimation}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            (12)
          </motion.span>
        </div>
        <div className="w-full ml-[250px] flex justify-center">
          <motion.span
            className="project-year-count-txt"
            variants={spanAnimation}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            2020 to 2024
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {projectsData.map((project, i) => {
          let baseX = 500;

          if (d) {
            baseX = 100;
          } else if (c) {
            baseX = 150;
          } else if (b) {
            baseX = 200;
          } else if (a) {
            baseX = 250;
          }

          const xValue = i % 2 === 0 ? baseX + i * 10 : -baseX - i * 10;
          const yValue = i % 3 === 0 ? 50 + i * 5 : -50 - i * 5;
          const rotateValue = i % 2 === 0 ? 1 : -1;

          const x = useTransform(
            scrollYProgress,
            [0, 1],
            [0, isTablet ? 0 : xValue]
          );
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, isTablet ? 0 : yValue]
          );

          const rotate = useTransform(
            scrollYProgress,
            [0, 1],
            [0, isTablet ? 0 : rotateValue]
          );

          return (
            <motion.div
              key={i}
              style={{ x, y, rotate }}
              className="w-fit mx-auto group max-md:w-full"
              onClick={() =>
                router.push(`${project.id}`, undefined, { scroll: false })
              }
            >
              <div className="size-full overflow-hidden">
                <Image
                  src={project.img}
                  width={500}
                  height={500}
                  alt={project.alt}
                  className="object-cover group-hover:scale-125 transition-all duration-500 max-md:size-full"
                />
              </div>
              <div className="mt-2 w-full flex justify-between">
                <p className="project-card-txt text-[1.1rem]">{project.name}</p>
                <p className="project-card-txt text-[1rem]">
                  {project.category}
                </p>
                <p className="project-card-txt text-[1rem]">{project.year}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
