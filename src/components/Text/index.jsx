/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Importiere alle Lottie JSON-Dateien
import cameraAnimationData from '../../../public/json/Camera.json';
import heartAnimationData from '../../../public/json/Heart.json';
import developAnimationData from '../../../public/json/Develop.json';
import strongAnimationData from '../../../public/json/Strong.json';
import studyAnimationData from '../../../public/json/Study.json';
import passionAnimationData from '../../../public/json/Passion.json';

import styles from './style.module.scss';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start 0.2"],
  });

  // Funktion zur Überprüfung der Mobilgeräte
  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768; // Definiere deine Breakpoint-Größe
    }
    return false; // Standardmäßig Desktop auf dem Server
  };

  // Standard Icon-Größen
  const desktopSizes = {
    photography: { width: '50px', height: '50px' },
    heart: { width: '50px', height: '50px' },
    develop: { width: '50px', height: '50px' },
    strong: { width: '60px', height: '60px' },
    study: { width: '50px', height: '50px' },
    passion: { width: '60px', height: '60px' },
  };

  // Icon-Größen für Mobilgeräte
  const mobileSizes = {
    photography: { width: '30px', height: '30px' },
    heart: { width: '30px', height: '30px' },
    develop: { width: '30px', height: '30px' },
    strong: { width: '35px', height: '35px' },
    study: { width: '30px', height: '30px' },
    passion: { width: '35px', height: '35px' },
  };

  // Zustand zur Verwaltung der aktuellen Icon-Größen basierend auf dem Gerät
  const [animationSizes, setAnimationSizes] = useState(desktopSizes);

  // Event Listener, um die Größe zu überprüfen, wenn das Fenster verändert wird
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setAnimationSizes(isMobile() ? mobileSizes : desktopSizes);
      };

      handleResize(); // Initiale Größe festlegen
      window.addEventListener('resize', handleResize);

      // Entferne den Event-Listener bei der Aufräumaktion
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Erstelle eine Zuordnung von Wörtern zu Lottie-Animationen
  const animations = {
    photography: cameraAnimationData,
    heart: heartAnimationData,
    develop: developAnimationData,
    strong: strongAnimationData,
    study: studyAnimationData,
    passion: passionAnimationData,
  };

  // Text wird in Wörter geteilt, wobei das Icon hinzugefügt wird
  const words = paragraph.split(/\s+/).map((word, index) => {
    const cleanedWord = word.replace(/[.,!?"']/g, '').toLowerCase(); // Entferne Satzzeichen
    if (animations[cleanedWord]) {
      console.log(`Replacing '${word}' with animation.`);
      return (
        <IconWord 
          key={`icon-${index}`} 
          animationData={animations[cleanedWord]} 
          progress={scrollYProgress}
          animationKey={cleanedWord} // Den Schlüssel übergeben
          animationSizes={animationSizes} // animationSizes als Prop übergeben
        />
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
const IconWord = ({ animationData, progress, animationKey, animationSizes }) => {
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const size = animationSizes[animationKey] || { width: '40px', height: '40px' }; // Standardgröße, falls keine Größe definiert ist

  return (
    <motion.span
      style={{ display: 'inline-block', opacity }}
      className={styles.icon}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: size.width, height: size.height }} // Dynamische Größen
      />
    </motion.span>
  );
};
