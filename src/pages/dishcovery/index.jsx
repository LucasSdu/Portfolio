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

          <h1 className={styles.topic}>Dishcovery</h1>
        </div>
        <p class={styles.text}>
          "Dishcovery" ist eine Rezept-App mit einer intuitiven
          "Swipe"-Mechanik, bei der Nutzer Rezepte nach rechts zu ihrem
          persönlichen Kochbuch hinzufügen oder nach links verwerfen können. Die
          App bietet Filterfunktionen für Schwierigkeit, Preis und Dauer. <br />
          Angemeldete Nutzer können ihr persönliches Kochbuch verwalten, eigene
          Rezepte erstellen und hochladen sowie Rezepte bewerten, um die
          Community zu unterstützen. Ein Gastzugang erlaubt das Entdecken der
          Rezepte ohne Speicherfunktion. Die Benutzeroberfläche zeigt eine
          übersichtliche Rezeptvorschau mit allen wichtigen Informationen und
          eine Detailansicht mit Zutaten und Zubereitungsschritten. <br />In diesem
          Projekt war ich für das UX-Design (Figma) und die Frontend-Entwicklung
          (Svelte) verantwortlich. Als Backend-Lösung kam Supabase zum Einsatz.
        </p>
        <div className={styles.space}></div>
        <iframe
          src="https://dishcoverme.vercel.app/"
          width="800"
          height="700"
          allowFullScreen // Hinweis: 'allowfullscreen' wird oft zu 'allowFullScreen' in React
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} // Hier ist die Korrektur!
        ></iframe>
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
