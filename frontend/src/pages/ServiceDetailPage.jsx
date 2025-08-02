import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react'
import { useQuery } from 'react-query'
import { fetchService } from '../utils/api'

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const { data: service, isLoading, error } = useQuery(['service', slug], () => fetchService(slug))

  if (isLoading) {
    return (
      <div className="section-padding">
        <div className="container-max text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-secondary-600">Service wird geladen...</p>
        </div>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Service nicht gefunden</h1>
          <p className="text-secondary-600 mb-8">Der angeforderte Service existiert nicht oder konnte nicht geladen werden.</p>
          <Link to="/leistungen" className="btn-primary">
            Zurück zu den Leistungen
          </Link>
        </div>
      </div>
    )
  }

  const serviceDetails = {
    'energieberatung-privat': {
      features: [
        'Analyse Ihres aktuellen Energieverbrauchs',
        'Vergleich von über 1000 Tarifen',
        'Kostenlose Wechselabwicklung',
        'Persönliche Betreuung während des gesamten Prozesses',
        'Jährliche Tarifoptimierung'
      ],
      process: [
        'Kostenlose Erstberatung per Telefon oder vor Ort',
        'Analyse Ihrer aktuellen Verträge und Verbrauchsdaten',
        'Präsentation der besten verfügbaren Tarife',
        'Komplette Abwicklung des Anbieterwechsels',
        'Nachbetreuung und jährliche Optimierung'
      ]
    },
    'energieberatung-gewerbe': {
      features: [
        'Spezialisierte Gewerbe- und Industrietarife',
        'Lastganganalyse und Verbrauchsoptimierung',
        'Energiebeschaffungsstrategien',
        'Risikomanagement bei Energiepreisen',
        'Compliance und regulatorische Beratung'
      ],
      process: [
        'Detaillierte Analyse Ihrer Energieverbräuche',
        'Entwicklung einer individuellen Energiestrategie',
        'Ausschreibung und Verhandlung mit Energieversorgern',
        'Vertragsmanagement und Implementierung',
        'Kontinuierliches Monitoring und Optimierung'
      ]
    },
    'erneuerbare-energien': {
      features: [
        'Photovoltaik-Anlagen für Eigenverbrauch',
        'Windkraft-Lösungen für Gewerbe',
        'Energiespeicher und Smart-Home-Integration',
        'Förderberatung und Finanzierungshilfe',
        'Wartung und Service bestehender Anlagen'
      ],
      process: [
        'Standortanalyse und Potentialbewertung',
        'Technische Planung und Dimensionierung',
        'Förderantrag und Finanzierungsberatung',
        'Installation durch zertifizierte Partner',
        'Inbetriebnahme und langfristige Betreuung'
      ]
    },
    'energieaudit': {
      features: [
        'Energieaudit nach DIN EN 16247',
        'Thermografie und Gebäudeanalyse',
        'Identifikation von Einsparpotentialen',
        'Wirtschaftlichkeitsberechnung von Maßnahmen',
        'Unterstützung bei Fördermittelbeantragung'
      ],
      process: [
        'Vorbesprechung und Datensammlung',
        'Vor-Ort-Begehung und Messungen',
        'Analyse und Bewertung der Energieverbräuche',
        'Erstellung des Auditberichts',
        'Präsentation der Ergebnisse und Empfehlungen'
      ]
    }
  }

  const details = serviceDetails[slug] || { features: [], process: [] }

  return (
    <>
      <Helmet>
        <title>{service.title} - Ladisch Energie</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/leistungen"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="mr-2" size={16} />
              Zurück zu den Leistungen
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {service.content && (
                  <div className="prose prose-lg max-w-none mb-12">
                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                  </div>
                )}

                {details.features.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                      Was Sie erwarten können
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {details.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {details.process.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                      Unser Vorgehen
                    </h2>
                    <div className="space-y-4">
                      {details.process.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-secondary-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="card sticky top-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    Interesse geweckt?
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <Link
                      to="/termin-buchen"
                      className="btn-primary w-full text-center"
                    >
                      Termin buchen
                    </Link>
                    <Link
                      to="/kontakt"
                      className="btn-secondary w-full text-center"
                    >
                      Kontakt aufnehmen
                    </Link>
                  </div>

                  <div className="border-t border-secondary-200 pt-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">
                      Direkter Kontakt
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="tel:+49123456789"
                        className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        <Phone size={16} className="mr-3" />
                        +49 123 456 789
                      </a>
                      <a
                        href="mailto:info@ladisch-energie.de"
                        className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        <Mail size={16} className="mr-3" />
                        info@ladisch-energie.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
