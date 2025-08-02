import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung - Ladisch Energie</title>
        <meta name="description" content="Datenschutzerklärung der Ladisch Energie GmbH - Informationen zur Verarbeitung Ihrer personenbezogenen Daten" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-lg max-w-none">
              <h2>1. Datenschutz auf einen Blick</h2>
              
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3>Datenerfassung auf dieser Website</h3>
              <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h4>Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h4>Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>

              <h2>2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3>Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei 
                kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
                Website generiert werden, handeln.
              </p>

              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3>Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
              </p>

              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                Ladisch Energie GmbH<br />
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Deutschland<br />
                Telefon: +49 123 456 789<br />
                E-Mail: info@ladisch-energie.de
              </p>

              <h3>Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                Datenverarbeitung entfällt.
              </p>

              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, 
                ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
              </p>

              <h2>4. Datenerfassung auf dieser Website</h2>
              
              <h3>Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>

              <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
                aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>

              <h2>5. Ihre Rechte</h2>
              
              <h3>Auskunftsrecht</h3>
              <p>
                Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten 
                verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen 
                und Kopie der Daten entsprechend den gesetzlichen Bestimmungen.
              </p>

              <h3>Recht auf Berichtigung</h3>
              <p>
                Sie haben entsprechend den gesetzlichen Bestimmungen das Recht, die Vervollständigung 
                der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten 
                zu verlangen.
              </p>

              <h3>Recht auf Löschung</h3>
              <p>
                Sie haben entsprechend den gesetzlichen Bestimmungen das Recht zu verlangen, dass Sie 
                betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der 
                gesetzlichen Bestimmungen eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </p>

              <h3>Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Sie betreffende Daten, die Sie uns zur Verfügung gestellt haben, 
                in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              </p>

              <h2>6. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
              </p>
              <p>
                E-Mail: datenschutz@ladisch-energie.de<br />
                Telefon: +49 123 456 789
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPage
