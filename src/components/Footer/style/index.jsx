/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";
import styles from "../style.module.scss";
import Magnetic from "../../Magnetic";
import { motion, useTransform, useScroll } from "framer-motion";


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
     
     

     <div className={styles.containerItem}>
  <div className={styles.gifOverlay}>
    <img src="/images/Max_Goof.gif" alt="Beschreibung des GIFs" />
  </div>
  <div className={styles.lineItem}>
  </div>
  <div className={styles.lineItem}>
    <div className={styles.Text}>
    In meiner Freizeit lese ich gerne ein gutes Buch, schaue mir eine
    Serie an, treibe Sport und verbringe Zeit mit meinen Liebsten. Ich
    stehe noch ganz am Anfang meiner Reise und freue mich immer
    darauf, neue Erfahrungen zu sammeln und Neues zu lernen.
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
