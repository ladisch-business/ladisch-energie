import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, Clock, Home, Building, User, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { submitAppointment } from '../utils/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const BookingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm()
  
  const appointmentType = watch('appointmentType')
  
  const mutation = useMutation(submitAppointment, {
    onSuccess: () => {
      setIsSubmitted(true)
      reset()
      setSelectedDate(null)
    }
  })

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      preferredDate: selectedDate?.toISOString().split('T')[0],
      consentDataProcessing: true
    }
    mutation.mutate(formattedData)
  }

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const minDate = new Date()
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)

  return (
    <>
      <Helmet>
        <title>Termin buchen - Ladisch Energie</title>
        <meta name="description" content="Buchen Sie Ihren kostenlosen Beratungstermin bei Ladisch Energie. Online-Beratung oder Hausbesuch - wir sind flexibel." />
        <meta name="keywords" content="Termin buchen, Energieberatung, Hausbesuch, Online-Beratung" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Termin buchen
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin. 
              Wählen Sie zwischen einer Online-Beratung oder einem persönlichen Hausbesuch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="card text-center">
                <div className="bg-green-100 text-green-800 p-6 rounded-lg mb-6">
                  <h2 className="text-2xl font-bold mb-4">Termin erfolgreich gebucht!</h2>
                  <p className="text-lg">
                    Vielen Dank für Ihre Buchung. Wir melden uns in Kürze bei Ihnen 
                    zur Bestätigung des Termins.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Weiteren Termin buchen
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
                  Ihren Beratungstermin buchen
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="appointmentType" className="form-label">
                        Art der Beratung *
                      </label>
                      <select
                        id="appointmentType"
                        className={`form-input ${errors.appointmentType ? 'border-red-500' : ''}`}
                        {...register('appointmentType', { required: 'Bitte wählen Sie eine Beratungsart' })}
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="consultation">Online-Beratung</option>
                        <option value="home_visit">Hausbesuch</option>
                      </select>
                      {errors.appointmentType && (
                        <p className="form-error" role="alert">
                          {errors.appointmentType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="durationMinutes" className="form-label">
                        Gewünschte Dauer
                      </label>
                      <select
                        id="durationMinutes"
                        className="form-input"
                        {...register('durationMinutes')}
                      >
                        <option value="60">60 Minuten (Standard)</option>
                        <option value="90">90 Minuten</option>
                        <option value="120">120 Minuten</option>
                      </select>
                    </div>
                  </div>

                  {appointmentType && (
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        {appointmentType === 'consultation' ? (
                          <Building className="text-primary-600 mr-3 mt-1" size={20} />
                        ) : (
                          <Home className="text-primary-600 mr-3 mt-1" size={20} />
                        )}
                        <div>
                          <h3 className="font-semibold text-primary-800 mb-2">
                            {appointmentType === 'consultation' ? 'Online-Beratung' : 'Hausbesuch'}
                          </h3>
                          <p className="text-primary-700 text-sm">
                            {appointmentType === 'consultation' 
                              ? 'Bequem von zu Hause aus per Videocall. Sie benötigen nur einen Computer oder Smartphone mit Internetverbindung.'
                              : 'Persönliche Beratung bei Ihnen vor Ort. Wir kommen zu Ihnen nach Hause oder in Ihr Unternehmen.'
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">
                        Wunschtermin *
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={minDate}
                        maxDate={maxDate}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="Datum auswählen"
                        className={`form-input ${!selectedDate && errors.preferredDate ? 'border-red-500' : ''}`}
                        locale="de"
                        filterDate={(date) => date.getDay() !== 0}
                      />
                      {!selectedDate && errors.preferredDate && (
                        <p className="form-error" role="alert">
                          Bitte wählen Sie ein Datum
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="form-label">
                        Wunschzeit *
                      </label>
                      <select
                        id="preferredTime"
                        className={`form-input ${errors.preferredTime ? 'border-red-500' : ''}`}
                        {...register('preferredTime', { required: 'Bitte wählen Sie eine Zeit' })}
                      >
                        <option value="">Zeit auswählen...</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time} Uhr
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p className="form-error" role="alert">
                          {errors.preferredTime.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-secondary-200 pt-8">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-6 flex items-center">
                      <User className="mr-2" size={20} />
                      Ihre Kontaktdaten
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="form-label">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                          {...register('firstName', { 
                            required: 'Vorname ist erforderlich',
                            minLength: { value: 2, message: 'Vorname muss mindestens 2 Zeichen lang sein' }
                          })}
                        />
                        {errors.firstName && (
                          <p className="form-error" role="alert">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="form-label">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                          {...register('lastName', { 
                            required: 'Nachname ist erforderlich',
                            minLength: { value: 2, message: 'Nachname muss mindestens 2 Zeichen lang sein' }
                          })}
                        />
                        {errors.lastName && (
                          <p className="form-error" role="alert">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="form-label">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                          {...register('email', { 
                            required: 'E-Mail ist erforderlich',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Ungültige E-Mail-Adresse'
                            }
                          })}
                        />
                        {errors.email && (
                          <p className="form-error" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="form-label">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                          {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
                        />
                        {errors.phone && (
                          <p className="form-error" role="alert">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {appointmentType === 'home_visit' && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-secondary-900 mb-4">
                          Adresse für Hausbesuch
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="md:col-span-2">
                            <label htmlFor="address" className="form-label">
                              Straße und Hausnummer
                            </label>
                            <input
                              type="text"
                              id="address"
                              className="form-input"
                              {...register('address')}
                            />
                          </div>
                          <div>
                            <label htmlFor="postalCode" className="form-label">
                              PLZ
                            </label>
                            <input
                              type="text"
                              id="postalCode"
                              className="form-input"
                              {...register('postalCode')}
                            />
                          </div>
                          <div className="md:col-span-3">
                            <label htmlFor="city" className="form-label">
                              Stadt
                            </label>
                            <input
                              type="text"
                              id="city"
                              className="form-input"
                              {...register('city')}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="notes" className="form-label">
                      Anmerkungen
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      className="form-input"
                      placeholder="Haben Sie spezielle Wünsche oder Fragen? Teilen Sie uns diese gerne mit..."
                      {...register('notes')}
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consentMarketing"
                      className="mt-1 mr-3"
                      {...register('consentMarketing')}
                    />
                    <label htmlFor="consentMarketing" className="text-sm text-secondary-700">
                      Ich möchte gerne über neue Angebote und Energiespartipps informiert werden (optional)
                    </label>
                  </div>

                  <div className="bg-secondary-50 p-4 rounded-lg">
                    <p className="text-sm text-secondary-700">
                      Mit der Buchung stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                      <a href="/datenschutz" className="text-primary-600 hover:text-primary-700">
                        Datenschutzerklärung
                      </a>{' '}
                      zu. Die Beratung ist für Sie kostenfrei und unverbindlich.
                    </p>
                  </div>

                  {mutation.error && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg">
                      <p>Fehler beim Buchen des Termins. Bitte versuchen Sie es später erneut.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={mutation.isLoading || !selectedDate}
                    className="btn-primary w-full flex items-center justify-center text-lg py-4"
                  >
                    {mutation.isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Termin wird gebucht...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Kostenlosen Termin buchen
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BookingPage
