'use client'
import styles from "./style.module.scss";
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => window.innerWidth <= 767; // Adjust width based on your needs
    setIsMobile(checkIfMobile());

    // Set path initially
    setPath(progress);

    // Update isMobile on window resize
    const handleResize = () => setIsMobile(checkIfMobile());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.88;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`);
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.line}>
          {/* Only enable interactions if not on a mobile device */}
          <div
            onMouseEnter={!isMobile ? manageMouseEnter : null}
            onMouseMove={!isMobile ? manageMouseMove : null}
            onMouseLeave={!isMobile ? manageMouseLeave : null}
            className={styles.box}
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
