

import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Lenis from "@studio-freight/lenis";
import Magnetic from "../../components/Magnetic";

export default function ContactPage() {



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
<div className={styles.topbar}>
          <div className={styles.links}>
            <Magnetic>
              <button
                className={styles.name}
                onClick={() => window.history.back()}
              >
                <h1>Home</h1>
              </button>
            </Magnetic>
          </div>

          <div className={styles.topic}>Fotografie</div>
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
    <div style={{ backgroundColor: "#ffffff", height: "50vh" }}></div>
    
    </div>
    
  );
}
