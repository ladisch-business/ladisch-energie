# Ladisch Energie - Energiemakler Website

Eine moderne, barrierefreie Website für einen Energiemakler mit React Frontend, Express.js Backend und PostgreSQL Datenbank.

## 🚀 Features

- **Frontend**: React 18 mit Vite, TypeScript, Tailwind CSS
- **Backend**: Express.js RESTful API mit Node.js
- **Datenbank**: PostgreSQL mit vollständigem Schema
- **Containerisierung**: Docker & Docker Compose
- **Barrierefreiheit**: WCAG 2.1 AA konform
- **DSGVO-konform**: Datenschutz und Einverständniserklärungen
- **Responsive Design**: Optimiert für alle Geräte

## 📋 Funktionen

### Frontend
- Startseite mit Dienstleistungsübersicht
- Detailseiten für einzelne Services
- DSGVO-konformes Kontaktformular
- Terminbuchungssystem
- FAQ-Bereich
- Rechtliche Seiten (Impressum, Datenschutz, AGB)

### Backend
- Kundenverwaltung
- Terminverwaltung
- E-Mail-Benachrichtigungen
- Content Management System
- Umfassende Validierung
- Sicherheitsfeatures (Rate Limiting, CORS, Helmet)

## 🛠 Installation & Setup

### Voraussetzungen
- Docker & Docker Compose
- Node.js 18+ (für lokale Entwicklung)
- PostgreSQL (wird über Docker bereitgestellt)

### Schnellstart mit Docker

1. Repository klonen:
```bash
git clone https://github.com/ladisch-business/ladisch-energie.git
cd ladisch-energie
```

2. Umgebungsvariablen konfigurieren:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

3. Anwendung starten:
```bash
docker-compose up -d
```

4. Anwendung öffnen:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Datenbank: localhost:5432

### Lokale Entwicklung

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📁 Projektstruktur

```
ladisch-energie/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── database/
│   │   └── init.sql
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── main.jsx
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🔧 Konfiguration

### Umgebungsvariablen

#### Backend (.env)
```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ladisch_energie
JWT_SECRET=your-super-secret-jwt-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001
```

## 📊 Datenbank Schema

Die Datenbank umfasst folgende Haupttabellen:
- `customers` - Kundendaten (DSGVO-konform)
- `appointments` - Terminbuchungen
- `contact_inquiries` - Kontaktanfragen
- `services` - Dienstleistungen (CMS)
- `faqs` - Häufige Fragen

## 🔒 Sicherheit & Datenschutz

- **HTTPS**: SSL-Verschlüsselung in Produktion
- **DSGVO**: Vollständige Compliance mit Einverständniserklärungen
- **Rate Limiting**: Schutz vor Missbrauch
- **Input Validation**: Umfassende Validierung aller Eingaben
- **CORS**: Konfigurierte Cross-Origin-Requests

## 🎨 Design & Barrierefreiheit

- **WCAG 2.1 AA**: Vollständige Barrierefreiheit
- **Responsive Design**: Optimiert für alle Bildschirmgrößen
- **Hoher Kontrast**: Farbenblind-freundliche Farbpalette
- **Keyboard Navigation**: Vollständige Tastatursteuerung
- **Screen Reader**: Optimiert für Screenreader

## 📝 API Dokumentation

### Hauptendpunkte

#### Services
- `GET /api/services` - Alle aktiven Services
- `GET /api/services/:slug` - Service Details

#### Kontakt
- `POST /api/contact` - Kontaktformular senden

#### Termine
- `POST /api/appointments` - Termin buchen
- `GET /api/appointments` - Termine abrufen

#### FAQ
- `GET /api/faqs` - Alle FAQs
- `GET /api/faqs/categories` - FAQ Kategorien

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Linting
```bash
# Backend
cd backend && npm run lint

# Frontend
cd frontend && npm run lint
```

## 🚀 Deployment

### Produktion mit Docker
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Umgebungsvariablen für Produktion
- Sichere JWT Secrets verwenden
- Produktions-Datenbank konfigurieren
- E-Mail-Konfiguration anpassen
- HTTPS aktivieren

## 📞 Support

Bei Fragen oder Problemen:
- E-Mail: info@ladisch-energie.de
- Telefon: +49 123 456 789

## 📄 Lizenz

© 2024 Ladisch Energie GmbH. Alle Rechte vorbehalten.

## 🤝 Beitragen

1. Fork des Repositories
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📈 Roadmap

- [ ] Multi-Language Support
- [ ] Advanced Analytics Dashboard
- [ ] Mobile App
- [ ] Integration mit weiteren Energieversorgern
- [ ] KI-basierte Tarifempfehlungen
