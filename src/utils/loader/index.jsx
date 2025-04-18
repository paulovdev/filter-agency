import { motion } from "framer-motion";
import { expand, opacity } from "./anim";

export default function Layout({ children }) {
  return (
    <div className="page stairs">
      <motion.div
        variants={opacity}
        initial="initial"
        animate="enter"
        exit="exit"
        className="transition-background"
      />

      <div className="transition-container">
        <motion.div
          variants={expand}
          initial="initial"
          animate="enter"
          exit="exit"
        />
      </div>

      {children}
    </div>
  );
}
