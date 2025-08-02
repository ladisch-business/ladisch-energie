import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Allgemeine Geschäftsbedingungen - Ladisch Energie</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen der Ladisch Energie GmbH für Energieberatung und Maklerdienstleistungen" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Allgemeine Geschäftsbedingungen</h1>

            <div className="prose prose-lg max-w-none">
              <h2>§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der 
                Ladisch Energie GmbH (nachfolgend "Auftragnehmer") und ihren Auftraggebern 
                (nachfolgend "Auftraggeber") über Energieberatung und Maklerdienstleistungen.
              </p>

              <h2>§ 2 Vertragsgegenstand</h2>
              <p>
                Der Auftragnehmer erbringt Dienstleistungen im Bereich der Energieberatung und 
                vermittelt als Makler Energielieferverträge zwischen Auftraggebern und Energieversorgern.
              </p>

              <h3>2.1 Energieberatung</h3>
              <p>
                Die Energieberatung umfasst die Analyse des Energieverbrauchs, die Identifikation 
                von Einsparpotentialen und die Empfehlung geeigneter Maßnahmen zur Energieoptimierung.
              </p>

              <h3>2.2 Maklerdienstleistungen</h3>
              <p>
                Als Energiemakler vermittelt der Auftragnehmer Verträge zwischen Auftraggebern und 
                Energieversorgern. Der Auftragnehmer ist dabei als unabhängiger Makler tätig.
              </p>

              <h2>§ 3 Vertragsschluss</h2>
              <p>
                Der Vertrag kommt durch die Annahme des Angebots des Auftragnehmers durch den 
                Auftraggeber zustande. Dies kann schriftlich, elektronisch oder mündlich erfolgen.
              </p>

              <h2>§ 4 Vergütung</h2>
              
              <h3>4.1 Energieberatung</h3>
              <p>
                Die Erstberatung ist für den Auftraggeber kostenfrei. Weiterführende Beratungsleistungen 
                werden nach Aufwand abgerechnet, sofern nicht anders vereinbart.
              </p>

              <h3>4.2 Maklerdienstleistungen</h3>
              <p>
                Für die Vermittlung von Energielieferverträgen erhält der Auftragnehmer eine Provision 
                vom jeweiligen Energieversorger. Für den Auftraggeber entstehen keine direkten Kosten.
              </p>

              <h2>§ 5 Pflichten des Auftragnehmers</h2>
              <p>
                Der Auftragnehmer verpflichtet sich zur ordnungsgemäßen und fachgerechten Erbringung 
                der vereinbarten Leistungen nach dem aktuellen Stand der Technik.
              </p>

              <h3>5.1 Beratungspflicht</h3>
              <p>
                Der Auftragnehmer berät den Auftraggeber umfassend und objektiv über die verfügbaren 
                Optionen und deren Vor- und Nachteile.
              </p>

              <h3>5.2 Verschwiegenheit</h3>
              <p>
                Der Auftragnehmer verpflichtet sich zur Verschwiegenheit über alle ihm im Rahmen 
                der Geschäftsbeziehung bekannt gewordenen Informationen.
              </p>

              <h2>§ 6 Pflichten des Auftraggebers</h2>
              <p>
                Der Auftraggeber verpflichtet sich zur vollständigen und wahrheitsgemäßen Angabe 
                aller für die Leistungserbringung erforderlichen Informationen.
              </p>

              <h2>§ 7 Haftung</h2>
              
              <h3>7.1 Haftungsumfang</h3>
              <p>
                Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem 
                Verhalten beruhen. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit 
                nicht Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit betroffen sind.
              </p>

              <h3>7.2 Haftungsbeschränkung</h3>
              <p>
                Die Haftung ist der Höhe nach auf den typischen, vorhersehbaren Schaden begrenzt. 
                Eine Haftung für entgangenen Gewinn oder sonstige Vermögensschäden ist ausgeschlossen.
              </p>

              <h2>§ 8 Kündigung</h2>
              <p>
                Beide Parteien können den Vertrag jederzeit mit einer Frist von 14 Tagen kündigen. 
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>

              <h2>§ 9 Datenschutz</h2>
              <p>
                Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers entsprechend 
                den geltenden datenschutzrechtlichen Bestimmungen. Einzelheiten regelt die 
                Datenschutzerklärung.
              </p>

              <h2>§ 10 Schlussbestimmungen</h2>
              
              <h3>10.1 Änderungen</h3>
              <p>
                Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für 
                die Änderung dieser Schriftformklausel.
              </p>

              <h3>10.2 Salvatorische Klausel</h3>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, 
                so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.
              </p>

              <h3>10.3 Anwendbares Recht</h3>
              <p>
                Auf diese AGB und alle Rechtsbeziehungen zwischen dem Auftragnehmer und dem Auftraggeber 
                findet deutsches Recht Anwendung.
              </p>

              <h3>10.4 Gerichtsstand</h3>
              <p>
                Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit diesem Vertrag ist 
                der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann, juristische Person des 
                öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>

              <h2>Kontakt</h2>
              <p>
                Bei Fragen zu diesen AGB können Sie sich jederzeit an uns wenden:
              </p>
              <p>
                Ladisch Energie GmbH<br />
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Deutschland<br />
                E-Mail: info@ladisch-energie.de<br />
                Telefon: +49 123 456 789
              </p>

              <p className="text-sm text-secondary-600 mt-8">
                Stand: August 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TermsPage
