'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { AppNavigation, type Language } from '@/components';
import { FiClock, FiLoader, FiTrendingUp, FiUsers, FiStar, FiAward, FiPlus, FiCalendar, FiUser, FiPackage, FiCheck } from 'react-icons/fi';
import { AppointmentWithDetails, UserProfile } from '@/types/database';
import { isoToBrazilianDate } from '@/utils/dateMask';

function DashboardContent() {
  const router = useRouter();
  const [language, setLanguage] = useState<'en' | 'es' | 'pt' | 'fr'>('pt');
  const { theme } = useTheme();
  
  // State for real data
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [appointments, setAppointments] = useState<AppointmentWithDetails[]>([]);
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user profile and appointments data
  const fetchDashboardData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Error fetching user profile:', profileError);
      } else {
        setUserProfile(profileData);
        // Set user role based on profile data
        setUserRole(profileData?.role || 'user');
      }

      // Fetch appointments based on user role
      let appointmentsQuery = supabase
        .from('appointments_with_details')
        .select('*')
        .order('appointment_date', { ascending: true })
        .order('start_time', { ascending: true });

      // If admin, fetch all appointments; if user, fetch only their appointments
      if (userRole === 'admin') {
        appointmentsQuery = appointmentsQuery;
      } else {
        appointmentsQuery = appointmentsQuery.eq('user_id', user.id);
      }

      const { data: appointmentsData, error: appointmentsError } = await appointmentsQuery;

      if (appointmentsError) {
        console.error('Error fetching appointments:', appointmentsError);
        setError('Error loading appointments');
      } else {
        setAppointments(appointmentsData || []);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Error loading dashboard data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Calculate appointment statistics
  const getAppointmentStats = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    const total = appointments.length;
    const upcoming = appointments.filter(apt => {
      const aptDate = new Date(apt.appointment_date);
      return aptDate >= today && apt.status !== 'cancelled' && apt.status !== 'completed';
    }).length;
    const completed = appointments.filter(apt => apt.status === 'completed').length;
    
    return { total, upcoming, completed };
  };

  // Get next appointments (up to 3)
  const getNextAppointments = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return appointments
      .filter(apt => {
        const aptDate = new Date(apt.appointment_date);
        return aptDate >= today && apt.status !== 'cancelled' && apt.status !== 'completed';
      })
      .slice(0, 3);
  };

  // Format date for display using Brazilian format
  const formatDate = (date: string) => {
    if (!date) return '';
    return isoToBrazilianDate(date);
  };

  // Format time for display
  const formatTime = (time: string) => {
    if (!time) return '';
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };


  

  
    const translations = {
      en: {
        dashboard: "Dashboard",
        home: "Home",
        appointments: "Appointments",
        profile: "Profile",
        services: "Services",
        welcome: "Welcome back!",
        quickActions: "Quick Actions",
        bookAppointment: "Book Appointment",
        viewProfile: "View Profile",
        manageServices: "Manage Services",
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

        logout: "Logout",
        loading: "Loading...",
        errorLoading: "Error loading data",
        retry: "Retry",
        client: "Client",
        date: "Date",
        time: "Time",
        today: "Today",
        tomorrow: "Tomorrow",
        thisWeek: "This Week",
      },
      pt: {
        dashboard: "Painel",
        home: "Início",
        appointments: "Agendamentos",
        profile: "Perfil",
        services: "Serviços",
        welcome: "Bem-vindo!",
        quickActions: "Ações Rápidas",
        bookAppointment: "Agendar Consulta",
        viewProfile: "Ver Perfil",
        manageServices: "Gerenciar Serviços",
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

        logout: "Sair",
        loading: "Carregando...",
        errorLoading: "Erro ao carregar dados",
        retry: "Tentar novamente",
        client: "Cliente",
        date: "Data",
        time: "Horário",
        today: "Hoje",
        tomorrow: "Amanhã",
        thisWeek: "Esta Semana",
      },
      es: {
        dashboard: "Panel",
        home: "Inicio",
        appointments: "Citas",
        profile: "Perfil",
        services: "Servicios",
        welcome: "¡Bienvenido de nuevo!",
        quickActions: "Acciones Rápidas",
        bookAppointment: "Reservar Cita",
        viewProfile: "Ver Perfil",
        manageServices: "Gestionar Servicios",
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

        logout: "Cerrar Sesión",
        loading: "Cargando...",
        errorLoading: "Error al cargar datos",
        retry: "Reintentar",
        client: "Cliente",
        date: "Fecha",
        time: "Hora",
        today: "Hoy",
        tomorrow: "Mañana",
        thisWeek: "Esta Semana",
      },
      fr: {
        dashboard: "Tableau de bord",
        home: "Accueil",
        appointments: "Rendez-vous",
        profile: "Profil",
        services: "Services",
        welcome: "Content de vous revoir!",
        quickActions: "Actions Rapides",
        bookAppointment: "Prendre Rendez-vous",
        viewProfile: "Voir le Profil",
        manageServices: "Gérer les Services",
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

        logout: "Déconnexion",
        loading: "Chargement...",
        errorLoading: "Erreur lors du chargement des données",
        retry: "Réessayer",
        client: "Client",
        date: "Date",
        time: "Heure",
        today: "Aujourd'hui",
        tomorrow: "Demain",
        thisWeek: "Cette Semaine",
      }
    };
  
        const t = translations[language as keyof typeof translations] as {
    [key: string]: string;
  };

    useEffect(() => {
      document.documentElement.lang = language;
    }, [language]);

    const handleLogout = async () => {
      try {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push('/login');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  


  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin mx-auto mb-6"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin mx-auto" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              {t.loading}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiCalendar className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              {t.errorLoading}
            </h3>
            <button
              onClick={fetchDashboardData}
              className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <FiLoader className="w-5 h-5 mr-2" />
              {t.retry}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stats = getAppointmentStats();
  const nextAppointments = getNextAppointments();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <AppNavigation
        language={language}
        onLanguageChange={setLanguage}
        onLogout={handleLogout}
        title={t.dashboard}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center sm:text-left">
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              {t.dashboard}
            </h1>
            
          </div>

          {/* Mobile Welcome Section */}
          <div className="block sm:hidden">
            <div className="bg-slate-700 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-lg">
                    <FiUser className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold">
                    {t.welcome}
                  </h2>
                  <p className="text-slate-200">
                    {userProfile?.full_name || 'User'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Appointments */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{t.totalAppointments}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.total}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <FiCalendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{t.upcoming}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.upcoming}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            {/* Completed Appointments */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{t.completed}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{stats.completed}</p>
                </div>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                  <FiAward className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
              </div>
            </div>


          </div>

          {/* Main Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Welcome Card - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block">
              <div className="bg-slate-700 rounded-2xl shadow-xl p-8 h-full text-white">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg mb-4">
                      <FiUser className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {t.welcome}
                    </h3>
                    <p className="text-slate-200 text-lg">
                      {userProfile?.full_name || 'User'}
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <FiPackage className="w-6 h-6 mr-3 text-blue-600" />
                  {t.quickActions}
                </h3>
                <div className={`grid gap-4 ${userRole === 'admin' ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  <button
                    onClick={() => router.push('/appointments')}
                    className="group bg-slate-700 hover:bg-slate-800 text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-lg group-hover:bg-white/20 transition-all duration-300">
                        <FiCalendar className="w-6 h-6" />
                      </div>
                      <span className="font-semibold">{t.bookAppointment}</span>
                    </div>
                  </button>
                  <button
                    onClick={() => router.push('/profile')}
                    className="group bg-slate-600 hover:bg-slate-700 text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-lg group-hover:bg-white/20 transition-all duration-300">
                        <FiUser className="w-6 h-6" />
                      </div>
                      <span className="font-semibold">{t.viewProfile}</span>
                    </div>
                  </button>
                  {userRole === 'admin' && (
                    <button
                      onClick={() => router.push('/services')}
                      className="group bg-slate-500 hover:bg-slate-600 text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-lg group-hover:bg-white/20 transition-all duration-300">
                          <FiPackage className="w-6 h-6" />
                        </div>
                        <span className="font-semibold">{t.manageServices}</span>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Appointments */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center">
                    <FiCalendar className="w-5 h-5 mr-3" />
                    {t.upcomingAppointments}
                  </h3>
                  <button
                    onClick={() => router.push('/appointments')}
                    className="text-slate-200 hover:text-white font-medium transition-colors duration-200"
                  >
                    {t.viewAll}
                  </button>
                </div>
              </div>
              <div className="p-6">
                {nextAppointments.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCalendar className="w-10 h-10 text-slate-400" />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mb-4">
                      {t.noUpcoming}
                    </p>
                                    <button
                  onClick={() => router.push('/appointments')}
                  className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                      <FiPlus className="w-4 h-4 mr-2" />
                      {t.bookFirst}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {nextAppointments.map((appointment, index) => (
                      <div key={appointment.id} className="group bg-slate-50 dark:bg-slate-700 rounded-xl p-4 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                                {index + 1}
                              </div>
                              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {appointment.title}
                              </h4>
                            </div>
                            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                              <div className="flex items-center">
                                <FiClock className="w-4 h-4 mr-2 text-blue-600" />
                                <span className="font-medium">
                                  {formatDate(appointment.appointment_date)} às {formatTime(appointment.start_time)}
                                </span>
                              </div>
                              {appointment.client_name && (
                                <div className="flex items-center">
                                  <FiUsers className="w-4 h-4 mr-2 text-slate-600" />
                                  <span>{appointment.client_name}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Account Summary */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-600 p-6 text-white">
                <h3 className="text-xl font-bold flex items-center">
                  <FiAward className="w-5 h-5 mr-3" />
                  {t.accountSummary}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                        <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{t.accountStatus}</span>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">{t.active}</span>
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

export default function Dashboard() {
  return <DashboardContent />;
}
