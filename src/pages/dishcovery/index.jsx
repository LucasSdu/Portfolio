import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import Magnetic from "../../components/Magnetic";

export default function ContactPage() {
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

          <div className={styles.topic}>Dishcovery</div>
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
      <div style={{ backgroundColor: "#ffffff", height: "50vh" }}></div>
    </div>
  );
}
