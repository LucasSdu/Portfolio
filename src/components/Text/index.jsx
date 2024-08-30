import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Importiere alle Lottie JSON-Dateien
import cameraAnimationData from '../../../public/json/Camera.json';
import heartAnimationData from '../../../public/json/Heart.json';
import developAnimationData from '../../../public/json/Develop.json';

import styles from './style.module.scss';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start 0.2"],
  });

  // Erstelle eine Zuordnung von Wörtern zu Lottie-Animationen
  const animations = {
    "photography": cameraAnimationData,
    "heart": heartAnimationData,
    "develop": developAnimationData,
  };

  // Text wird in Wörter geteilt, wobei das Icon hinzugefügt wird
  const words = paragraph.split(/\s+/).map((word, index) => {
    const cleanedWord = word.replace(/[.,!?"']/g, '').toLowerCase(); // Entferne Satzzeichen
    if (animations[cleanedWord]) {
      console.log(`Replacing '${word}' with animation.`);
      return (
        <IconWord key={`icon-${index}`} animationData={animations[cleanedWord]} progress={scrollYProgress} />
      );
    }
    return word;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.fixedContent}>
        <h2>Über mich</h2>
      </div>
      <div className={styles.scrollableContent}>
        <p ref={container} className={styles.paragraph}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

// Ändere die IconWord-Komponente, um die richtige Animation anzuzeigen
const IconWord = ({ animationData, progress }) => {
  const opacity = useTransform(progress, [0, 1], [0, 1]);

  return (
    <motion.span
      style={{ display: 'inline-block', opacity }}
      className={styles.icon}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: '40px', height: '40px' }}
      />
    </motion.span>
  );
};
