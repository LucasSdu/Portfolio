import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

import Footer from '../../components/Footer';

export default function ContactPage() {
  const images = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/rjzzi0au5vehknfpdly4",
      align: "left",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/ebtrdjgtyvkw2gxjk0h0",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/yuvfjrzrgyunfsklujrc",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/i5zlezcodbji4pviarej",
      align: "right",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/rojmnanadmvaatmrnipc",
      align: "left",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/l8md2leuyjs9pax8mylx",
      align: "right",
      width: 300,
      height: 300,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/ese3mjvfgzicilzhhqy4",
      align: "center",
      width: 300,
      height: 666,
    },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/g3nwqpjsyordz8vts3d2",
        align: "right",
        width: 300,
      height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/jvykadfi72figc5ttjfx",
        align: "center",
        width: 300,
      height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/hrqbmvz5sl0qdk5d0f06",
        align: "left",
        width: 300,
      height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/oitqnym3ccsw0ebyequc",
        align: "right",
        width: 300,
        height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/e4svqxdttyhfq85irfig",
        align: "left",
        width: 300,
        height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/ogopcwxjviia749jl5vt",
        align: "center",
        width: 300,
        height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/bdjoijoy7puuxtx3a12h",
        align: "left",
        width: 300,
        height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/w1nmdf3fq5cw5xxekkfd",
        align: "right",
        width: 300,
        height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/k3bngmdrgcpmn4slsai7",
        align: "right",
        width: 300,
        height: 666,
      },
      {
        url: "https://res.cloudinary.com/dexbbnuzu/image/upload/wr6xc6idsw88r74y8ayn",
        align: "center",
        width: 300,
        height: 666,
      },
  ];

  return (
    <div className={styles.body}>
<div className={styles.container}>
     
      <h1 className={styles.title}>Photography</h1>
      <p className={styles.text}>
        Hier sind ein paar meiner Fotografien
      </p>
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
    <div>
      <Footer />
      </div>
    </div>
    
  );
}
