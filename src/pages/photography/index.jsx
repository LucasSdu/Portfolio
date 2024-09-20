/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Magnetic from "../../components/Magnetic";

export default function Phorography() {
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
      className={`relative min-h-screen flex flex-col cursor-default bg-white ${styles["full-height-container"]}`}
    >
      <main className={styles.main}>
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
    </div>
  );
}
