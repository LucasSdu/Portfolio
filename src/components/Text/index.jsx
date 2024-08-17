'use client'
import React from 'react';
import styles from "./style.module.scss";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Hauptkomponente
export default function Home() {
  // Texte für die Animation
  const phrases1 = [
    "They say you should always ",
    "listen to your mom.",
    "My mom says I'm a great designer,",
    "so it must be true!"
  ];

  const phrases2 = [
    "I have a dog named Pia",
    "who thinks I'm the best human,",
    "in the world mostly because,",
    "I let her chew on my design sketches",
  ];

  // Animationseinstellungen
  const animation = {
    initial: i => ({ y: "100%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }), // Anfangsposition (außerhalb des sichtbaren Bereichs)
    enter: i => ({ y: "0%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }) // Eintritt-Animation
  }

  // Hook um zu erkennen, wann das Element im Sichtbereich ist
  const useAnimationOnView = (threshold = 0.75) => {
    return useInView({
      threshold,
      triggerOnce: false // Animation bei jedem Sichtkontakt auslösen
    });
  };

  return (
    <div className={styles.container}>
      {/* Render MaskText-Komponenten mit den zwei verschiedenen Texten */}
      <AnimatedText phrases={phrases1} useAnimationOnView={useAnimationOnView} />
      <AnimatedText phrases={phrases2} useAnimationOnView={useAnimationOnView} />
    </div>
  );
}

// Animierte Textkomponente
function AnimatedText({ phrases, useAnimationOnView }) {
  const { ref, inView } = useAnimationOnView();

  return (
    <div ref={ref} className={styles.body}>
      {
        phrases.map((phrase, index) => (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={{
                initial: { y: "100%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * index } },
                enter: { y: "0%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * index } }
              }}
              initial="initial"
              animate={inView ? "enter" : "initial"} 
            >
              {phrase}
            </motion.p>
          </div>
        ))
      }
    </div>
  );
}
