

import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Lenis from "@studio-freight/lenis";

import Footer from '../../components/Footer';

export default function ContactPage() {

  const TimeInGermany = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
      const lenis = new Lenis();
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
  
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


  const videos = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/q_auto/v1723728692/u1utnqdq7s9i1bgphtvw.mp4",
      align: "left",
      
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/q_auto/v1723728696/a9kz3i5oilpacjhtx0em.mp4",
      align: "center",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/q_auto/v1723728699/kqir9fdqw6fcbjknsupy.mp4",
      align: "right",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/q_auto/v1723728702/oqdvm1x1tb8eyrvnruny.mp4",
      align: "left",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/q_auto/v1723728718/ko9ktavjpbol9rgn3oub.mp4",
      align: "right",
    },
  ];


  return (
    <div className={styles.body}>
<div className={styles.container}>
<div className={styles.name}>
          <button className={styles.name} onClick={() => window.history.back()}>
            <h1>Lucas Sdunnek:</h1>
            <div className={styles.roles}>
              <span>Designer & Developer</span>
            </div>
          </button>
        </div>

        <div className={styles.locationText}>
          <h1>Location:</h1>
          <div className={styles.time}>
            Germany, (<TimeInGermany />){" "}
          </div>
        </div>
     
      <div className={styles.firstname}>
        {"Stop Motion Videos".split("").map((letter, index) => (
          <span key={index} className={styles[`letter${index + 1}`]}>
            {letter}
          </span>
        ))}
      </div>
      <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${styles.videoWrapper} ${styles[video.align]}`}
            >
              <div className={styles.videoTitle}>{video.title}</div>
              <video className={styles.video} controls src={video.url}>
                Dein Browser unterstützt dieses Video-Format nicht.
              </video>
            </div>
          ))}
        </div>
        <div className="lg:mb-96 md:mb-1"></div>
     
    </div>
    <div style={{ backgroundColor: "#b0bdd0", height: "50vh" }}></div>
    <div>
      <Footer />
      </div>
    </div>
    
  );
}
