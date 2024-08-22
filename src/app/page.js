"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import gsap from "gsap";
import AboutMe from "../components/Aboutme";
import Text from "../components/Text";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import ZoomProjects from "../components/ZoomProjects";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [isLoading] = useState(true);
 
  const container = useRef(null);
  const refs = useRef([]);
  const textContainer = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: textContainer.current,
        scrub: true,
        start: `top 90%`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };


  return (
    <div
      className={`relative min-h-screen flex flex-col cursor-default bg-white100 ${styles["full-height-container"]}`}
    >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <main className={styles.main}>
        <Header/>
        <section id="aboutme">
          <AboutMe />
        </section>
        <Text className="z-50" />
        <div className="lg:mb-96 md:mb-1"></div>
     
        
        <section id="skills">
    
          <ZoomProjects />
        </section>
        <div className="lg:mb-96 md:mb-1"></div>
      
        <section id="myprojects">
          <Projects />
        </section>
        <div className="lg:mb-96 md:mb-1"></div>

        <section id="contact" className="mt-96">
        <Contact />
      </section>
      </main>
      <div className="lg:mb-96 md:mb-1"></div>
     

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
