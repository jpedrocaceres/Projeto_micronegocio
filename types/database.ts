// Database types for Supabase schema
// These types match the tables created in supabase-schema.sql

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  date_of_birth?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  created_at: string;
  updated_at: string;
}

export interface Appointment {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  appointment_date: string;
  start_time: string;
  end_time: string;
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';
  location?: string;
  notes?: string;
  reminder_sent: boolean;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  user_id: string; // References the user who owns/manages this client
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  notes?: string;
  status: 'active' | 'inactive' | 'prospect';
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  duration_minutes: number;
  price: number;
  category?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AppointmentService {
  id: string;
  appointment_id: string;
  service_id: string;
  price: number;
  created_at: string;
}

export interface AppointmentClient {
  id: string;
  appointment_id: string;
  client_id: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  is_read: boolean;
  related_table?: string;
  related_id?: string;
  created_at: string;
}

export interface UserSettings {
  id: string;
  user_id: string;
  language: 'pt' | 'en' | 'es' | 'fr';
  timezone: string;
  date_format: string;
  time_format: string;
  email_notifications: boolean;
  sms_notifications: boolean;
  reminder_before_minutes: number;
  business_hours: BusinessHours;
  created_at: string;
  updated_at: string;
}

export interface BusinessHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  start: string | null;
  end: string | null;
}

// View types
export interface AppointmentWithDetails extends Appointment {
  client_name?: string;
  client_email?: string;
  client_phone?: string;
  service_name?: string;
  service_price?: number;
  service_duration?: number;
}

// Database enums
export type AppointmentStatus = 'scheduled' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';
export type ClientStatus = 'active' | 'inactive' | 'prospect';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';
export type Language = 'pt' | 'en' | 'es' | 'fr';

// Insert types (for creating new records)
export type InsertUserProfile = Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>;
export type InsertAppointment = Omit<Appointment, 'id' | 'created_at' | 'updated_at'>;
export type InsertClient = Omit<Client, 'id' | 'created_at' | 'updated_at'>;
export type InsertService = Omit<Service, 'id' | 'created_at' | 'updated_at'>;
export type InsertAppointmentService = Omit<AppointmentService, 'id' | 'created_at'>;
export type InsertAppointmentClient = Omit<AppointmentClient, 'id' | 'created_at'>;
export type InsertNotification = Omit<Notification, 'id' | 'created_at'>;
export type InsertUserSettings = Omit<UserSettings, 'id' | 'created_at' | 'updated_at'>;

// Update types (for updating existing records)
export type UpdateUserProfile = Partial<Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>>;
export type UpdateAppointment = Partial<Omit<Appointment, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;
export type UpdateClient = Partial<Omit<Client, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;
export type UpdateService = Partial<Omit<Service, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;
export type UpdateNotification = Partial<Omit<Notification, 'id' | 'user_id' | 'created_at'>>;
export type UpdateUserSettings = Partial<Omit<UserSettings, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;

// Database schema type
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: UserProfile;
        Insert: InsertUserProfile;
        Update: UpdateUserProfile;
      };
      appointments: {
        Row: Appointment;
        Insert: InsertAppointment;
        Update: UpdateAppointment;
      };
      clients: {
        Row: Client;
        Insert: InsertClient;
        Update: UpdateClient;
      };
      services: {
        Row: Service;
        Insert: InsertService;
        Update: UpdateService;
      };
      appointment_services: {
        Row: AppointmentService;
        Insert: InsertAppointmentService;
        Update: Partial<Omit<AppointmentService, 'id' | 'created_at'>>;
      };
      appointment_clients: {
        Row: AppointmentClient;
        Insert: InsertAppointmentClient;
        Update: Partial<Omit<AppointmentClient, 'id' | 'created_at'>>;
      };
      notifications: {
        Row: Notification;
        Insert: InsertNotification;
        Update: UpdateNotification;
      };
      user_settings: {
        Row: UserSettings;
        Insert: InsertUserSettings;
        Update: UpdateUserSettings;
      };
    };
    Views: {
      appointments_with_details: {
        Row: AppointmentWithDetails;
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      appointment_status: AppointmentStatus;
      client_status: ClientStatus;
      notification_type: NotificationType;
      gender: Gender;
      language: Language;
    };
  };
}
