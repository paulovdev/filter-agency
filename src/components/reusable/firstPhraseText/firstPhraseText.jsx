import { useState } from "react";
import { firstPhraseAnimation } from "./anim";
import { motion } from "framer-motion";

const FirstPhraseText = ({ phrase }) => {
  const [h1Anim, setH1Anim] = useState(false);
  const firstPhrase = ["P", "R", "O", "G", "E", "T", "T", "I", "S"];

  return (
    <motion.div
      className="relative f-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => setH1Anim(true)}
    >
      {firstPhrase.map((phrase, i) => (
        <motion.h1
          key={i}
          custom={i}
          variants={firstPhraseAnimation}
          initial="initial"
          animate={h1Anim ? "animate" : "initial"}
          className="h-txt !text-color"
        >
          {phrase}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default FirstPhraseText;
