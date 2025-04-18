import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { slideTextAnim } from "./anim";

export default function PreLoader({ children }) {
  const [showChildren, setShowChildren] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [returnAnimation, setReturnAnimation] = useState(false);

  useEffect(() => {
    if (loadingComplete) {
      setTimeout(() => {
        setReturnAnimation(true);
      }, 750);

      setTimeout(() => {
        setShowChildren(true);
      }, 1000);
    }
  }, [loadingComplete]);
  return (
    <>
      {!showChildren && (
        <div className="page stairs relative">
          <div className="transition-container !bg-[#020202] h-screen flex items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <div
                key={returnAnimation}
                className="size-full flex items-center"
              >
                <div className="w-full !h-[150px] flex items-center justify-between overflow-hidden">
                  {!loadingComplete && (
                    /* LOADING... */
                    <>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate="animate"
                        className="hero-txt !text-s"
                      >
                        0
                      </motion.p>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate="animate"
                        className="hero-txt !text-s"
                      >
                        <CountUp
                          start={0}
                          end={99}
                          duration={0.1}
                          delay={0.25}
                          onEnd={() => setLoadingComplete(true)}
                        />
                      </motion.p>
                    </>
                  )}
                  {loadingComplete && (
                    /* LOADING COMPLETE */
                    <>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate={!returnAnimation && "animate"}
                        exit="exit"
                        className="hero-txt !text-s"
                      >
                        2025©
                      </motion.p>
                      <motion.p
                        variants={slideTextAnim}
                        initial="initial"
                        animate={!returnAnimation && "animate"}
                        exit="exit"
                        className="hero-txt !text-s"
                      >
                        100
                      </motion.p>
                    </>
                  )}
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      )}
      {showChildren && children}
    </>
  );
}
