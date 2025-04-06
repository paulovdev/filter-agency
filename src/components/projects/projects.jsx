import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import { useRouter } from "next/router";
import { h2Animation, spanAnimation } from "./anim";
import { useMedia } from "react-use";

const Projects = () => {
  const router = useRouter();
  const container = useRef(null);
  const text = useRef(null);
  const isTablet = useMedia("(max-width: 768px)");
  const firstPhrase = ["P", "R", "O", "G", "E", "T", "T", "I", "S"];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const isInView = useInView(text);

  return (
    <section
      className="relative w-screen px-6 pb-[250px]"
      ref={container}
      id="project"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center z-50 !mix-blend-exclusion pointer-events-none select-none">
        <div className="flex items-start">
          <div className="relative flex items-start overflow-hidden" ref={text}>
            {firstPhrase.map((phrase, i) => (
              <motion.h2
                key={i}
                custom={i}
                variants={h2Animation}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="font-robert-m font-[600] text-[8rem] text-[#fff] leading-[1] max-md:text-[4rem]"
              >
                {phrase}
              </motion.h2>
            ))}
          </div>
          <motion.span
            className="text-xl text-[#fff]"
            variants={spanAnimation}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            (12)
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {projectsData.map((project, i) => {
          const xValue = i % 2 === 0 ? 600 + i * 10 : -600 - i * 10;
          const yValue = i % 3 === 0 ? 50 + i * 5 : -50 - i * 5;
          const rotateValue = i % 2 === 0 ? i * 1 : -i * 1;

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
                <p className="text-[1rem] font-[600] tracking-[-.2px] uppercase">
                  {project.name}
                </p>
                <p className="text-[.9rem] font-[600] tracking-[-.3px] uppercase">
                  {project.category}
                </p>
                <p className="text-[.8rem] font-[600] tracking-[-.3px] uppercase">
                  {project.year}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
