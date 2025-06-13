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

          <h1 className={styles.topic}>Stop Motions Videos</h1>
        </div>
        <p className={styles.text}>
            Im Rahmen eines Gruppenprojekts habe ich an der Konzeption und
            Erstellung einer Serie von Stop-Motion-Videos mitgewirkt. Das Ziel
            des Projekts war es, die Zubereitung verschiedener Cocktails auf
            eine visuell kreative und leicht verständliche Weise zu erklären. <br />
            Meine Rolle im Team umfasste dabei mehrere Aspekte des kreativen
            Prozesses. Von der ersten Ideenfindung und dem Storyboarding über
            das Set-Design und die eigentliche Frame-by-Frame-Animation bis hin
            zur finalen Postproduktion habe ich dazu beigetragen, dass die
            Videos eine einheitliche, ansprechende Ästhetik erhalten. <br /> Dieses
            Projekt war eine hervorragende Übung darin, komplexe Abläufe (die
            Cocktail-Zubereitung) in kurze, unterhaltsame und informative
            visuelle Geschichten zu übersetzen. Es zeigt meine Fähigkeit, über
            das reine Webdesign hinaus auch in anderen kreativen Medien wie der
            Videoanimation und dem Storytelling zu arbeiten.
          </p>
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
