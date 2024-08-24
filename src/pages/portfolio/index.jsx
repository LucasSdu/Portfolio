import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

import Footer from '../../components/Footer';

export default function ContactPage() {

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


  const images = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rjzzi0au5vehknfpdly4",
      align: "left",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/ebtrdjgtyvkw2gxjk0h0",
      align: "center",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/yuvfjrzrgyunfsklujrc",
      align: "center",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/i5zlezcodbji4pviarej",
      align: "right",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rojmnanadmvaatmrnipc",
      align: "left",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/l8md2leuyjs9pax8mylx",
      align: "right",
      width: 800,
      height: 1200,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/ese3mjvfgzicilzhhqy4",
      align: "center",
      width: 800,
      height: 1200,
    },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/g3nwqpjsyordz8vts3d2",
        align: "right",
        width: 800,
      height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/jvykadfi72figc5ttjfx",
        align: "center",
        width: 800,
      height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/hrqbmvz5sl0qdk5d0f06",
        align: "left",
        width: 800,
        height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/oitqnym3ccsw0ebyequc",
        align: "right",
        width: 800,
        height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/e4svqxdttyhfq85irfig",
        align: "left",
        width: 800,
      height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/ogopcwxjviia749jl5vt",
        align: "center",
        width: 800,
      height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/bdjoijoy7puuxtx3a12h",
        align: "left",
        width: 800,
        height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/w1nmdf3fq5cw5xxekkfd",
        align: "right",
        width: 800,
      height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/k3bngmdrgcpmn4slsai7",
        align: "right",
        width: 800,
      height: 1200,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/wr6xc6idsw88r74y8ayn",
        align: "center",
        width: 800,
        height: 1200,
      },
  ];

  return (
    <div className={styles.body}>
<div className={styles.container}>
<div className={styles.name}>
        <span>DESIGNER & DEVELOPER</span>
      </div>
      <div className={styles.timeLocationContainer}>
        <span className={styles.locationText}>
          From Germany (<TimeInGermany />){" "}
        </span>
      </div>
     
      <div className={styles.firstname}>
        {"Hier gibt es nichts zu sehen, gehen Sie einfach zurück und genießen mein Portfolio. Cheers :-)".split("").map((letter, index) => (
          <span key={index} className={styles[`letter${index + 1}`]}>
            {letter}
          </span>
        ))}
      </div>
      <div className={styles.space}></div>
      
     <div className="lg:mb-96 md:mb-1"></div>
     
    </div>
    <div>
      <Footer />
      </div>
    </div>
    
  );
}
