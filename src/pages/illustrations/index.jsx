import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Magnetic from "../../components/Magnetic";

export default function ContactPage() {
  const images = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/noofgpsvnrotb519df6o",
      align: "left",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/lus6ceikl2gibkwvcney",
      align: "center",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/pglhxwoe08xtrr8ltc1h",
      align: "center",
      width: 900,
      height: 500,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/dpskven4ahlvpzoieubx",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/fycxworvyhxqk0aa00wo",
      align: "left",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/x0pqdp7vrgbwdtpbuxi5",
      align: "right",
      width: 500,
      height: 900,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/q_auto/rtmiif8iq15pzqnsmc8p",
      align: "center",
      width: 900,
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

          <div className={styles.topic}>Illustrationen</div>
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
      <div style={{ backgroundColor: "#ffffff", height: "50vh" }}></div>
    </div>
  );
}
