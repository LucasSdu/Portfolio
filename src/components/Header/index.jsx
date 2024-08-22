import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const variants = {
    open: {
      width: isMobile ? 320 : 480,
      height: isMobile ? 650 : 650,
      top: "0px",
      left: "0px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 0,
      height: 0,
      top: "0px",
      left: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Index;
