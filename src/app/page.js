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
    "Hey, ich bin Lucas Sdunnek, studiere Computervisualistik und Design in Lippstadt und habe eine Leidenschaft heart für gutes Design des, Fotografie photography und Frontend-Entwicklung develop. Ich liebe heart es, innovative Lösungen zu finden, ästhetische Designs zu entwickeln und die Funktionalität mit visueller Klarheit zu verbinden.";

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
        <section id="aboutme"></section>
        <div className="lg:mb-20 md:mb-1"></div>
        <Text paragraph={paragraph} />
        <div className="lg:mb-96 mb-28"></div>
        <div className={styles.title}>
          <h1>Projekte</h1>
          <hr className={styles.line} />
        </div>
        <div className="lg:mb-10 md:mb-1"></div>
        <section id="projects">
          <Projects />
        </section>
        <div className="lg:mb-96 md:mb-1"></div>

        <section id="contact" className="mt-96">
          <Contact />
        </section>
      </main>

      <div style={{ backgroundColor: "#b0bdd0", height: "50vh" }}></div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
