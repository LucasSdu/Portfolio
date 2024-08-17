'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, slideUp } from './anim';

export default function Index() {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });

        const progressInterval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return oldProgress + 1;
            });
        }, 10);

        const timer = setTimeout(() => {
            setIsLoading(false);
            clearInterval(progressInterval);
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div 
                    key="loader"
                    variants={slideUp} 
                    initial="initial" 
                    animate="animate" 
                    exit="exit" 
                    className={styles.introduction}
                >
                    {dimension.width > 0 &&
                        <>
                            <motion.p variants={opacity} initial="initial" animate="enter">
                                <span></span>Contact
                            </motion.p>
                            <svg>
                                <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                            </svg>
                            <div className={styles.loader}>
                                <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                            </div>
                        </>
                    }
                </motion.div>
            )}
        </AnimatePresence>
    );
}
