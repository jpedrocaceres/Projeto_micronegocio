'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { AppLayout, type Language } from '@/components';
import { FiPlus, FiClock, FiMapPin, FiUser, FiCalendar } from 'react-icons/fi';

const AppointmentsContent = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [language, setLanguage] = useState<Language>("pt");

  // Mock appointments data
  const [appointments] = useState([
    {
      id: 1,
      service: "Hair Cut & Styling",
      barber: "John Smith",
      date: "2025-07-25",
      time: "10:00 AM",
      location: "Downtown Barbershop",
      status: "confirmed"
    },
    {
      id: 2,
      service: "Beard Trim",
      barber: "Mike Johnson",
      date: "2025-07-28",
      time: "2:30 PM", 
      location: "City Center Salon",
      status: "pending"
    }
  ]);

  // Language translations
  const translations = {
    en: {
      myAppointments: "My Appointments",
      bookAppointment: "Book Appointment",
      noAppointments: "No appointments",
      noAppointmentsDesc: "Get started by booking your first appointment.",
      reschedule: "Reschedule",
      cancel: "Cancel",
      home: "Home",
      appointments: "Appointments",
      profile: "Profile",
      logout: "Logout",
      barber: "Barber",
      confirmed: "Confirmed",
      pending: "Pending",
      cancelled: "Cancelled",
    },
    es: {
      myAppointments: "Mis Citas",
      bookAppointment: "Reservar Cita",
      noAppointments: "Sin citas",
      noAppointmentsDesc: "Comienza reservando tu primera cita.",
      reschedule: "Reprogramar",
      cancel: "Cancelar",
      home: "Inicio",
      appointments: "Citas",
      profile: "Perfil",
      logout: "Cerrar Sesión",
      barber: "Barbero",
      confirmed: "Confirmado",
      pending: "Pendiente",
      cancelled: "Cancelado",
    },
    pt: {
      myAppointments: "Meus Agendamentos",
      bookAppointment: "Agendar Horário",
      noAppointments: "Nenhum agendamento",
      noAppointmentsDesc: "Comece agendando seu primeiro horário.",
      reschedule: "Reagendar",
      cancel: "Cancelar",
      home: "Início",
      appointments: "Agendamentos",
      profile: "Perfil",
      logout: "Sair",
      barber: "Barbeiro",
      confirmed: "Confirmado",
      pending: "Pendente",
      cancelled: "Cancelado",
    },
    fr: {
      myAppointments: "Mes Rendez-vous",
      bookAppointment: "Prendre Rendez-vous",
      noAppointments: "Aucun rendez-vous",
      noAppointmentsDesc: "Commencez par prendre votre premier rendez-vous.",
      reschedule: "Reprogrammer",
      cancel: "Annuler",
      home: "Accueil",
      appointments: "Rendez-vous",
      profile: "Profil",
      logout: "Déconnexion",
      barber: "Barbier",
      confirmed: "Confirmé",
      pending: "En attente",
      cancelled: "Annulé",
    },
  };

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const t = translations[language as keyof typeof translations] as {
    [key: string]: string;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return t.confirmed;
      case 'pending':
        return t.pending;
      case 'cancelled':
        return t.cancelled;
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AppLayout
      language={language}
      onLanguageChange={setLanguage}
      onLogout={handleLogout}
    >
        {/* Header with Book Appointment button */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {t.myAppointments}
          </h2>
          <button className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto">
            <FiPlus className="w-4 h-4" />
            <span>{t.bookAppointment}</span>
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-12 px-4">
              <FiCalendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{t.noAppointments}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {t.noAppointmentsDesc}
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  <FiPlus className="w-4 h-4 mr-2" />
                  {t.bookAppointment}
                </button>
              </div>
            </div>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                {/* Mobile Layout */}
                <div className="sm:hidden">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-2">
                      {appointment.service}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {getStatusText(appointment.status)}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FiUser className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{t.barber}: {appointment.barber}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })} at {appointment.time}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{appointment.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      {t.reschedule}
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 border border-red-200 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      {t.cancel}
                    </button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {appointment.service}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {getStatusText(appointment.status)}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <FiUser className="w-4 h-4 mr-2" />
                        <span>{t.barber}: {appointment.barber}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="w-4 h-4 mr-2" />
                        <span>
                          {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-2" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-6 flex space-x-2">
                    <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      {t.reschedule}
                    </button>
                    <button className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors">
                      {t.cancel}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
    </AppLayout>
  );
};

const Appointments = () => {
  return <AppointmentsContent />;
};

export default Appointments; 