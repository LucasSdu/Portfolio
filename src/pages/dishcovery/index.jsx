import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

import Footer from '../../components/Footer';

export default function ContactPage() {
  const images = [
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/oxioinjlp3hbyetsqjzu",
      align: "left",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/sz5kw52xlojnesc2wf6a",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/p7urbzfwmwvsi4bn9aui",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/syv1uidcyopa36flhxtm",
      align: "right",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/zjcvzdjskwkonfdlgrt5",
      align: "left",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/jgjdnkmjioyzxov2sagk",
      align: "right",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/ckxjchmnmybh2em3t5xw",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/etn9ruwvfbm2qvbsqkbw",
      align: "right",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/zedinhf1xzfb1tzgiqv9",
      align: "center",
      width: 300,
      height: 666,
    },
    {
      url: "https://res.cloudinary.com/dexbbnuzu/image/upload/h1xrwheqm51ncsq7dnlt",
      align: "left",
      width: 300,
      height: 666,
    },
  ];

  return (
    <div className={styles.body}>
<div className={styles.container}>
 
 <h1 className={styles.title}>Dishcovery</h1>
 <p className={styles.text}>
   In der App kann man Rezepte nach rechts swipen, um sie der persönlichen
   Liste hinzuzufügen, oder nach links, um sie vorerst zu ignorieren. Wenn
   keine Rezepte mehr verfügbar sind, können die gesehenen Rezepte
   zurückgesetzt werden. Dadurch kann der Benutzer erneut durch die Rezepte
   swipen und die Rezepte werden aus dem Kochbuch entfernt. Der Benutzer
   kann auch Filter nach Schwierigkeitsgrad, Preis und Dauer setzen. Der
   Gastzugang erlaubt das Durchblättern der Rezepte, aber nicht das
   Speichern. Eingeloggte Benutzer haben ein persönliches Kochbuch zum
   Speichern von Rezepten. Können selbst Rezepte erstellen und hochladen.
   Haben die Möglichkeit, Rezepte zu bewerten und so anderen Nutzern bei
   der Auswahl zu helfen. In der Vorschau wird nicht nur ein Bild des
   Gerichts angezeigt, sondern auch der Titel des Rezepts sowie Angaben zu
   Dauer, Preiskategorie, Bewertung und Tags (Kategorien wie vegan,
   vegetarisch, Burger etc.). Wenn Sie auf “Gefällt mir” klicken, wird das
   Rezept automatisch zum Kochbuch hinzugefügt. In der Detailansicht finden
   Sie alle Informationen aus der Vorschau: Beschreibung, Zutaten,
   Arbeitsschritte und Tipps. Im Profil können Sie Ihre
   Benutzerinformationen wie Benutzername und Uploads einsehen. Wenn Sie
   Ihr Passwort vergessen haben, können Sie es einfach ändern und Ihr
   Profilbild jederzeit aktualisieren.
 </p>
 <div className={styles.videoWrapper}>
   <video
     className={styles.video}
     controls
     
     src="https://res.cloudinary.com/dexbbnuzu/video/upload/v1723726124/fq0l64mujyhdgzjzqk8g.mp4"
   >
     Dein Browser unterstützt dieses Video-Format nicht.
   </video>
 </div>

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
 <div className="mb-96"></div>
 <div className="mb-40"></div>
 
</div>

<div>
<Footer />
</div>
    </div>
    

  );
}
