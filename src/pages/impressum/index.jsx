import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
