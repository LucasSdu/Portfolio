import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
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


  const images = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/noofgpsvnrotb519df6o",
      align: "left",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/lus6ceikl2gibkwvcney",
      align: "center",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/pglhxwoe08xtrr8ltc1h",
      align: "center",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/dpskven4ahlvpzoieubx",
      align: "right",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/fycxworvyhxqk0aa00wo",
      align: "left",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/x0pqdp7vrgbwdtpbuxi5",
      align: "right",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rtmiif8iq15pzqnsmc8p",
      align: "center",
      width: 800,
      height: 1200,
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
        {"Illustrationen".split("").map((letter, index) => (
          <span key={index} className={styles[`letter${index + 1}`]}>
            {letter}
          </span>
        ))}
      </div>
      <div className={styles.space}></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.imageWrapper} ${styles[image.align]}`}
        >
          <Image
            src={image.url}
            alt={`Bild ${index + 1}`}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
      <div className="mb-96"></div>
      <div className="mb-40"></div>
     
    </div>
    <div style={{ backgroundColor: "#b0bdd0", height: "50vh" }}></div>
    <div>
      <Footer />
      </div>
    </div>
    
  );
}
