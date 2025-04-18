import { logoSlideAnim, pSlideParagraphAnim } from "@/animations/anim";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SiNike,
  SiHitachi,
  SiSiemens,
  SiIberia,
  SiHyundai,
  SiAdidas,
  SiJordan,
  SiSamsung,
} from "react-icons/si";

const About = () => {
  const paragraph = useRef();
  const clienti = useRef();
  const container = useRef();
  const isInView = useInView(paragraph, { once: true });
  const isInView2 = useInView(clienti, { once: true });

  const paragraphs = [
    "Un polo creativo dove i marchi e le persone si incontrano.",
    "Uno spazio per esplorare la propria identità.",
    "Affinare la visione e tracciare un futuro innovativo.",
    "<br/>",
    "Qui, le idee si trasformano in progetti concreti.",
    "Creando connessioni che ispirano il cambiamento e la crescita.",
    "Un ambiente dove ogni collaboratore trova spazio per esprimere",
    "Il proprio potenziale. contribuire a costruire unico e significativo.",
  ];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      className="size-full px-6 pt-[150px] flex max-md:pt-[75px] max-md:px-3"
      id="about"
    >
      <div
        className="w-full flex-[2]  max-lg:flex-[1.5] max-md:hidden"
        ref={container}
      ></div>
      <motion.div
        className="w-full flex-[2] max-lg:flex-[3]"
        style={{ y }}
        ref={paragraph}
      >
        <h2 className="mb-6 about-hero-txt flex items-center gap-2 select-none">
          <span className="w-12 h-1 rounded-[.2rem] bg-p" />
          noi siamo
        </h2>

        <div className="w-full max-lg:max-w-full" ref={clienti}>
          {paragraphs.map((text, i) => {
            return (
              <div className="size-full overflow-hidden">
                <motion.p
                  custom={i}
                  key={i}
                  variants={pSlideParagraphAnim}
                  initial="initial"
                  animate={isInView ? "animate" : ""}
                  className="about-description-txt"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
