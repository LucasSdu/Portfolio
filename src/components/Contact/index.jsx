/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./style.module.scss";

export default function Index({ isActive, toggleMenu }) {
  const container = useRef(null);
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = !isMobile ? useTransform(scrollYProgress, [0, 1], [0, 100]) : 0;
  const y = !isMobile ? useTransform(scrollYProgress, [0, 1], [-100, 0]) : 0;
  const rotate = !isMobile ? useTransform(scrollYProgress, [0, 1], [120, 90]) : 0;
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);

  const handleContactButtonClick = () => {
    window.location.href = "mailto:lucas.sdunnek@gmail.com";
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden z-50"
      style={{ clipPath: "polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)" }}


    >
<motion.div 
  style={{ 
    y, 
    position: "fixed", 
    top: 0, 
    right: "30%",
    
    width: "40vw", 
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }} 
  className={styles.contact}
>
      <div className={styles.body}>
        <div className={styles.title}>
          <div className={styles.firstword}>
            {"Komm in".split("").map((letter, index) => (
              <span key={index} className={styles[`letter${index + 1}`]}>
                {letter}
              </span>
            ))}
          </div>
          <div className={styles.lastword}>
            {"Kontakt".split("").map((letter, index) => (
              <span key={index} className={styles[`letter${index + 1}`]}>
                {letter}
              </span>
            ))}
          </div>

          <motion.div style={{ x }} className={styles.buttonContainer}>
            <div className={styles.button} onClick={handleContactButtonClick}>
              <motion.div
                className={styles.slider}
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <div className={styles.el}>
                  <PerspectiveText label="Hier" />
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.svg className={styles.arrow}
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            color="#151310"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="#151310"
            />
          </motion.svg>
        </div>

        <div className="mb-36">
          
        </div>
      </div>
    </motion.div>
    <div className="fixed top-[-10vh] left-0 h-[100vh] w-full">
        <motion.div style={{ y: imageY }} className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/dp4gbaauxhuzbqydgfgx"
            fill
            alt="Background Image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
    
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
