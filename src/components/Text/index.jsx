"use client";
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const phrases1 = [
    "Hey, ich bin Lucas Sdunnek,",
    "studiere Computervisualistik und Design in Lippstadt",
    "und habe eine Leidenschaft für gutes Design,",
    "Fotografie und Frontend-Entwicklung.",
  ];

  const phrases2 = [
     "Ich liebe es, innovative Lösungen zu finden",
    "und ästhetische Designs zu entwickeln,",
    "die Funktionalität mit visueller Klarheit verbinden.",
  ];

  const animation = {
    initial: (i) => ({
      y: "100%",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }), // Anfangsposition (außerhalb des sichtbaren Bereichs)
    enter: (i) => ({
      y: "0%",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }), // Eintritt-Animation
  };

  const useAnimationOnView = (threshold = 0.75) => {
    return useInView({
      threshold,
      triggerOnce: false,
    });
  };

  return (
    <div className={styles.container}>
      <AnimatedText
        phrases={phrases1}
        useAnimationOnView={useAnimationOnView}
      />
      <AnimatedText
        phrases={phrases2}
        useAnimationOnView={useAnimationOnView}
      />
    </div>
  );
}

function AnimatedText({ phrases, useAnimationOnView }) {
  const { ref, inView } = useAnimationOnView();

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={{
              initial: {
                y: "100%",
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.075 * index,
                },
              },
              enter: {
                y: "0%",
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.075 * index,
                },
              },
            }}
            initial="initial"
            animate={inView ? "enter" : "initial"}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
