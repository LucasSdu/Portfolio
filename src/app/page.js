"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import AboutMe from "../components/Aboutme";
import Text from "../components/Text";

export default function Home() {
  const paragraph =
    "Hey, ich bin Lucas Sdunnek, studiere study Computervisualistik und Design in Lippstadt und habe eine Leidenschaft passion für gutes Design, Fotografie photography und Frontend-Entwicklung develop . Ich liebe heart es Interfaces zu designen mit einer wunderschönen und starken strong User Experience.";

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
            <div className={styles.text}>Über mich</div>

            <hr style={{ border: "1px solid #BCF906", width: "30%" }} />
          </div>

          <div className={styles.aboutme}>
            <Text paragraph={paragraph} />
          </div>
        </div>

        <div className={styles.topic}>
          <div className={styles.text}>Projekte</div>

          <hr style={{ border: "1px solid #BCF906", width: "30%" }} />
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
