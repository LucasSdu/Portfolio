/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./style.module.scss";
import Magnetic from "../Magnetic";

export default function Index({ isActive, toggleMenu }) {
  const container = useRef(null);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = !isMobile ? useTransform(scrollYProgress, [0, 1], [0, 100]) : 0;
  const y = !isMobile ? useTransform(scrollYProgress, [0, 1], [-100, 0]) : 0;
  const rotate = !isMobile
    ? useTransform(scrollYProgress, [0, 1], [120, 90])
    : 0;
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);

  const handleContactButtonClick = () => {
    window.location.href = "mailto:lucas.sdunnek@gmail.com";
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden z-50"
      style={{
        clipPath: "polygon(-0% -0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
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
          alignItems: "center",
        }}
        className={styles.contact}
      >
        <div className={styles.body}>
          <div className={styles.title}>
            <div className={styles.firstword}>
              <span className={styles.letter}>Schreiben</span>
            </div>
            <div className={styles.lastword}>
              <span className={styles.letter}>Sie mir</span>
            </div>

           
            <motion.div style={{ x }} className={styles.buttonContainer}>
              <div className={styles.button} onClick={handleContactButtonClick}>
              <Magnetic>
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
                    Hier
                  </div>
                </motion.div>
                </Magnetic>
              </div>
            </motion.div>
           

            <motion.svg
              className={styles.arrow}
              style={{ rotate: "220deg", scale: 2 }}
              width="40"
              height="40"
              viewBox="0 0 66.73 104.14"
              fill="#f0f0f0"
              stroke="#2b2018"
              strokeMiterlimit="10"
              strokeWidth="2px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="OBJECTS">
                <g>
                  <path
                    fill="#f0f0f0"
                    stroke="#2b2018"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    d="M62.38,64.08s3.41,17.69-12.1,22.86c0,0,9.68,9.49-4.75,14.5-14.43,5.02-32.67-1.95-36.2-9.62-3.54-7.67,4.9-8.35,4.9-8.35-12.25-6.46-22.67-31.67.81-35.49,2.43-5.06-2.02-33.48,3.02-41.91,3.73-6.25,14.79-8.95,17.91,5.34,1.54,7.04.06,21.59-1.39,27.44,0,0,13.33-9.02,17.21,6.96,0,0,4.43-3.47,10.27.07,3.56,2.16,5.95,6.17.33,18.21Z"
                  />
                  <path
                    fill="#f0f0f0"
                    stroke="#2b2018"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M27.72,88.04s12.09,3.24,22.56-1.1"
                  />
                </g>
                <path
                  fill="#f0f0f0"
                  stroke="#2b2018"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M65.43,55.23c-3.2,14.12-11.41,26.27-20.91,20.41-10.98-6.78,4.14-20.84,4.14-20.84"
                />
                <path
                  fill="#f0f0f0"
                  stroke="#2b2018"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M51.38,44.62c2.91,11.71-5.74,24.81-18.29,21.8-12.55-3.01,1.98-21.71,1.98-21.71"
                />
                <path
                  fill="#f0f0f0"
                  stroke="#2b2018"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M15.04,47.97c14.42-1.32,24.2,10.98,22.68,19.03-1.52,8.05-11.12,10.72-22.99-4.82"
                />
              </g>
            </motion.svg>
          </div>

          <div className="mb-36"></div>
        </div>
      </motion.div>

      <div className={styles.infofooter}>
        <div>
          <span>
            <p className={styles.nonClickableText}>2024 © Edition</p>
          </span>
        </div>
        <div>
          <span>
            <Magnetic>
              <a href="/impressum" className={styles.link}>
                <p>Impressum</p>
              </a>
            </Magnetic>
          </span>
          <Magnetic>
            <a href="/Datenschutz" className={styles.link}>
              <p>Datenschutz</p>
            </a>
          </Magnetic>
        </div>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[100vh] w-full">
        <motion.div style={{ y: imageY }} className="relative w-full h-full">
          <Image
            src="/images/Background.jpg"
            fill
            alt="Background Image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

