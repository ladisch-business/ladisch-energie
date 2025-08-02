import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react'

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState('alle')

  const categories = [
    { id: 'alle', name: 'Alle Fragen' },
    { id: 'allgemein', name: 'Allgemeine Fragen' },
    { id: 'tarife', name: 'Tarife & Preise' },
    { id: 'wechsel', name: 'Anbieterwechsel' },
    { id: 'beratung', name: 'Beratung' },
    { id: 'vertrag', name: 'Verträge' }
  ]

  const faqs = [
    {
      id: 1,
      category: 'allgemein',
      question: 'Was ist ein Energiemakler und wie kann er mir helfen?',
      answer: 'Ein Energiemakler ist ein unabhängiger Berater, der Ihnen dabei hilft, den besten Strom- oder Gastarif zu finden. Wir vergleichen verschiedene Anbieter und Tarife, beraten Sie neutral und unterstützen Sie beim Wechselprozess. Dabei entstehen für Sie keine Kosten, da wir von den Energieversorgern eine Provision erhalten.'
    },
    {
      id: 2,
      category: 'tarife',
      question: 'Wie viel kann ich durch einen Tarifwechsel sparen?',
      answer: 'Die Ersparnis hängt von Ihrem aktuellen Tarif und Verbrauch ab. In der Regel können Privatkunden zwischen 200-800 Euro pro Jahr sparen, Gewerbekunden oft deutlich mehr. Bei unserer kostenlosen Beratung ermitteln wir Ihr individuelles Sparpotential.'
    },
    {
      id: 3,
      category: 'wechsel',
      question: 'Wie lange dauert ein Anbieterwechsel?',
      answer: 'Ein Anbieterwechsel dauert in der Regel 4-6 Wochen. Die Kündigung beim alten Anbieter übernimmt meist der neue Versorger. Während des Wechsels ist Ihre Energieversorgung jederzeit gesichert.'
    },
    {
      id: 4,
      category: 'beratung',
      question: 'Ist die Beratung wirklich kostenlos?',
      answer: 'Ja, unsere Beratung ist für Sie vollständig kostenlos. Wir erhalten eine Provision von den Energieversorgern, wenn Sie sich für einen neuen Tarif entscheiden. Diese Provision ist bereits in den Tarifen kalkuliert und führt nicht zu höheren Preisen für Sie.'
    },
    {
      id: 5,
      category: 'vertrag',
      question: 'Kann ich meinen bestehenden Vertrag jederzeit kündigen?',
      answer: 'Das hängt von Ihrem aktuellen Vertrag ab. Die meisten Verträge haben eine Mindestlaufzeit von 12-24 Monaten. Nach Ablauf der Mindestlaufzeit können Sie meist mit einer Frist von 1-3 Monaten kündigen. Wir prüfen gerne Ihre Vertragsbedingungen.'
    },
    {
      id: 6,
      category: 'tarife',
      question: 'Was ist der Unterschied zwischen Grundversorgung und Sondertarifen?',
      answer: 'Die Grundversorgung ist der örtliche Standardtarif, der meist teurer ist. Sondertarife sind alternative Angebote mit besseren Konditionen. Diese haben oft Mindestlaufzeiten, bieten aber deutlich günstigere Preise.'
    },
    {
      id: 7,
      category: 'wechsel',
      question: 'Was passiert, wenn mein neuer Anbieter pleite geht?',
      answer: 'Ihre Energieversorgung ist gesetzlich garantiert. Falls ein Anbieter insolvent wird, übernimmt automatisch der örtliche Grundversorger die Belieferung. Sie haben dann Zeit, einen neuen Anbieter zu wählen.'
    },
    {
      id: 8,
      category: 'beratung',
      question: 'Beraten Sie auch Gewerbekunden?',
      answer: 'Ja, wir beraten sowohl Privat- als auch Gewerbekunden. Für Unternehmen bieten wir spezielle Lösungen und können oft noch größere Einsparungen erzielen. Kontaktieren Sie uns für eine individuelle Beratung.'
    },
    {
      id: 9,
      category: 'allgemein',
      question: 'Wie seriös sind Online-Vergleichsportale?',
      answer: 'Viele Vergleichsportale zeigen nicht alle verfügbaren Tarife oder bevorzugen bestimmte Anbieter. Als unabhängiger Makler haben wir Zugang zu einem breiteren Spektrum an Tarifen und beraten Sie neutral ohne versteckte Interessen.'
    },
    {
      id: 10,
      category: 'tarife',
      question: 'Was sind Neukundenrabatte und lohnen sie sich?',
      answer: 'Neukundenrabatte sind einmalige Vergünstigungen im ersten Vertragsjahr. Sie können attraktiv sein, aber achten Sie auf den Preis ab dem zweiten Jahr. Wir helfen Ihnen, die Gesamtkosten über die Vertragslaufzeit zu bewerten.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'alle' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <>
      <Helmet>
        <title>Häufige Fragen (FAQ) - Ladisch Energie</title>
        <meta name="description" content="Antworten auf häufige Fragen zu Energieberatung, Tarifwechsel und Anbieterwechsel. Finden Sie schnell die Informationen, die Sie suchen." />
      </Helmet>

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Häufige Fragen
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um Energieberatung, 
              Tarifwechsel und unsere Dienstleistungen.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
                <input
                  type="text"
                  placeholder="Fragen durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  aria-label="FAQ durchsuchen"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                    aria-pressed={selectedCategory === category.id}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="mx-auto text-secondary-400 mb-4" size={48} />
                  <h3 className="text-lg font-medium text-secondary-900 mb-2">
                    Keine Ergebnisse gefunden
                  </h3>
                  <p className="text-secondary-600">
                    Versuchen Sie andere Suchbegriffe oder wählen Sie eine andere Kategorie.
                  </p>
                </div>
              ) : (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 focus:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                      aria-expanded={openItems.has(faq.id)}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <h3 className="text-lg font-medium text-secondary-900 pr-4">
                        {faq.question}
                      </h3>
                      {openItems.has(faq.id) ? (
                        <ChevronUp className="flex-shrink-0 text-primary-600" size={24} />
                      ) : (
                        <ChevronDown className="flex-shrink-0 text-secondary-400" size={24} />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openItems.has(faq.id) && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-secondary-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="bg-primary-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  Ihre Frage ist nicht dabei?
                </h2>
                <p className="text-primary-700 mb-6">
                  Kein Problem! Kontaktieren Sie uns direkt und wir beantworten 
                  gerne alle Ihre Fragen zur Energieberatung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/kontakt"
                    className="btn-primary"
                  >
                    Kontakt aufnehmen
                  </a>
                  <a
                    href="/termin-buchen"
                    className="btn-secondary"
                  >
                    Beratungstermin buchen
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQPage
