import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Footer from '../../components/Footer';
import Lenis from "@studio-freight/lenis";



export default function ContactPage() {

  const TimeInGermany = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
      const lenis = new Lenis();
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
  
    useEffect(() => {
      const updateTime = () => {
        const options = {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Berlin",
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        const formattedTime = formatter.format(new Date());
        setTime(formattedTime);
      };
  
      updateTime();
      const intervalId = setInterval(updateTime, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return <span className={styles.time}>{time}</span>;
  };
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.container}>
      <div className={styles.name}>
          <button className={styles.name} onClick={() => window.history.back()}>
            <h1>Lucas Sdunnek:</h1>
            <div className={styles.roles}>
              <span>Designer & Developer</span>
            </div>
          </button>
        </div>

        <div className={styles.locationText}>
          <h1>Location:</h1>
          <div className={styles.time}>
            Germany, (<TimeInGermany />){" "}
          </div>
        </div>
        <h1 className={styles.title}>Impressum</h1>
        <p className={styles.text}>
        Kontakt<br />
Lucas Sdunnek<br />

Office<br />
Street<br />
59067 Hamm<br />
Germany<br />
E-Mail: lucas.sdunnek@gmail.com<br />

Telefon: +49 / 00000000<br />
Inhaltlich Verantwortlicher (gemäß § 55 Abs. 2 RStV):
Lucas Sdunnek (Anschrift s. oben)<br />
Copyright<br />
Alle Inhalte dieser Website, sowie die Website selbst sind urheberrechtlich geschützt. Vervielfältigungen jedweder Art bedürfen der ausdrücklichen Genehmigung der jeweiligen Uhrheber.
Haftungshinweis
Diese Webseite enthält gegebenfalls Verknüpfungen zu Webseiten Dritter („externe Links“). Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
Verwendete Warenzeichen, Fotografien und Logos sind Eigentum der jeweiligen Inhaber. Fehlende Kennzeichnung berechtigt nicht zu der Annahme, daß die Zeichen frei seien.

        </p>
        <div className="mb-96"></div>
        <div className="mb-96"></div>
      </div>
      <div style={{ backgroundColor: "#ffffff", height: "50vh" }}></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
