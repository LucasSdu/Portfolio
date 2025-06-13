"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import AboutMe from "../components/Aboutme";
import Text from "../components/Text";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex flex-col cursor-default bg-white100 ${styles["full-height-container"]}`}
    >
      <main className={styles.main}>
        <div>
          <AboutMe />
          <div className={styles.topic}>
            <h2 className={styles.titleaboutme}>Über mich | Freelance Webdesigner</h2>

            <hr style={{ border: "1px solid #BCF906", width: "50%" }} />
          </div>
          <p className={styles.text}>
            Als kreativer Freelance Webdesigner aus NRW ist es meine
            Leidenschaft, funktionale und ästhetisch ansprechende Weberlebnisse
            zu schaffen. Jedes Projekt wird mit einem klaren Ziel und einem
            tiefen Verständnis für den Nutzer entwickelt. <br></br><br></br> Für mich bedeutet
            modernes Webdesign mehr als nur eine ansprechende Optik. Es ist die
            Symbiose aus durchdachter User Experience (UX) und einem klaren,
            intuitiven User Interface (UI). Mein Schwerpunkt liegt auf der
            Konzeption und Entwicklung von Webseiten, die nicht nur gut
            aussehen, sondern auch intuitiv bedienbar sind und die Geschichte
            einer Marke erzählen.<br></br><br></br> Ob mit modernen Design-Tools wie Figma oder in
            der direkten technischen Umsetzung – mein Ziel ist es, eine Brücke
            zwischen kreativem Design und sauberem Code zu schlagen. In meinem
            Portfolio finden Sie eine Auswahl an Projekten, die diesen Ansatz
            widerspiegeln.<br></br><br></br> Wenn Sie einen engagierten Webdesigner suchen, der
            Ihr nächstes Projekt mit Kreativität und technischem Know-how zum
            Erfolg führt, freue ich mich auf Ihre Kontaktaufnahme.
          </p>
        </div>

        <div className={styles.topic}>
          <h2 className={styles.titleprojects}>Mein Portfolio</h2>

          <hr style={{ border: "1px solid #BCF906", width: "50%" }} />
        </div>
        <div className={styles.containerProjects}>
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}
