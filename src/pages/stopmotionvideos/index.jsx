import React from "react";
import styles from "./style.module.scss";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const videos = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/v1723728692/u1utnqdq7s9i1bgphtvw.mp4",
      align: "left",
      title: "French 75",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/v1723728696/a9kz3i5oilpacjhtx0em.mp4",
      align: "center",
      title: "Kamikaze",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/v1723728699/kqir9fdqw6fcbjknsupy.mp4",
      align: "right",
      title: "Moscow Mule",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/v1723728702/oqdvm1x1tb8eyrvnruny.mp4",
      align: "left",
      title: "Cubra Libre",
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/video/upload/v1723728718/ko9ktavjpbol9rgn3oub.mp4",
      align: "right",
      title: "John Collins",
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Stop Motion Videos</h1>
        <p className={styles.text}>
          Im Rahmen des Moduls „Informationsdesign“ wurde das Projekt
          „Stop-Motion-Cocktail-Videos“ durchgeführt. Ziel dieses Projekts war es,
          durch die kreative Nutzung der Stop-Motion-Technik informative und
          ansprechende Videos zu erstellen, die verschiedene Cocktail-Rezepte und
          -Zubereitungstechniken visuell darstellten. Die Videos zeigten Schritt
          für Schritt, wie klassische und moderne Cocktails gemixt wurden, und
          kombinierten dabei ästhetische Gestaltung mit klarer
          Informationsvermittlung. Das Projekt verfolgte das Ziel, komplexe
          Rezepturen durch innovative Animationen zu vereinfachen und die
          Zuschauer sowohl visuell als auch edukativ zu fesseln.
        </p>

        {/* Videos */}
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${styles.videoWrapper} ${styles[video.align]}`}
            >
              <div className={styles.videoTitle}>{video.title}</div>
              <video className={styles.video} controls src={video.url}>
                Dein Browser unterstützt dieses Video-Format nicht.
              </video>
            </div>
          ))}
        </div>

        <div className="mb-96"></div>
        <div className="mb-40"></div>
      </div>
      <Footer />
    </div>
  );
}
