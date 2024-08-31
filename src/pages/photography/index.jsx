import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import Footer from "../../components/Footer";

export default function Phorography() {
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
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rjzzi0au5vehknfpdly4",
      align: "left",
      width: 900,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/ebtrdjgtyvkw2gxjk0h0",
      align: "center",
      width: 900,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/yuvfjrzrgyunfsklujrc",
      align: "center",
      width: 700,
      height: 700,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/i5zlezcodbji4pviarej",
      align: "right",
      width: 900,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rojmnanadmvaatmrnipc",
      align: "left",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/l8md2leuyjs9pax8mylx",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/ese3mjvfgzicilzhhqy4",
      align: "center",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/g3nwqpjsyordz8vts3d2",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/jvykadfi72figc5ttjfx",
      align: "center",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/hrqbmvz5sl0qdk5d0f06",
      align: "left",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/oitqnym3ccsw0ebyequc",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/e4svqxdttyhfq85irfig",
      align: "left",
      width: 900,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/ogopcwxjviia749jl5vt",
      align: "center",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/bdjoijoy7puuxtx3a12h",
      align: "left",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/w1nmdf3fq5cw5xxekkfd",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/k3bngmdrgcpmn4slsai7",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/wr6xc6idsw88r74y8ayn",
      align: "center",
      width: 500,
      height: 900,
    },
  ];

  return (
    <div
      className={`relative min-h-screen flex flex-col cursor-default bg-white100 ${styles["full-height-container"]}`}
    >
      <main className={styles.main}>
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
          {"Fotografie".split("").map((letter, index) => (
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
      </main>

      <div style={{ backgroundColor: "#EDE9E6", height: "50vh" }}></div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
