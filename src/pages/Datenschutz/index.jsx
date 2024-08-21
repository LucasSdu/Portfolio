/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./style.module.scss";
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <p className={styles.text}>
          Datenschutzerklärung<br />
          Geltungsbereich<br />
          Diese Datenschutzerklärung soll die Nutzer dieser Website gemäß Bundesdatenschutzgesetz und Telemediengesetz über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch den Websitebetreiber (<a href="/impressum">Lucas Sdunnek</a>, hier klicken für <a href="/impressum">Kontaktdaten</a>) informieren.<br /><br />
          Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften.<br />
          Bedenken Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken bedacht sein kann. Ein vollumfänglicher Schutz vor dem Zugriff durch Fremde ist nicht realisierbar.<br /><br />
          Zugriffsdaten<br />
          Der Websitebetreiber bzw. Seitenprovider erhebt Daten über Zugriffe auf die Seite und speichert diese als „Server-Logfiles“ ab. Folgende Daten werden so protokolliert:<br />
          - Besuchte Website<br />
          - Uhrzeit zum Zeitpunkt des Zugriffes<br />
          - Menge der gesendeten Daten in Byte<br />
          - Quelle/Verweis, von welchem Sie auf die Seite gelangten<br />
          - Verwendeter Browser<br />
          - Verwendetes Betriebssystem<br />
          - Verwendete IP-Adresse<br /><br />
          Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur Verbesserung der Website. Der Websitebetreiber behält sich allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.<br /><br />
          Umgang mit personenbezogenen Daten<br />
          Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann weiter, wenn dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen.<br />
          Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre E-Mail-Adresse und Telefonnummer.<br /><br />
          Umgang mit Kontaktdaten<br />
          Nehmen Sie mit dem Websitebetreiber durch die angebotenen Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.<br /><br />
          Rechte des Nutzers: Auskunft, Berichtigung und Löschung<br />
          Sie als Nutzer erhalten auf Antrag Ihrerseits kostenlose Auskunft darüber, welche personenbezogenen Daten über Sie gespeichert wurden. Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z. B. <a href="/impressum">Vorratsdatenspeicherung</a>) kollidiert, haben Sie ein Anrecht auf Berichtigung falscher Daten und auf die Sperrung oder Löschung Ihrer personenbezogenen Daten.<br /><br />
          (Muster von datenschutz.org)
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
