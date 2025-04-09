import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { h1Anim, h1Anim2, imgAnim, imgAnim2 } from "@/animations/anim";

import { useMedia } from "react-use";

const Hero = () => {
  const [img, setImg] = useState(false);
  const [img2, setImg2] = useState(false);
  const isTablet = useMedia("(max-width: 768px)");
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -125]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      className="w-full h-[100vh] px-6 mb-8 flex flex-col items-center justify-center select-none max-md:px-3"
      id="index"
      ref={container}
    >
      <div className="flex flex-col items-center justify-center">
        <AnimatePresence>
          <motion.div
            className="flex items-center gap-4"
            whileHover={() => setImg(true)}
            onHoverEnd={() => setImg(false)}
          >
            <motion.h1
              className="hero-txt max-md:!text-s max-md:mix-blend-exclusion"
              variants={isTablet ? undefined : h1Anim}
              animate={img ? "animate" : "initial"}
            >
              TUTTO
            </motion.h1>

            <motion.div
              variants={imgAnim}
              initial="initial"
              animate={img ? "animate" : "initial"}
              className="max-md:hidden"
            >
              <Image
                src={"/assets/img1.jpg"}
                width={500}
                height={500}
                alt=""
                className="relative w-[200px] h-[115px]  max-md:w-[100px] max-md:h-[75px]"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <h1 className="hero-txt max-md:!text-s max-md:mix-blend-exclusion">
          IN
        </h1>

        <AnimatePresence>
          <motion.div
            className="flex items-center gap-4"
            whileHover={() => setImg2(true)}
            onHoverEnd={() => setImg2(false)}
          >
            <motion.div
              variants={imgAnim2}
              initial="initial"
              animate={img2 ? "animate" : "initial"}
              className="max-md:hidden"
            >
              <Image
                src={"/assets/img3.jpg"}
                width={500}
                height={500}
                alt=""
                className="relative w-[200px] h-[115px]"
              />
            </motion.div>

            <motion.h1
              className="hero-txt max-md:!text-s max-md:mix-blend-exclusion"
              variants={isTablet ? undefined : h1Anim2}
              animate={img2 ? "animate" : "initial"}
            >
              UNO
            </motion.h1>
          </motion.div>
        </AnimatePresence>

        <div className="hidden max-md:block absolute -z-10 ">
          <motion.div
            className="relative left-[150px] top-[125px]"
            style={{ y, scale }}
          >
            <Image
              src={"/assets/img3.jpg"}
              width={500}
              height={500}
              alt=""
              className="relative w-[175px] h-[115px] brightness-75"
            />
          </motion.div>

          <motion.div
            className="relative right-[146px] top-[-115px]"
            style={{ y: y2, scale: scale2 }}
          >
            <Image
              src={"/assets/img1.jpg"}
              width={500}
              height={500}
              alt=""
              className="relative w-[175px] h-[115px] brightness-75"
            />
          </motion.div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <h2 className="several-txt">filtro</h2>
          <h2 className="several-txt">®</h2>

          <span className="several-txt">/</span>
          <h2 className="several-txt">scorrere verso il basso</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
