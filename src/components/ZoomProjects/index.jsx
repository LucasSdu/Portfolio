import styles from './style.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/Dishcovery_exkyhm.jpg',
            scale: scale4,
           
        },
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/Photography_v5zmfp.jpg',
            scale: scale5,
        },
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/rojmnanadmvaatmrnipc.jpg',
            scale: scale6,
        },
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/ebtrdjgtyvkw2gxjk0h0.jpg',
            scale: scale5,
        },
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/e4svqxdttyhfq85irfig',
            scale: scale6,
        },
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/i5zlezcodbji4pviarej.jpg',
            scale: scale8,
        },
        {
            src: 'https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/rjzzi0au5vehknfpdly4.jpg',
            scale: scale9,
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.text}>
            
            {"Projekte".split("").map((letter, index) => (
              <span key={index} className={styles[`letter${index + 1}`]}>
                {letter}
              </span>
            ))}
          
                            
            </div>
            <div className={styles.sticky}>
                
                {
                    pictures.map(({ src, scale, text }, index) => {
                        return (
                            <motion.div key={index} style={{ scale }} className={styles.el}>
                                
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={src}
                                        fill
                                        alt={`image-${index}`}
                                    />
                                    <div className={styles.overlayText}>{text}</div>
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>
        </div>
    );
}
