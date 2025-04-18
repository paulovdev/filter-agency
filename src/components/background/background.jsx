import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Background = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      className="relative px-6 flex items-center justify-center h-screen overflow-hidden max-md:px-3"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 w-full h-[120vh]">
        <motion.div style={{ y }} className="relative size-full f-center">
          <Image
            src={"/background/background.jpg"}
            width={2200}
            height={2200}
            alt=""
            className="size-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Background;
