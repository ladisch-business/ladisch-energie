import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Building, Leaf, BarChart3 } from 'lucide-react'
import { useQuery } from 'react-query'
import { fetchServices } from '../utils/api'

const ServicesPage = () => {
  const { data: services = [], isLoading, error } = useQuery('services', fetchServices)

  const serviceIcons = {
    'energieberatung-privat': Zap,
    'energieberatung-gewerbe': Building,
    'erneuerbare-energien': Leaf,
    'energieaudit': BarChart3
  }

  if (isLoading) {
    return (
      <div className="section-padding">
        <div className="container-max text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-secondary-600">Leistungen werden geladen...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="section-padding">
        <div className="container-max text-center">
          <p className="text-red-600">Fehler beim Laden der Leistungen. Bitte versuchen Sie es später erneut.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen - Ladisch Energie</title>
        <meta name="description" content="Entdecken Sie unsere umfassenden Energiedienstleistungen: Energieberatung für Privat- und Gewerbekunden, erneuerbare Energien und professionelle Energieaudits." />
        <meta name="keywords" content="Energieberatung, Gewerbekunden, Privatkunden, erneuerbare Energien, Energieaudit" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Von der individuellen Energieberatung bis hin zu komplexen Energieaudits - 
              wir bieten Ihnen maßgeschneiderte Lösungen für Ihre Energiebedürfnisse.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.slug] || Zap
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <IconComponent className="text-primary-600" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={`/leistungen/${service.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Mehr erfahren
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Bereit für Ihre Energieoptimierung?
            </h2>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, 
              wie Sie Ihre Energiekosten nachhaltig senken können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/termin-buchen" className="btn-primary">
                Kostenlose Beratung buchen
              </Link>
              <Link to="/kontakt" className="btn-secondary">
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
