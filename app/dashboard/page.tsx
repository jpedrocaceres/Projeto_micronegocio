'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiHome, FiCalendar, FiUser, FiLogOut, FiSettings, FiBell, FiGlobe, FiCheck, FiChevronDown, FiMoon, FiSun } from 'react-icons/fi';
import { createClient } from '@/utils/supabase/client';

export default function Dashboard() {
  const router = useRouter();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'pt' | 'fr'>('pt');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
    const languages = [
      { code: "pt", name: "Português", flag: "🇧🇷" },
      { code: "en", name: "English", flag: "🇺🇸" },
      { code: "es", name: "Español", flag: "🇪🇸" },
      { code: "fr", name: "Français", flag: "🇫🇷" },
    ];
  
    const translations = {
      en: {
        dashboard: "Dashboard",
        home: "Home",
        appointments: "Appointments",
        profile: "Profile",
        welcome: "Welcome back!",
        quickActions: "Quick Actions",
        bookAppointment: "Book Appointment",
        viewProfile: "View Profile",
        recentActivity: "Recent Activity",
        noActivity: "No recent activity",
        overview: "Overview",
        totalAppointments: "Total Appointments",
        upcoming: "Upcoming",
        completed: "Completed",
        upcomingAppointments: "Upcoming Appointments",
        viewAll: "View All",
        noUpcoming: "No upcoming appointments",
        bookFirst: "Book your first appointment",
        accountSummary: "Account Summary",
        accountStatus: "Account Status",
        active: "Active",
        memberSince: "Member Since",
        profileCompletion: "Profile Completion",
        logout: "Logout"
      },
      pt: {
        dashboard: "Painel",
        home: "Início",
        appointments: "Agendamentos",
        profile: "Perfil",
        welcome: "Bem-vindo de volta!",
        quickActions: "Ações Rápidas",
        bookAppointment: "Agendar Consulta",
        viewProfile: "Ver Perfil",
        recentActivity: "Atividade Recente",
        noActivity: "Nenhuma atividade recente",
        overview: "Visão Geral",
        totalAppointments: "Total de Agendamentos",
        upcoming: "Próximos",
        completed: "Concluídos",
        upcomingAppointments: "Próximos Agendamentos",
        viewAll: "Ver Todos",
        noUpcoming: "Nenhum agendamento próximo",
        bookFirst: "Agende sua primeira consulta",
        accountSummary: "Resumo da Conta",
        accountStatus: "Status da Conta",
        active: "Ativo",
        memberSince: "Membro Desde",
        profileCompletion: "Completude do Perfil",
        logout: "Sair"
      },
      es: {
        dashboard: "Panel",
        home: "Inicio",
        appointments: "Citas",
        profile: "Perfil",
        welcome: "¡Bienvenido de nuevo!",
        quickActions: "Acciones Rápidas",
        bookAppointment: "Reservar Cita",
        viewProfile: "Ver Perfil",
        recentActivity: "Actividad Reciente",
        noActivity: "No hay actividad reciente",
        overview: "Resumen",
        totalAppointments: "Citas Totales",
        upcoming: "Próximas",
        completed: "Completadas",
        upcomingAppointments: "Próximas Citas",
        viewAll: "Ver Todas",
        noUpcoming: "No hay citas próximas",
        bookFirst: "Reserve su primera cita",
        accountSummary: "Resumen de Cuenta",
        accountStatus: "Estado de Cuenta",
        active: "Activo",
        memberSince: "Miembro Desde",
        profileCompletion: "Finalización del Perfil",
        logout: "Cerrar Sesión"
      },
      fr: {
        dashboard: "Tableau de bord",
        home: "Accueil",
        appointments: "Rendez-vous",
        profile: "Profil",
        welcome: "Content de vous revoir!",
        quickActions: "Actions Rapides",
        bookAppointment: "Prendre Rendez-vous",
        viewProfile: "Voir le Profil",
        recentActivity: "Activité Récente",
        noActivity: "Aucune activité récente",
        overview: "Aperçu",
        totalAppointments: "Total des Rendez-vous",
        upcoming: "À venir",
        completed: "Terminés",
        upcomingAppointments: "Rendez-vous à Venir",
        viewAll: "Voir Tout",
        noUpcoming: "Aucun rendez-vous à venir",
        bookFirst: "Prenez votre premier rendez-vous",
        accountSummary: "Résumé du Compte",
        accountStatus: "Statut du Compte",
        active: "Actif",
        memberSince: "Membre Depuis",
        profileCompletion: "Complétion du Profil",
        logout: "Déconnexion"
      }
    };
  
        const t = translations[language];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 justify-end">

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center space-x-1 p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiGlobe className="w-4 h-4 sm:w-5 sm:h-5" />
                  <FiChevronDown className="w-3 h-3" />
                </button>
                {showLanguageMenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-lg z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as "en" | "es" | "pt" | "fr");
                          setShowLanguageMenu(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 mt-1 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-xl rounded-lg"
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
                className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <FiBell className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <FiSettings className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FiLogOut className="w-4 h-4" />
                <span>{t.logout}</span>
              </button>
              <button
                onClick={handleLogout}
                className="sm:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FiLogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-14 sm:top-16 z-30 py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-start">
            <div className="flex space-x-2 sm:space-x-8 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => handleNavigation('/dashboard')}
                className="flex items-center space-x-2 py-3 sm:py-4 px-3 sm:px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap"
              >
                <FiHome className="w-4 h-4" />
                <span className="text-sm sm:text-base">{t.home}</span>
              </button>
              <button
                onClick={() => router.push('/appointments')}
                className="flex items-center space-x-2 py-3 sm:py-4 px-3 sm:px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium whitespace-nowrap transition-colors"
              >
                <FiCalendar className="w-4 h-4" />
                <span className="text-sm sm:text-base">{t.appointments}</span>
              </button>
              <button
                onClick={() => handleNavigation('/profile')}
                className="flex items-center space-x-2 py-3 sm:py-4 px-3 sm:px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium whitespace-nowrap transition-colors"
              >
                <FiUser className="w-4 h-4" />
                <span className="text-sm sm:text-base">{t.profile}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
        <div className="flex items-center">
              <b className="text-3xl sm:text-2xl font-semibold text-gray-900 dark:text-white truncate pe-2">
                {t.dashboard}
              </b>
            </div>
          {/* Mobile Welcome Section */}
          <div className="block sm:hidden">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FiUser className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t.welcome}
                  </h2>
                                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate text-start">
                      User
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Welcome Card - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:block lg:col-span-1 col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-full">
                <div className="d-flex flex-row">
                  <div className="flex-shrink-0">
                    <div className="w-45 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                      <FiUser className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t.welcome}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      User
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 h-full">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {t.quickActions}
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleNavigation('/appointments')}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>{t.bookAppointment}</span>
                    <FiCalendar className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>{t.viewProfile}</span>
                    <FiUser className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 h-full">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {t.recentActivity}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{t.noActivity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card - Additional card that appears on larger screens */}
            <div className="xl:block">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-full">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {t.overview}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.totalAppointments}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.upcoming}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.completed}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Section for larger screens */}
          <div className="lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Appointments */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t.upcomingAppointments}
                  </h3>
                  <button
                    onClick={() => handleNavigation('/appointments')}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    {t.viewAll}
                  </button>
                </div>
                <div className="text-center py-8">
                  <FiCalendar className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.noUpcoming}
                  </p>
                  <button
                    onClick={() => handleNavigation('/appointments')}
                    className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    {t.bookFirst}
                  </button>
                </div>
              </div>

              {/* Account Summary */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {t.accountSummary}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.accountStatus}</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">{t.active}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.memberSince}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">2024</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.profileCompletion}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
