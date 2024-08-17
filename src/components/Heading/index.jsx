// components/Heading.js
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss';

export default function Heading({ mainText, subText }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={container} className={styles.body}>
            <motion.p style={{ y: sm }}>{mainText}</motion.p>
            <p>{subText}</p>
        </div>
    );
}
