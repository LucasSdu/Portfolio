



import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";

import Footer from '../../components/Footer';


const Scene = dynamic(() => import('./components/scence'), {
    ssr: false,
  });

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
        {"Sie sind herzlich eingeladen, mein Portfolio zu erkunden. Cheers!".split("").map((letter, index) => (
          <span key={index} className={styles[`letter${index + 1}`]}>
            {letter}
          </span>
        ))}
      </div>
      <div className="h-screen mt-72">
        <Scene />
      </div>

     
    </div>
    <div>
      <Footer />
      </div>
    </div>
    
  );
}
