/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./style.module.scss";
import Magnetic from "../Magnetic";

export default function Index({ isActive, toggleMenu }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden z-50"
      style={{
        clipPath: "polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)",
      }}
    >
      <div className="fixed top-[0vh] left-0 h-[100vh] w-full bg-cover bg-center bg-lila100">
        
        <motion.div>
          <div ref={container} className={styles.body}>
            <div className={styles.title}>The End</div>
            <div className={styles.containerItem}>
              <div className={styles.gifOverlay}>
                <img src="/images/Max_Goof.gif" alt="Beschreibung des GIFs" />
              </div>
             
            </div>

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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
