import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { arraySlideUpAnimation } from "@/animations/anim";

const Hero = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -125]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      className="w-full h-screen px-6 mb-8 flex flex-col items-center justify-center select-none max-md:px-3 overflow-hidden"
      id="index"
      ref={container}
      style={{ y: 100 }}
    >
      <motion.div className="flex flex-col items-center justify-center">
        <div className="relative flex items-start overflow-hidden">
          {["f", "i", "l", "t", "r", "a", "r", "e"].map((phrase, i) => (
            <motion.h1
              key={i}
              custom={i}
              variants={arraySlideUpAnimation}
              initial="initial"
              animate="animate"
              className="hero-txt !text-s mix-blend-exclusion"
              style={{ y: y3 }}
            >
              {phrase}
            </motion.h1>
          ))}
        </div>

        <div className="relative flex items-start overflow-hidden">
          {["l", "e"].map((phrase, i) => (
            <motion.h1
              key={i}
              custom={i}
              variants={arraySlideUpAnimation}
              initial="initial"
              animate="animate"
              className="hero-txt !text-s mix-blend-exclusion"
              style={{ y: y3 }}
            >
              {phrase}
            </motion.h1>
          ))}
        </div>

        <div className="relative flex items-start overflow-hidden">
          {["c", "o", "s", "e"].map((phrase, i) => (
            <motion.h1
              key={i}
              custom={i}
              variants={arraySlideUpAnimation}
              initial="initial"
              animate="animate"
              className="hero-txt !text-s mix-blend-exclusion"
            >
              {phrase}
            </motion.h1>
          ))}
        </div>

        <div className="absolute -z-10">
          <motion.div
            className="relative 
            left-[185px] top-[160px] 
            max-md:left-[150px] max-md:top-[125px]"
            style={{ y, scale }}
          >
            <Image
              src={"/hero/hero1.jpg"}
              width={500}
              height={500}
              alt=""
              className="relative w-[175px] h-[115px] object-cover brightness-75"
            />
          </motion.div>

          <motion.div
            className="relative 
            right-[185px] top-[-150px]
            max-md:right-[146px] max-md:top-[-115px]"
            style={{ y: y2, scale: scale2 }}
          >
            <Image
              src={"/hero/hero2.jpg"}
              width={500}
              height={500}
              alt=""
              className="relative w-[175px] h-[115px] object-cover brightness-75"
            />
          </motion.div>
        </div>

        <motion.div className="mt-8 flex items-center gap-2" style={{ y: y3 }}>
          <h2 className="several-txt">filtro ®</h2>

          <span className="several-txt">/</span>
          <h2 className="several-txt">scorrere verso il basso</h2>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
