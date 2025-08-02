import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { submitContactForm } from '../utils/api'

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [gdprConsent, setGdprConsent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    if (!gdprConsent) {
      setSubmitStatus({ type: 'error', message: 'Bitte stimmen Sie der Datenschutzerklärung zu.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await submitContactForm({ ...data, gdprConsent })
      setSubmitStatus({
        type: 'success',
        message: 'Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.'
      })
      reset()
      setGdprConsent(false)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Kontakt - Ladisch Energie</title>
        <meta name="description" content="Kontaktieren Sie Ladisch Energie für eine kostenlose Energieberatung. Telefon, E-Mail oder persönlicher Termin - wir sind für Sie da." />
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
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Haben Sie Fragen zu Ihren Energiekosten oder möchten Sie eine kostenlose 
              Beratung? Wir sind gerne für Sie da und finden gemeinsam die beste Lösung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Kontaktinformationen
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Telefon</h3>
                    <p className="text-secondary-600">+49 123 456 789</p>
                    <p className="text-sm text-secondary-500">Mo-Fr: 8:00-18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">E-Mail</h3>
                    <p className="text-secondary-600">info@ladisch-energie.de</p>
                    <p className="text-sm text-secondary-500">Antwort innerhalb von 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Adresse</h3>
                    <p className="text-secondary-600">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Öffnungszeiten</h3>
                    <p className="text-secondary-600">
                      Montag - Freitag: 8:00 - 18:00 Uhr<br />
                      Samstag: 9:00 - 14:00 Uhr<br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-2">
                  Kostenlose Erstberatung
                </h3>
                <p className="text-primary-700 text-sm">
                  Nutzen Sie unsere kostenlose Erstberatung und erfahren Sie, 
                  wie Sie Ihre Energiekosten optimieren können. Termine auch 
                  außerhalb der Geschäftszeiten möglich.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Nachricht senden
                </h2>

                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        {...register('firstName', { 
                          required: 'Vorname ist erforderlich',
                          minLength: { value: 2, message: 'Vorname muss mindestens 2 Zeichen lang sein' }
                        })}
                        className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        {...register('lastName', { 
                          required: 'Nachname ist erforderlich',
                          minLength: { value: 2, message: 'Nachname muss mindestens 2 Zeichen lang sein' }
                        })}
                        className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'E-Mail-Adresse ist erforderlich',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Ungültige E-Mail-Adresse'
                        }
                      })}
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="input-field"
                      placeholder="+49 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      {...register('subject', { required: 'Bitte wählen Sie einen Betreff' })}
                      className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="energieberatung">Energieberatung</option>
                      <option value="tarifwechsel">Tarifwechsel</option>
                      <option value="gewerbekunden">Gewerbekunden</option>
                      <option value="erneuerbare">Erneuerbare Energien</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { 
                        required: 'Nachricht ist erforderlich',
                        minLength: { value: 10, message: 'Nachricht muss mindestens 10 Zeichen lang sein' }
                      })}
                      className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        checked={gdprConsent}
                        onChange={(e) => setGdprConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                        aria-describedby="gdpr-description"
                      />
                      <label htmlFor="gdprConsent" className="text-sm text-secondary-700">
                        <span id="gdpr-description">
                          Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der{' '}
                          <a href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">
                            Datenschutzerklärung
                          </a>{' '}
                          zu. *
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !gdprConsent}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
