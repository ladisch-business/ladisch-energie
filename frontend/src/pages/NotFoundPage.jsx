import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden - Ladisch Energie</title>
        <meta name="description" content="Die angeforderte Seite konnte nicht gefunden werden." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="section-padding min-h-screen flex items-center">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl mx-auto">
              <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Seite nicht gefunden
              </h2>
              <p className="text-xl text-secondary-600 mb-8">
                Die angeforderte Seite existiert nicht oder wurde verschoben. 
                Kehren Sie zur Startseite zurück oder nutzen Sie die Navigation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <Home className="mr-2" size={20} />
                  Zur Startseite
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Zurück
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Beliebte Seiten
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/leistungen"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Unsere Leistungen
                  </Link>
                  <Link
                    to="/kontakt"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Kontakt
                  </Link>
                  <Link
                    to="/termin-buchen"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Termin buchen
                  </Link>
                  <Link
                    to="/faq"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
