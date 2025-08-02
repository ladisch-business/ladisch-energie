import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'FAQ', href: '/faq' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      
      <header className="bg-white shadow-sm border-b border-secondary-200" role="banner">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Ladisch Energie - Zur Startseite"
            >
              Ladisch Energie
            </Link>

            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Hauptnavigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/termin-buchen"
                className="btn-primary"
                aria-label="Termin buchen"
              >
                Termin buchen
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-secondary-200"
            >
              <div className="container-max py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/termin-buchen"
                  className="block mt-4 btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Termin buchen
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content" role="main">
        {children}
      </main>

      <footer className="bg-secondary-900 text-white" role="contentinfo">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Ladisch Energie</h3>
              <p className="text-secondary-300 mb-4">
                Ihr vertrauensvoller Partner für optimale Energielösungen. 
                Wir helfen Ihnen dabei, die besten Tarife zu finden und 
                langfristig Kosten zu sparen.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="tel:+49123456789" 
                  className="flex items-center text-secondary-300 hover:text-white transition-colors"
                  aria-label="Telefonnummer anrufen"
                >
                  <Phone size={16} className="mr-2" />
                  +49 123 456 789
                </a>
                <a 
                  href="mailto:info@ladisch-energie.de" 
                  className="flex items-center text-secondary-300 hover:text-white transition-colors"
                  aria-label="E-Mail senden"
                >
                  <Mail size={16} className="mr-2" />
                  info@ladisch-energie.de
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><Link to="/leistungen/energieberatung-privat" className="hover:text-white transition-colors">Energieberatung Privat</Link></li>
                <li><Link to="/leistungen/energieberatung-gewerbe" className="hover:text-white transition-colors">Gewerbekunden</Link></li>
                <li><Link to="/leistungen/erneuerbare-energien" className="hover:text-white transition-colors">Erneuerbare Energien</Link></li>
                <li><Link to="/leistungen/energieaudit" className="hover:text-white transition-colors">Energieaudit</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link to="/agb" className="hover:text-white transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; 2024 Ladisch Energie. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
