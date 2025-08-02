'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import {
  FiBell,
  FiSettings,
  FiLogOut,
  FiHome,
  FiCalendar,
  FiUser,
  FiPlus,
  FiClock,
  FiMapPin,
  FiMenu,
  FiX,
  FiGlobe,
  FiChevronDown,
  FiCheck,
  FiMoon,
  FiSun,
} from 'react-icons/fi';

const Appointments = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "es" | "pt" | "fr">("pt");
  const [showLanguageMenu, setShowLanguageMenu] = useState<boolean>(false);

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
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    document.documentElement.lang = language;
  }, [darkMode, language]);

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${darkMode ? 'dark' : ''}`}>
      {/* Mobile Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
            
            {/* Desktop header actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                >
                  <FiGlobe className="w-4 h-4" />
                  <span>
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                  <FiChevronDown className="w-4 h-4" />
                </button>

                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-48 shadow-lg bg-white dark:bg-gray-800/80 rounded-lg border-gray-200 dark:border-gray-700 z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as "en" | "es" | "pt" | "fr");
                          setShowLanguageMenu(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 mt-1 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg pb-1">{lang.flag}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {lang.name}
                          </span>
                        </div>
                        {language === lang.code && (
                          <FiCheck className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiBell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiSettings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center space-x-2 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FiLogOut className="w-4 h-4" />
                <span className="hidden lg:inline">{t.logout}</span>
              </button>
              {/* Mobile logout */}
              <button
                onClick={handleLogout}
                className="sm:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <FiLogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => {
                handleNavigation('/dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiHome className="w-5 h-5" />
              <span>{t.home}</span>
            </button>
            <button
              onClick={() => {
                handleNavigation('/appointments');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <FiCalendar className="w-5 h-5" />
              <span>{t.appointments}</span>
            </button>
            <button
              onClick={() => {
                handleNavigation('/profile');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiUser className="w-5 h-5" />
              <span>{t.profile}</span>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => handleNavigation('/dashboard')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
            >
              <FiHome className="w-4 h-4" />
              <span>{t.home}</span>
            </button>
            <button
              onClick={() => handleNavigation('/appointments')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium"
            >
              <FiCalendar className="w-4 h-4" />
              <span>{t.appointments}</span>
            </button>
            <button
              onClick={() => handleNavigation('/profile')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
            >
              <FiUser className="w-4 h-4" />
              <span>{t.profile}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
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
      </main>
    </div>
  );
};

export default Appointments; 