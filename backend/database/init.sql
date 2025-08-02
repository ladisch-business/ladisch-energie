
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    postal_code VARCHAR(10),
    city VARCHAR(100),
    consent_marketing BOOLEAN DEFAULT FALSE,
    consent_data_processing BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    appointment_type VARCHAR(50) NOT NULL, -- 'consultation', 'home_visit'
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    duration_minutes INTEGER DEFAULT 60,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled', 'completed'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    consent_data_processing BOOLEAN NOT NULL DEFAULT TRUE,
    status VARCHAR(20) DEFAULT 'new', -- 'new', 'in_progress', 'resolved'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT,
    content TEXT,
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services (title, slug, description, content, sort_order) VALUES
('Energieberatung für Privatkunden', 'energieberatung-privat', 'Umfassende Beratung für Privatpersonen zu Energieoptimierung und Kosteneinsparung', 'Detaillierte Energieberatung für Ihr Zuhause...', 1),
('Gewerbekunden-Beratung', 'energieberatung-gewerbe', 'Spezialisierte Energielösungen für Unternehmen und Gewerbetreibende', 'Professionelle Energieoptimierung für Ihr Unternehmen...', 2),
('Erneuerbare Energien', 'erneuerbare-energien', 'Beratung zu Photovoltaik, Windkraft und anderen nachhaltigen Energiequellen', 'Nachhaltige Energielösungen für die Zukunft...', 3),
('Energieaudit', 'energieaudit', 'Professionelle Energieaudits nach DIN EN 16247', 'Systematische Analyse Ihres Energieverbrauchs...', 4);

INSERT INTO faqs (question, answer, category, sort_order) VALUES
('Was ist ein Energiemakler?', 'Ein Energiemakler vermittelt zwischen Energieversorgern und Verbrauchern und hilft dabei, den optimalen Energietarif zu finden.', 'Allgemein', 1),
('Kostet die Beratung etwas?', 'Die Erstberatung ist für Sie kostenfrei. Wir finanzieren uns über Provisionen der Energieversorger.', 'Kosten', 2),
('Wie lange dauert ein Tarifwechsel?', 'Ein Tarifwechsel dauert in der Regel 4-6 Wochen, abhängig von den Kündigungsfristen Ihres aktuellen Vertrags.', 'Tarifwechsel', 3),
('Sind Sie deutschlandweit tätig?', 'Ja, wir beraten Kunden in ganz Deutschland und bieten sowohl Vor-Ort-Termine als auch Online-Beratungen an.', 'Service', 4);

CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_appointments_customer_id ON appointments(customer_id);
CREATE INDEX idx_appointments_date ON appointments(preferred_date);
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_services_active ON services(is_active);
CREATE INDEX idx_faqs_category ON faqs(category);
CREATE INDEX idx_faqs_active ON faqs(is_active);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
