import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { h1Anim, h1Anim2, imgAnim, imgAnim2 } from "@/animations/anim";

import { useMedia } from "react-use";

const Hero = () => {
  const [img, setImg] = useState(false);
  const [img2, setImg2] = useState(false);
  const isTablet = useMedia("(max-width: 768px)");

  return (
    <section
      className="w-full h-[100vh] px-6 mb-8 flex flex-col items-center justify-center select-none"
      id="index"
    >
      <div className="flex flex-col items-center justify-center">
        <AnimatePresence>
          <motion.div
            className="flex items-center gap-4"
            whileHover={() => setImg(true)}
            onHoverEnd={() => setImg(false)}
          >
            <motion.h1
              className="hero-txt"
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

        <h1 className="hero-txt">IN</h1>

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
              className="hero-txt"
              variants={isTablet ? undefined : h1Anim2}
              animate={img2 ? "animate" : "initial"}
            >
              UNO
            </motion.h1>
          </motion.div>
        </AnimatePresence>

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
