"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import AboutMe from "../components/Aboutme";
import Text from "../components/Text";

import Footer from "../components/Footer";

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
        <AboutMe />
        <div className="lg:mb-20 md:mb-1"></div>

        <div className={styles.container}>
          <Text paragraph={paragraph} />

          <div className="lg:mb-96 mb-28"></div>

          <div className={styles.titleProjects}>
            <h1>Ausgewählte Projekte</h1>
          </div>

          <Projects />
        </div>

        <div className="lg:mb-96 md:mb-1"></div>

        <div className="mt-96">
          <Contact />
        </div>
      </main>

      <div style={{ backgroundColor: "#fffff", height: "50vh" }}></div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
