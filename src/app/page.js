"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Heading from "../components/Heading";
import Skills from "../components/Skills";
import AboutMe from "../components/Aboutme";
import Text from "../components/Text";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";

export default function Home() {
  const [isLoading] = useState(true);

  
  //const [rectHeight1, setRectHeight1] = useState("auto");
  //const [rectHeight2, setRectHeight2] = useState("auto");
  //const [container2Opacity, setContainer2Opacity] = useState(0);
  //const [textOpacity, setTextOpacity] = useState(1);

 // const containerRef1 = useRef(null);
  //const containerRef2 = useRef(null);
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

    //const handleScroll = () => {
      //if (typeof window !== "undefined") {
        //const newZoomFactor = 1 + window.scrollY / 100;
        //const maxZoomFactor1 = 1.5;
        //const maxZoomFactor2 = 1.5;

        //const clampedZoom = Math.min(
         // maxZoomFactor1,
         // maxZoomFactor2,
       //   newZoomFactor
       // );

        //const transformOrigin = "top center";

        //containerRef1.current.style.transform = `scale(${clampedZoom})`;
       // containerRef1.current.style.transformOrigin = transformOrigin;

        //containerRef2.current.style.transform = `scale(${clampedZoom})`;
        //containerRef2.current.style.transformOrigin = transformOrigin;

        //const rectHeightValue1 =
        //  clampedZoom >= maxZoomFactor1
        //   ? `${containerRef1.current.clientHeight}px`
        //   : "auto";
       // setRectHeight1(rectHeightValue1);

       // const rectHeightValue2 =
       //   clampedZoom >= maxZoomFactor1
        //    ? `${containerRef2.current.clientHeight}px`
        //    : "auto";
       // setRectHeight2(rectHeightValue2);

        //setContainer2Opacity(newZoomFactor > maxZoomFactor1 ? 1 : 0);

        //if (window.scrollY > 0) {
        //  setTextOpacity(0);
       // } else {
        //  setTextOpacity(1);
      //  }
      //}
   // };

    
  }, []);

  //useEffect(() => {
   // if (typeof window !== "undefined") {
    //  gsap.registerPlugin(ScrollTrigger);
    //  createAnimation();
   // }
 // }, []);

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
{/*
      <div className="relative h-screen">
        <div className="flex items-center justify-center h-full">
          <div
            ref={containerRef1}
            style={{
              height: rectHeight1,
              marginBottom: "200px",
            }}
            className="w-3/12 m-auto text-center min-w-[250px]"
          >
            <div className="bg-beige p-4 text-orange rounded-l rounded-r">
              <p className="font-feoni text-left mt-10 xl:text-2xl 2xl:text-3xl">
                Welcome to my
              </p>
              <p className="font-feoni text-rot ml-20 text-left xl:text-2xl 2xl:text-3xl">
                portfolio.
              </p>
              <p className="font-feoni text-right text-rot mt-10 mb-2 mr-10 xl:text-2xl 2xl:text-3xl">
                My name is
              </p>
              <p className="font-feoni text-right mb-10 mr-10 xl:text-2xl 2xl:text-3xl">
                Lucas Sdunnek.
              </p>
              <p className="font-feoni text-left mt-2 xl:text-2xl 2xl:text-3xl">
                I am a designer,
              </p>
              <p className="font-feoni text-left xl:text-2xl 2xl:text-3xl">
                programmer
              </p>
              <p className="font-feoni text-left mb-20 xl:text-2xl 2xl:text-3xl">
                <span className="font-feoni text-rot xl:text-2xl 2xl:text-4xl">&</span> student.
              </p>
              <p
                className="font-feoni mb-10 xl:text-sm 2xl:text-lg transform rotate-90"
                style={{ opacity: textOpacity }}
              >
                scroll down
              </p>
            </div>
          </div>
        </div>

        <div
          ref={containerRef2}
          style={{ height: rectHeight2, opacity: container2Opacity }}
          className="w-3/12 m-auto min-w-[250px]"
        >
          <div className="bg-rot p-4 text-orange font-feoni rounded-l rounded-r">
            <p className="font-feoni mt-10 mb-2 xl:text-2xl 2xl:text-3xl">
              Here you will find a <br /> selection of my works
            </p>
            <p className="font-feoni text-right mt-10 mb-2 xl:text-sm 2xl:text-3xl">
              <span className="font-feoni text-rot xl:text-2xl 2xl:text-4xl">&</span> discover
              what is <br /> special about each work.
            </p>
            <div className="w-48 z-50 relative mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="mb-72"></div>
      */}
      <main  className={styles.main}>
        <section id="aboutme">
          <AboutMe />
        </section>
        <Text className="z-50" />
        <div className="mb-72"></div>
        <section id="skills">
          <Skills />
        </section>
        <div className="mb-72"></div>
        <section id="myprojects">
          <Heading mainText="Pro" subText="jects" />
          <Projects />
        </section>
      </main>
      <div className="mb-96"></div>
      <div className="mb-40"></div>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
