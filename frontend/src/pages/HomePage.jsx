import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Users, TrendingDown, CheckCircle, Star } from 'lucide-react'
import { useQuery } from 'react-query'
import { fetchServices } from '../utils/api'

const HomePage = () => {
  const { data: services = [] } = useQuery('services', fetchServices)

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Kosten sparen',
      description: 'Bis zu 30% Ersparnis bei Ihren Energiekosten durch optimale Tarifauswahl'
    },
    {
      icon: Shield,
      title: 'Sicher & vertrauensvoll',
      description: 'Langjährige Erfahrung und transparente Beratung ohne versteckte Kosten'
    },
    {
      icon: Users,
      title: 'Persönliche Betreuung',
      description: 'Individuelle Beratung vor Ort oder online - ganz nach Ihren Wünschen'
    },
    {
      icon: Zap,
      title: 'Schnelle Abwicklung',
      description: 'Unkomplizierter Wechsel mit vollständiger Übernahme aller Formalitäten'
    }
  ]

  const testimonials = [
    {
      name: 'Familie Müller',
      text: 'Dank Ladisch Energie sparen wir jetzt über 400€ im Jahr bei unseren Stromkosten!',
      rating: 5
    },
    {
      name: 'Bäckerei Schmidt',
      text: 'Professionelle Beratung für unser Gewerbe. Sehr zufrieden mit dem Service.',
      rating: 5
    },
    {
      name: 'Maria Weber',
      text: 'Endlich ein Energiemakler, der wirklich transparent arbeitet. Sehr empfehlenswert!',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Ladisch Energie - Ihr Energiemakler für optimale Tarife</title>
        <meta name="description" content="Sparen Sie bis zu 30% bei Ihren Energiekosten. Professionelle Energieberatung für Privat- und Gewerbekunden. Kostenlose Erstberatung." />
        <meta name="keywords" content="Energiemakler, Stromtarife, Gastarife, Energieberatung, Kosten sparen" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Sparen Sie bis zu 30% bei Ihren Energiekosten
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Als erfahrener Energiemakler finden wir für Sie die besten Strom- und Gastarife. 
                Kostenlose Beratung, transparente Abwicklung, maximale Ersparnis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/termin-buchen"
                  className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center"
                >
                  Kostenlose Beratung buchen
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/kontakt"
                  className="btn-secondary bg-primary-700 text-white hover:bg-primary-600 border-primary-500"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Ihre Vorteile auf einen Blick</h3>
                <ul className="space-y-3">
                  {['Kostenlose Erstberatung', 'Bis zu 30% Ersparnis', 'Deutschlandweiter Service', 'Persönliche Betreuung'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-accent-400 mr-3" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Warum Ladisch Energie?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Mit über 10 Jahren Erfahrung im Energiemarkt sind wir Ihr vertrauensvoller Partner 
              für optimale Energielösungen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-100 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Von der Energieberatung bis zum Tarifwechsel - wir bieten Ihnen 
              umfassende Dienstleistungen rund um das Thema Energie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <Link
                  to={`/leistungen/${service.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/leistungen" className="btn-primary">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Überzeugen Sie sich von der Qualität unserer Beratung und den Erfahrungen 
              unserer zufriedenen Kunden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-secondary-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-secondary-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bereit für Ihre Energiewende?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Energiekosten optimieren. 
              Buchen Sie jetzt Ihre kostenlose Erstberatung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/termin-buchen"
                className="btn-primary bg-white text-primary-600 hover:bg-primary-50"
              >
                Termin buchen
              </Link>
              <Link
                to="/kontakt"
                className="btn-secondary bg-primary-700 text-white hover:bg-primary-600 border-primary-500"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
