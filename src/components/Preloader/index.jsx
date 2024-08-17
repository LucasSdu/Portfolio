'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/images/Img1.jpg',
    '/images/Img2.jpg',
    '/images/Img3.jpg',
];

const IMAGE_DISPLAY_TIME = 1000; // Zeit in Millisekunden, die jedes Bild angezeigt wird
const PROGRESS_DURATION = 3000;  // Gesamtdauer des Fortschrittsbalkens

export default function Index() {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fortschritt Intervall
        const progressInterval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return oldProgress + (100 / (PROGRESS_DURATION / 30)); // Anpassung für die Dauer des Fortschrittsbalkens
            });
        }, 30); // 30ms für die Animation des Fortschrittsbalkens

        const timer = setTimeout(() => {
            setIsLoading(false);
            clearInterval(progressInterval); // Intervall löschen, wenn das Laden abgeschlossen ist
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
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    className={styles.introduction}
                >
                    <div className={styles.imageContainer}>
                        <Image 
                            src={images[index]} 
                            alt={`PreLoader Image ${index + 1}`} 
                            layout="fill" 
                            objectFit="cover" 
                            priority
                        />
                    </div>
                    <div className={styles.loaderContainer}>
                        <div className={styles.loader}>
                            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                    </div>
                        
                    </div>
                    <div className={styles.progressText}>
                  
                        {progress.toFixed(0)}%
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
