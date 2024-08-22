"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/wr6xc6idsw88r74y8ayn.jpg",
  "https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/rojmnanadmvaatmrnipc.jpg",
  "https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/g3nwqpjsyordz8vts3d2.jpg",
];

const IMAGE_DISPLAY_TIME = 1000;
const PROGRESS_DURATION = 3000;

export default function Index() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return oldProgress + 100 / (PROGRESS_DURATION / 30);
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
    }, PROGRESS_DURATION);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (index === images.length - 1) return;
    const imageTimer = setTimeout(() => {
      setIndex(index + 1);
    }, IMAGE_DISPLAY_TIME);

    return () => clearTimeout(imageTimer);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className={styles.introduction}
        >
          <div className={styles.imageContainer}>
            <Image
              src={images[index]}
              alt={`PreLoader Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }} // Aktualisierte Props
              priority
            />
          </div>
          <div className={styles.loaderContainer}>
            <div className={styles.loader}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className={styles.progressText}>{progress.toFixed(0)}%</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
