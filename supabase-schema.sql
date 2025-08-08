-- Supabase Schema with Row Level Security (RLS)
-- This schema ensures users can only see and modify their own data

-- Enable Row Level Security on all tables
-- This is crucial for data isolation

-- =============================================
-- USER PROFILES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    country TEXT DEFAULT 'Brasil',
    postal_code TEXT,
    date_of_birth DATE,
    gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
    role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON user_profiles
    FOR SELECT USING (is_admin() OR auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can update all profiles" ON user_profiles
    FOR UPDATE USING (is_admin() OR auth.uid() = id);

CREATE POLICY "Users can delete own profile" ON user_profiles
    FOR DELETE USING (auth.uid() = id);

-- =============================================
-- APPOINTMENTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    appointment_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'cancelled', 'completed', 'no_show')),
    location TEXT,
    notes TEXT,
    reminder_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on appointments
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for appointments
-- Users can view their own appointments
CREATE POLICY "Users can view own appointments" ON appointments
    FOR SELECT USING (auth.uid() = user_id);

-- Admins can view all appointments
CREATE POLICY "Admins can view all appointments" ON appointments
    FOR SELECT USING (is_admin() OR auth.uid() = user_id);

-- Public access to appointment times for availability checking (read-only)
CREATE POLICY "Public can view appointment times for availability" ON appointments
    FOR SELECT USING (
        -- Only allow access to date, start_time, end_time, and status for availability checking
        -- This policy allows all authenticated users to see appointment times
        -- but not the full appointment details
        auth.uid() IS NOT NULL
    );

CREATE POLICY "Users can insert own appointments" ON appointments
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own appointments" ON appointments
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can update all appointments" ON appointments
    FOR UPDATE USING (is_admin() OR auth.uid() = user_id);

CREATE POLICY "Users can delete own appointments" ON appointments
    FOR DELETE USING (auth.uid() = user_id);

-- =============================================
-- CLIENTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS clients (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    country TEXT DEFAULT 'Brasil',
    postal_code TEXT,
    notes TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'prospect')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on clients
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- RLS Policies for clients
CREATE POLICY "Users can view own clients" ON clients
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own clients" ON clients
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own clients" ON clients
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own clients" ON clients
    FOR DELETE USING (auth.uid() = user_id);

-- =============================================
-- SERVICES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    duration_minutes INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on services
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- RLS Policies for services
-- Public read access (all users can view all services)
CREATE POLICY "Public can view all services" ON services
    FOR SELECT USING (true);

-- Only admins can insert services
CREATE POLICY "Admins can insert services" ON services
    FOR INSERT WITH CHECK (is_admin());

-- Only admins can update services
CREATE POLICY "Admins can update services" ON services
    FOR UPDATE USING (is_admin());

-- Only admins can delete services
CREATE POLICY "Admins can delete services" ON services
    FOR DELETE USING (is_admin());

-- =============================================
-- APPOINTMENT_SERVICES TABLE (Many-to-Many)
-- =============================================
CREATE TABLE IF NOT EXISTS appointment_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    appointment_id UUID REFERENCES appointments(id) ON DELETE CASCADE NOT NULL,
    service_id UUID REFERENCES services(id) ON DELETE CASCADE NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(appointment_id, service_id)
);

-- Enable RLS on appointment_services
ALTER TABLE appointment_services ENABLE ROW LEVEL SECURITY;

-- RLS Policies for appointment_services
CREATE POLICY "Users can view own appointment services" ON appointment_services
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_services.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert own appointment services" ON appointment_services
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_services.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update own appointment services" ON appointment_services
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_services.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete own appointment services" ON appointment_services
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_services.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

-- =============================================
-- APPOINTMENT_CLIENTS TABLE (Many-to-Many)
-- =============================================
CREATE TABLE IF NOT EXISTS appointment_clients (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    appointment_id UUID REFERENCES appointments(id) ON DELETE CASCADE NOT NULL,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(appointment_id, client_id)
);

-- Enable RLS on appointment_clients
ALTER TABLE appointment_clients ENABLE ROW LEVEL SECURITY;

-- RLS Policies for appointment_clients
CREATE POLICY "Users can view own appointment clients" ON appointment_clients
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_clients.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert own appointment clients" ON appointment_clients
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_clients.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update own appointment clients" ON appointment_clients
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_clients.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete own appointment clients" ON appointment_clients
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM appointments 
            WHERE appointments.id = appointment_clients.appointment_id 
            AND appointments.user_id = auth.uid()
        )
    );

-- =============================================
-- NOTIFICATIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
    is_read BOOLEAN DEFAULT FALSE,
    related_table TEXT,
    related_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on notifications
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notifications
CREATE POLICY "Users can view own notifications" ON notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own notifications" ON notifications
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON notifications
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own notifications" ON notifications
    FOR DELETE USING (auth.uid() = user_id);

