/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../Magnetic";
import { motion, useTransform, useScroll } from "framer-motion";
import Bezierkurve from "../Bezierkurve";


const TimeInGermany = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Berlin",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const formattedTime = formatter.format(new Date());
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className={styles.time}>{time}</span>;
};

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const { scrollY } = useScroll();

  const rotation = useTransform(scrollY, [0, 1000], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      if (container.current) {
        const { scrollTop, scrollHeight, clientHeight } = container.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
        container.current.style.overflowY = atBottom ? "hidden" : "auto";
      }
    };

    const containerEl = container.current;

    containerEl.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      containerEl.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div ref={container} className={styles.body}>
      <div className={styles.name}>
        <h1>Lucas Sdunnek:</h1>
        <div className={styles.roles}>
          <span>Designer & Developer</span>
        </div>
      </div>
      <div className={styles.locationText}>
        <h1>Location:</h1>
        <div className={styles.time}>
          Germany, (<TimeInGermany />){" "}
        </div>
      </div>
      <div className={styles.info}>
        <span>Creative</span>
        <span>Designer</span>
        <div className={styles.heartContainer}>
          <motion.svg
            viewBox="0 0 45.57 37.56"
            className={styles.heart}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <defs>
              <style>{`
          .cls-3 {
            fill: #151310;
          }
        `}</style>
            </defs>
            <g id="Ebene_1-2" data-name="Ebene_1">
              <path
                className="cls-3"
                d="M42.92,5.27v-2.66h-2.56c-.04-.94-.08-1.78-.12-2.61h-10.76v2.64h-2.68v2.64c-.95.04-1.8.08-2.72.12v2.57h-2.66v-2.64h-2.7v-2.71h-2.69V.01H5.21v2.62h-2.57c-.05.93-.09,1.78-.14,2.72H0v10.76h2.61v2.69h2.67v2.72h2.7v2.7h2.7v2.66h2.72v2.71h2.7v2.65h2.65v2.71h2.69v2.61h2.74v-2.66h2.69v-2.69h2.69v-2.69h2.7v-2.69h2.71v-2.69h2.68v-2.68h2.67v-2.69h2.71v-2.76h2.56V5.27h-2.65ZM13.38,21.52h-.02,0v-.02h.02v.02ZM10.67,18.79h-.02v-.02h.02v.02ZM7.92,16.05h.02v.02h-.02v-.02Z"
              />
            </g>
          </motion.svg>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.birth}>
          <span>1999</span>
        </div>
        <div className={styles.bezierkurve}>
          <Bezierkurve />
        </div>
        <div className={styles.year}>
          <span>2024</span>
        </div>
      </div>

      <div className={styles.Im}>
        <span>Ich bin</span>
      </div>
      <div className={styles.end}>
        <span>und das ist meine Arbeit.</span>
      </div>

      <div className={styles.nameContainer}>
        <div className={styles.firstname}>
          {"Lucas".split("").map((letter, index) => (
            <span key={index} className={styles[`letter${index + 1}`]}>
              {letter}
            </span>
          ))}
        </div>
        <div className={styles.svgContainer}>
          <motion.svg
            viewBox="0 0 201.8 201.8"
            className={styles.svg}
            style={{ rotate: rotation }}
            transition={{ duration: 0.2 }} 
          >
            <defs>
              <style>{`
                .cls-1 {
                  fill: #fcdf3b;
                }
                .cls-2 {
                  fill: #0c0e06;
                }
              `}</style>
            </defs>
            <g id="Ebene_1">
              <circle className="cls-1" cx="100.9" cy="100.9" r="100.87" />
              <path
                className="cls-2"
                d="M115.74,39.8c.85-3.4,1.84-6.75,3.78-9.73,3.16-4.85,7.16-4.95,10.43-.16,2.38,3.48,3.67,7.46,4.47,11.56,2.48,12.77,2.61,25.45-1.75,37.92-.75,2.13-1.79,4.13-3.34,5.8-2.47,2.66-5.25,2.7-7.79.12-2.41-2.44-3.62-5.55-4.63-8.73-3.35-10.55-3.82-25.97-1.16-36.78Z"
              />
              <path
                className="cls-2"
                d="M64,39.53c.64-2.89,1.66-6.15,3.59-9.02,3.07-4.57,6.95-4.6,10.17-.11,1.22,1.7,2.18,3.56,2.8,5.55,4.57,14.7,4.87,29.43-.01,44.14-.69,2.07-1.71,3.98-3.17,5.62-2.54,2.86-5.54,2.9-8.15.09-1.84-1.99-2.93-4.42-3.85-6.93-3.9-10.67-4.51-26.95-1.37-39.35Z"
              />
              <path
                className="cls-2"
                d="M83.31,163.13c39.58,10.15,79.36-19.04,81.61-59.88q.19-3.41-3.32-3.11c-1.07.1-2.14.31-3.21.34-.98.03-1.82-.36-2.02-1.47-.2-1.16.31-2.01,1.45-2.26,6.85-1.52,13.18-.19,19.01,3.65.99.65,1.13,1.65.55,2.63-.62,1.05-1.61,1.1-2.61.6-1.19-.6-2.34-1.25-3.51-1.89-1.68-.91-2.41-.64-2.51,1.5-.39,9.01-2.63,17.59-6.49,25.74-13.33,28.11-43.65,44.22-73.7,39.17-31.29-5.26-54.83-30.17-58.13-61.51q-.45-4.3-4.29-2.1c-.22.12-.42.27-.63.4-1.29.8-2.71,1.9-3.82,0-1-1.71.49-2.56,1.69-3.31,5.06-3.16,10.56-4.33,16.46-3.58,1.44.18,3.08.45,2.83,2.38-.26,1.95-1.86,1.69-3.33,1.51-5.55-.69-5.57-.65-4.95,4.89,3.04,26.97,22.67,49.57,48.9,56.3Z"
              />
            </g>
          </motion.svg>
        </div>
        <div className={styles.lastname}>
          {"Sdunnek".split("").map((letter, index) => (
            <span key={index} className={styles[`letter${index + 1}`]}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.infofooter}>
          <div>
            <span>
              <p className={styles.nonClickableText}>2024 © Edition</p>
            </span>
          </div>
          <div>
            <span>
              <Magnetic>
                <a href="/impressum" className={styles.link}>
                  <p>Impressum</p>
                </a>
              </Magnetic>
            </span>
            <Magnetic>
              <a href="/Datenschutz" className={styles.link}>
                <p>Datenschutz</p>
              </a>
            </Magnetic>
          </div>
        </div>
    </div>
  );
}
