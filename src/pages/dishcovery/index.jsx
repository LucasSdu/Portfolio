import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import Footer from "../../components/Footer";

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
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/oxioinjlp3hbyetsqjzu",
      align: "left",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/sz5kw52xlojnesc2wf6a",
      align: "center",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/syv1uidcyopa36flhxtm",
      align: "center",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/p7urbzfwmwvsi4bn9aui",
      align: "right",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/zjcvzdjskwkonfdlgrt5",
      align: "left",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/mwebmpocshxsvqjztkbo",
      align: "right",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rj2rg5bzvldkxkvqxsve",
      align: "center",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/zedinhf1xzfb1tzgiqv9",
      align: "center",
      width: 300,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/h1xrwheqm51ncsq7dnlt",
      align: "left",
      width: 300,
      height: 500,
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
          {"Dishcovery".split("").map((letter, index) => (
            <span key={index} className={styles[`letter${index + 1}`]}>
              {letter}
            </span>
          ))}
        </div>
        <div className={styles.space}></div>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            src="https://res.cloudinary.com/dexbbnuzu/video/upload/v1723726124/fq0l64mujyhdgzjzqk8g.mp4"
          >
            Dein Browser unterstützt dieses Video-Format nicht.
          </video>
        </div>
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
        <div className="lg:mb-96 md:mb-1"></div>
      </div>
      <div style={{ backgroundColor: "#EDE9E6", height: "50vh" }}></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
