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
        <div className={styles.title}>
          {"Creative".split("").map((letter, index) => (
            <span key={index} className={styles[`letter${index + 1}`]}>
              {letter}
            </span>
          ))}
        </div>
        <div className={styles.title}>
          {"Designer".split("").map((letter, index) => (
            <span key={index} className={styles[`letter${index + 1}`]}>
              {letter}
            </span>
          ))}
        </div>

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
            <g id="Ebene_1-2" data-name="Ebene_1">
              <path
                className={styles.cls3}
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

      <div className={styles.containerItem}>
        <div className={styles.lineItem}>
          <div className={styles.Title}>UI, UX</div>
          </div>
          <div className={styles.lineItem}>
          <div className={styles.Title}>& WEB</div>
          </div>
          <div className={styles.lineItem}>
          <div className={styles.Title}>DESIGN</div>
        </div>
        <div className={styles.lineItem}>
          <div className={styles.Text}>
            Ich bin Lucas Sdunnek, Student und leidenschaftlicher Webdesigner.
          </div>
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