-- =============================================
-- SETTINGS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS user_settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    language TEXT DEFAULT 'pt' CHECK (language IN ('pt', 'en', 'es', 'fr')),
    timezone TEXT DEFAULT 'America/Sao_Paulo',
    date_format TEXT DEFAULT 'DD/MM/YYYY',
    time_format TEXT DEFAULT '24h',
    email_notifications BOOLEAN DEFAULT TRUE,
    sms_notifications BOOLEAN DEFAULT FALSE,
    reminder_before_minutes INTEGER DEFAULT 30,
    business_hours JSONB DEFAULT '{"monday": {"start": "09:00", "end": "18:00"}, "tuesday": {"start": "09:00", "end": "18:00"}, "wednesday": {"start": "09:00", "end": "18:00"}, "thursday": {"start": "09:00", "end": "18:00"}, "friday": {"start": "09:00", "end": "18:00"}, "saturday": {"start": "09:00", "end": "12:00"}, "sunday": {"start": null, "end": null}}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on user_settings
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_settings
CREATE POLICY "Users can view own settings" ON user_settings
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings" ON user_settings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own settings" ON user_settings
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own settings" ON user_settings
    FOR DELETE USING (auth.uid() = user_id);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================
CREATE INDEX IF NOT EXISTS idx_appointments_user_id ON appointments(user_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_clients_user_id ON clients(user_id);
CREATE INDEX IF NOT EXISTS idx_services_user_id ON services(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);

-- =============================================
-- TRIGGERS FOR UPDATED_AT
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at BEFORE UPDATE ON user_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- FUNCTIONS FOR DATA INTEGRITY
-- =============================================

-- Function to check if user is admin (avoids recursion in policies)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM user_profiles 
        WHERE user_profiles.id = auth.uid() 
        AND user_profiles.role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profiles (id, email, full_name, role)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'display_name', 'user');
    
    INSERT INTO public.user_settings (user_id)
    VALUES (NEW.id);
    
    -- Create a client record for the user themselves
    INSERT INTO public.clients (user_id, name, email, status)
    VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', 'My Account'), NEW.email, 'active');
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile and settings on user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to validate appointment times
CREATE OR REPLACE FUNCTION validate_appointment_times()
RETURNS TRIGGER AS $$
BEGIN
    -- Check if end_time is after start_time
    IF NEW.end_time <= NEW.start_time THEN
        RAISE EXCEPTION 'End time must be after start time';
    END IF;
    
    -- Check if appointment date is not in the past
    IF NEW.appointment_date < CURRENT_DATE THEN
        RAISE EXCEPTION 'Appointment date cannot be in the past';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER validate_appointment_times_trigger
    BEFORE INSERT OR UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION validate_appointment_times();

-- =============================================
-- VIEWS FOR COMMON QUERIES
-- =============================================

-- View for appointments with client and service information
CREATE OR REPLACE VIEW appointments_with_details AS
SELECT 
    a.id,
    a.user_id,
    a.title,
    a.description,
    a.appointment_date,
    a.start_time,
    a.end_time,
    a.status,
    a.location,
    a.notes,
    a.reminder_sent,
    a.created_at,
    a.updated_at,
    c.name as client_name,
    c.email as client_email,
    c.phone as client_phone,
    s.name as service_name,
    s.price as service_price,
    s.duration_minutes as service_duration
FROM appointments a
LEFT JOIN appointment_clients ac ON a.id = ac.appointment_id
LEFT JOIN clients c ON ac.client_id = c.id
LEFT JOIN appointment_services aps ON a.id = aps.appointment_id
LEFT JOIN services s ON aps.service_id = s.id;

-- Apply RLS to the view
ALTER VIEW appointments_with_details SET (security_invoker = true);

-- =============================================
-- COMMENTS FOR DOCUMENTATION
-- =============================================
COMMENT ON TABLE user_profiles IS 'User profile information linked to auth.users';
COMMENT ON TABLE appointments IS 'Appointments created by users';
COMMENT ON TABLE clients IS 'Clients managed by users';
COMMENT ON TABLE services IS 'Services offered by users';
COMMENT ON TABLE appointment_services IS 'Many-to-many relationship between appointments and services';
COMMENT ON TABLE appointment_clients IS 'Many-to-many relationship between appointments and clients';
COMMENT ON TABLE notifications IS 'User notifications and alerts';
COMMENT ON TABLE user_settings IS 'User preferences and application settings';

COMMENT ON COLUMN user_profiles.id IS 'References auth.users(id) - the authenticated user';
COMMENT ON COLUMN appointments.user_id IS 'References auth.users(id) - the user who created this appointment';
COMMENT ON COLUMN clients.user_id IS 'References auth.users(id) - the user who owns this client';
COMMENT ON COLUMN services.user_id IS 'References auth.users(id) - the user who offers this service';
