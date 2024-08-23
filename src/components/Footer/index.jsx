/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./style.module.scss";
import Magnetic from "../Magnetic";

export default function Index({ isActive, toggleMenu }) {
  const container = useRef(null);





  return (
    <motion.div className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <div className={styles.firstword}>
            {"Lucas".split("").map((letter, index) => (
              <span key={index} className={styles[`letter${index + 1}`]}>
                {letter}
              </span>
            ))}
          </div>
          <div className={`${styles['svg']} relative flex items-center justify-center`}>
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 201.8 201.8"
              className="absolute"
            >
              <defs>
                <style>{`
                  .cls-1 {
                    fill: #fcdf3b;
                  }
                  .cls-2 {
                    fill: #0c0e06;
                  }
                `}</style>
              </defs>
              <g id="Ebene_1">
                <circle className="cls-1" cx="100.9" cy="100.9" r="100.87" />
                <path className="cls-2" d="M115.74,39.8c.85-3.4,1.84-6.75,3.78-9.73,3.16-4.85,7.16-4.95,10.43-.16,2.38,3.48,3.67,7.46,4.47,11.56,2.48,12.77,2.61,25.45-1.75,37.92-.75,2.13-1.79,4.13-3.34,5.8-2.47,2.66-5.25,2.7-7.79.12-2.41-2.44-3.62-5.55-4.63-8.73-3.35-10.55-3.82-25.97-1.16-36.78Z" />
                <path className="cls-2" d="M64,39.53c.64-2.89,1.66-6.15,3.59-9.02,3.07-4.57,6.95-4.6,10.17-.11,1.22,1.7,2.18,3.56,2.8,5.55,4.57,14.7,4.87,29.43-.01,44.14-.69,2.07-1.71,3.98-3.17,5.62-2.54,2.86-5.54,2.9-8.15.09-1.84-1.99-2.93-4.42-3.85-6.93-3.9-10.67-4.51-26.95-1.37-39.35Z" />
                <path className="cls-2" d="M83.31,163.13c39.58,10.15,79.36-19.04,81.61-59.88q.19-3.41-3.32-3.11c-1.07.1-2.14.31-3.21.34-.98.03-1.82-.36-2.02-1.47-.2-1.16.31-2.01,1.45-2.26,6.85-1.52,13.18-.19,19.01,3.65.99.65,1.13,1.65.55,2.63-.62,1.05-1.61,1.1-2.61.6-1.19-.6-2.34-1.25-3.51-1.89-1.68-.91-2.41-.64-2.51,1.5-.39,9.01-2.63,17.59-6.49,25.74-13.33,28.11-43.65,44.22-73.7,39.17-31.29-5.26-54.83-30.17-58.13-61.51q-.45-4.3-4.29-2.1c-.22.12-.42.27-.63.4-1.29.8-2.71,1.9-3.82,0-1-1.71.49-2.56,1.69-3.31,5.06-3.16,10.56-4.33,16.46-3.58,1.44.18,3.08.45,2.83,2.38-.26,1.95-1.86,1.69-3.33,1.51-5.55-.69-5.57-.65-4.95,4.89,3.04,26.97,22.67,49.57,48.9,56.3Z" />
              </g>
            </motion.svg>
          </div>
          <div className={styles.lastword}>
            {"Sdunnek".split("").map((letter, index) => (
              <span key={index} className={styles[`letter${index + 1}`]}>
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div>
            <span>
              <p className={styles.nonClickableText}>2024 © Edition</p>
            </span>
            <span></span>
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
