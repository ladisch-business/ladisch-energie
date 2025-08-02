const { body, validationResult } = require('express-validator');

const gdprConsent = body('consentDataProcessing')
  .isBoolean()
  .withMessage('Datenschutz-Einverständnis ist erforderlich')
  .custom((value) => {
    if (!value) {
      throw new Error('Sie müssen der Datenverarbeitung zustimmen');
    }
    return true;
  });

const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Name muss zwischen 2 und 200 Zeichen lang sein')
    .matches(/^[a-zA-ZäöüÄÖÜß\s-]+$/)
    .withMessage('Name darf nur Buchstaben, Leerzeichen und Bindestriche enthalten'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  
  body('phone')
    .optional()
    .matches(/^[\+]?[0-9\s\-\(\)\/]{7,20}$/)
    .withMessage('Bitte geben Sie eine gültige Telefonnummer ein'),
  
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Betreff darf maximal 200 Zeichen lang sein'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Nachricht muss zwischen 10 und 2000 Zeichen lang sein'),
  
  gdprConsent
];

const customerValidation = [
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Vorname muss zwischen 2 und 100 Zeichen lang sein')
    .matches(/^[a-zA-ZäöüÄÖÜß\s-]+$/)
    .withMessage('Vorname darf nur Buchstaben, Leerzeichen und Bindestriche enthalten'),
  
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nachname muss zwischen 2 und 100 Zeichen lang sein')
    .matches(/^[a-zA-ZäöüÄÖÜß\s-]+$/)
    .withMessage('Nachname darf nur Buchstaben, Leerzeichen und Bindestriche enthalten'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  
  body('phone')
    .optional()
    .matches(/^[\+]?[0-9\s\-\(\)\/]{7,20}$/)
    .withMessage('Bitte geben Sie eine gültige Telefonnummer ein'),
  
  body('address')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Adresse darf maximal 500 Zeichen lang sein'),
  
  body('postalCode')
    .optional()
    .matches(/^[0-9]{5}$/)
    .withMessage('Postleitzahl muss 5 Ziffern enthalten'),
  
  body('city')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Stadt darf maximal 100 Zeichen lang sein'),
  
  body('consentMarketing')
    .optional()
    .isBoolean()
    .withMessage('Marketing-Einverständnis muss ein Boolean-Wert sein'),
  
  gdprConsent
];

const appointmentValidation = [
  body('appointmentType')
    .isIn(['consultation', 'home_visit'])
    .withMessage('Terminart muss "consultation" oder "home_visit" sein'),
  
  body('preferredDate')
    .isISO8601()
    .toDate()
    .custom((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (value < today) {
        throw new Error('Datum darf nicht in der Vergangenheit liegen');
      }
      return true;
    }),
  
  body('preferredTime')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Zeit muss im Format HH:MM angegeben werden'),
  
  body('durationMinutes')
    .optional()
    .isInt({ min: 15, max: 240 })
    .withMessage('Dauer muss zwischen 15 und 240 Minuten liegen'),
  
  body('notes')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Notizen dürfen maximal 1000 Zeichen lang sein')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validierungsfehler',
      message: 'Die übermittelten Daten sind ungültig',
      details: errors.array().map(err => ({
        field: err.param,
        message: err.msg,
        value: err.value
      }))
    });
  }
  next();
};

module.exports = {
  contactValidation,
  customerValidation,
  appointmentValidation,
  handleValidationErrors
};
