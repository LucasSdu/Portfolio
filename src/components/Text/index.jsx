"use client";
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const phrases1 = [
    "They say you should always ",
    "listen to your mom.",
    "My mom says I'm a great designer,",
    "so it must be true!",
  ];

  const phrases2 = [
    "I have a dog named Pia",
    "who thinks I'm the best human,",
    "in the world mostly because,",
    "I let her chew on my design sketches",
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
