import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import FAQPage from './pages/FAQPage'
import ImpressumPage from './pages/ImpressumPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </Helmet>
      
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leistungen" element={<ServicesPage />} />
          <Route path="/leistungen/:slug" element={<ServiceDetailPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/termin-buchen" element={<BookingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/agb" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
