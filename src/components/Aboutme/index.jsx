import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

// Projekte Array
const projects = [
    {
        src: "https://res.cloudinary.com/dexbbnuzu/image/upload/v1723757987/yuvfjrzrgyunfsklujrc.jpg"
    }
];

// Zeitkomponente für die aktuelle Zeit in Deutschland
const TimeInGermany = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Berlin',
                hour12: true, // Verwende 12-Stunden-Format mit AM/PM
            };
            const formatter = new Intl.DateTimeFormat('en-US', options); // 'en-US' für englische Formatierung
            const formattedTime = formatter.format(new Date());
            setTime(formattedTime);
        };

        updateTime(); // Setze die initiale Zeit
        const intervalId = setInterval(updateTime, 1000); // Aktualisiere die Zeit jede Sekunde

        return () => clearInterval(intervalId); // Bereinige das Interval, wenn die Komponente unmontiert wird
    }, []);

    return <span className={styles.time}>{time}</span>;
};

// Hauptkomponente
export default function Index() {
    const [selectedProject] = useState(0);
    const container = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (container.current) {
                const { scrollTop, scrollHeight, clientHeight } = container.current;
                const atBottom = scrollTop + clientHeight >= scrollHeight - 10; // Add some tolerance

                // Enable or disable scroll on the container
                container.current.style.overflowY = atBottom ? 'hidden' : 'auto';
            }
        };

        const containerEl = container.current;

        // Add scroll event listener to the container
        containerEl.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            containerEl.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={container} className={styles.body}>
            <div className={styles.name}>
                <span>DESIGNER & DEVELOPER</span>
            </div>
            <div className={styles.timeLocationContainer}>
            <span className={styles.locationText}>Germany (<TimeInGermany />) </span>
            </div>
       
                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={projects[selectedProject].src}
                            fill={true}
                            alt="project image"
                            priority={true}
                        />
                    </div>
                </div>
         
            <div className={styles.firstname}>
                        {"Lucas".split("").map((letter, index) => (
                            <span key={index} className={styles[`letter${index + 1}`]}>{letter}</span>
                        ))}
            </div>
            <div className={styles.lastname}>
                        {"Sdunnek".split("").map((letter, index) => (
                            <span key={index} className={styles[`letter${index + 1}`]}>{letter}</span>
                        ))}
                    </div>
           
        </div>
    );
}
