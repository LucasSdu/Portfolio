/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from "./style.module.scss";
import Magnetic from '../Magnetic';


export default function Index({isActive, toggleMenu}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const handleContactButtonClick = () => {
    window.location.href = 'mailto:lucas.sdunnek@gmail.com';
  };

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
         
       
  <div className={styles.firstword}>
    {"Get in".split("").map((letter, index) => (
      <span key={index} className={styles[`letter${index + 1}`]}>
        {letter}
      </span>
    ))}
  </div>
  <div className={styles.lastword}>
    {"Contact".split("").map((letter, index) => (
      <span key={index} className={styles[`letter${index + 1}`]}>
        {letter}
      </span>
    ))}
  </div>
         
     
      

          <motion.div style={{ x }} className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleContactButtonClick}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
            >
                <PerspectiveText label="Get in Touch"/>
            </div>
        </motion.div>
    </div>
            
          </motion.div>
          <motion.svg
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

function PerspectiveText({label}) {
  return (    
      <div className={styles.perspectiveText}>
          <p>{label}</p>
          <p>{label}</p>
      </div>
  )
}
