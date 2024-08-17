import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

import Footer from '../../components/Footer';

export default function ContactPage() {
  const images = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/noofgpsvnrotb519df6o",
      align: "left",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/lus6ceikl2gibkwvcney",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/pglhxwoe08xtrr8ltc1h",
      align: "center",
      width: 666,
      height: 300,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/dpskven4ahlvpzoieubx",
      align: "right",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/fycxworvyhxqk0aa00wo",
      align: "left",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/x0pqdp7vrgbwdtpbuxi5",
      align: "right",
      width: 666,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/rtmiif8iq15pzqnsmc8p",
      align: "center",
      width: 666,
      height: 300,
    },
  ];

  return (
    <div className={styles.body}>
<div className={styles.container}>

      <h1 className={styles.title}>Illustrations</h1>
      <p className={styles.text}>
        Hier sind ein paar meiner Illustrationen
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
