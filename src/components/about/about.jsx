import { pSlideParagraphAnim } from "@/animations/anim";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const About = () => {
  const paragraph = useRef();
  const isInView = useInView(paragraph);

  const paragraphs = [
    "Un polo creativo dove i marchi e le persone si incontrano.",
    "Uno spazio per esplorare la propria identità.",
    "Affinare la visione e tracciare un futuro innovativo.",
    "<br/>",
    "Qui, le idee si trasformano in progetti concreti.",
    "Creando connessioni che ispirano il cambiamento e la crescita.",
    "Un ambiente dove ogni collaboratore trova spazio per esprimere il proprio potenziale.",
    "E contribuire a costruire qualcosa di unico e significativo.",
  ];

  return (
    <section
      className="size-full px-6 py-10 pt-[150px] flex max-md:pt-[75px] max-md:px-3"
      id="about"
      ref={paragraph}
    >
      <div className="w-full flex-[2] max-md:hidden"></div>

      <div className="w-full flex-[2] max-lg:flex-[3]">
        <h2 className="mb-6 about-hero-txt">noi siamo</h2>
        <div className="w-full max-lg:max-w-full">
          {paragraphs.map((text, i) => (
            <div className="size-full overflow-hidden" key={i}>
              <motion.p
                key={i}
                custom={i}
                variants={pSlideParagraphAnim}
                initial="initial"
                animate={isInView ? "animate" : ""}
                className="about-txt"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-8">
          <IoLogoFacebook className="text-[2rem] text-p" />

          <IoLogoInstagram className="text-[2rem] text-p" />

          <IoLogoLinkedin className="text-[2rem] text-p" />

          <IoLogoDribbble className="text-[2rem] text-p" />
        </div>
      </div>
    </section>
  );
};

export default About;
