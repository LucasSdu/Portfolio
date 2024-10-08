"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const projects = [
  {
    title: "Dishcovery",
    src: "Dishcovery.jpg",
    link: "/dishcovery",
    description: "Design & Development",
  },
  {
    title: "Stop Motions Videos",
    src: "Cocktails.jpg",
    link: "/stopmotionvideos",
    description: "Videos",
  },
  {
    title: "Illustrationen",
    src: "Plakate.jpg",
    link: "/illustrations",
    description: "Design",
  },
  {
    title: "Fotografie",
    src: "Fotografie.jpg",
    link: "/photography",
    description: "Photography",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);



  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            onMouseEnter={(e) => {
              manageModal(true, index, e.clientX, e.clientY);
            }}
            onMouseLeave={(e) => {
              manageModal(false, index, e.clientX, e.clientY);
            }}
            onClick={() =>  {
                window.location.href = project.link; 
              }
            }
          >
            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>


     

      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => (
            <div
              className={styles.modal}
              style={{ backgroundColor: project.color }}
              key={`modal_${index}`}
            >
              <Link href={project.link}>
                <Image
                  src={`/images/${project.src}`}
                  width={300}
                  height={300}
                  alt={project.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      <a
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />
      </a>

      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </main>
  );
}
