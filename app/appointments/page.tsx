'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { AppNavigation, type Language } from '@/components';
import { FiPlus, FiClock, FiMapPin, FiUser, FiCalendar, FiLoader } from 'react-icons/fi';
import { AppointmentWithDetails } from '@/types/database';
import { isoToBrazilianDate } from '@/utils/dateMask';

const AppointmentsContent = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [language, setLanguage] = useState<Language>("pt");
  const [appointments, setAppointments] = useState<AppointmentWithDetails[]>([]);
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

        // Fetch appointments from database
      const fetchAppointments = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
          const supabase = createClient();
          const { data: { user } } = await supabase.auth.getUser();
          
          if (!user) {
            router.push('/login');
            return;
          }

          // Fetch user profile to get role
          const { data: profileData, error: profileError } = await supabase
            .from('user_profiles')
            .select('role')
            .eq('id', user.id)
            .single();

          if (!profileError && profileData) {
            setUserRole(profileData.role || 'user');
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

          const { data, error } = await appointmentsQuery;

      if (error) {
        console.error('Error fetching appointments:', error);
        setError('Error loading appointments');
      } else {
        setAppointments(data || []);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setError('Error loading appointments');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Language translations
  const translations = {
    en: {
      myAppointments: userRole === 'admin' ? "All Appointments" : "My Appointments",
      bookAppointment: "Book Appointment",
      noAppointments: "No appointments",
      noAppointmentsDesc: "Get started by booking your first appointment.",
      reschedule: "Reschedule",
      cancel: "Cancel",
      markCompleted: "Mark as Completed",
      home: "Home",
      appointments: "Appointments",
      profile: "Profile",
      logout: "Logout",
      barber: "Barber",
      confirmed: "Confirmed",
      pending: "Pending",
      cancelled: "Cancelled",
      scheduled: "Scheduled",
      completed: "Completed",
      noShow: "No Show",
      loading: "Loading appointments...",
      errorLoading: "Error loading appointments",
      retry: "Retry",
      services: "Services",
      client: "Client",
      date: "Date",
      time: "Time",
      status: "Status",
      location: "Location",
      notes: "Notes",
    },
    es: {
      myAppointments: userRole === 'admin' ? "Todas las Citas" : "Mis Citas",
      bookAppointment: "Reservar Cita",
      noAppointments: "Sin citas",
      noAppointmentsDesc: "Comienza reservando tu primera cita.",
      reschedule: "Reprogramar",
      cancel: "Cancelar",
      markCompleted: "Marcar como Completado",
      home: "Inicio",
      appointments: "Citas",
      profile: "Perfil",
      logout: "Cerrar Sesión",
      barber: "Barbero",
      confirmed: "Confirmado",
      pending: "Pendiente",
      cancelled: "Cancelado",
      scheduled: "Programado",
      completed: "Completada",
      noShow: "No Presentó",
      loading: "Cargando citas...",
      errorLoading: "Error al cargar citas",
      retry: "Reintentar",
      services: "Servicios",
      client: "Cliente",
      date: "Fecha",
      time: "Hora",
      status: "Estado",
      location: "Ubicación",
      notes: "Notas",
    },
    pt: {
      myAppointments: userRole === 'admin' ? "Todos os Agendamentos" : "Meus Agendamentos",
      bookAppointment: "Agendar Horário",
      noAppointments: "Nenhum agendamento",
      noAppointmentsDesc: "Comece agendando seu primeiro horário.",
      reschedule: "Reagendar",
      cancel: "Cancelar",
      markCompleted: "Marcar como Concluído",
      home: "Início",
      appointments: "Agendamentos",
      profile: "Perfil",
      logout: "Sair",
      barber: "Barbeiro",
      confirmed: "Confirmado",
      pending: "Pendente",
      cancelled: "Cancelado",
      scheduled: "Agendado",
      completed: "Concluído",
      noShow: "Não Compareceu",
      loading: "Carregando agendamentos...",
      errorLoading: "Erro ao carregar agendamentos",
      retry: "Tentar novamente",
      services: "Serviços",
      client: "Cliente",
      date: "Data",
      time: "Horário",
      status: "Status",
      location: "Local",
      notes: "Observações",
    },
    fr: {
      myAppointments: userRole === 'admin' ? "Tous les Rendez-vous" : "Mes Rendez-vous",
      bookAppointment: "Prendre Rendez-vous",
      noAppointments: "Aucun rendez-vous",
      noAppointmentsDesc: "Commencez par prendre votre premier rendez-vous.",
      reschedule: "Reprogrammer",
      cancel: "Annuler",
      markCompleted: "Marquer comme Terminé",
      home: "Accueil",
      appointments: "Rendez-vous",
      profile: "Profil",
      logout: "Déconnexion",
      barber: "Barbier",
      confirmed: "Confirmé",
      pending: "En attente",
      cancelled: "Annulé",
      scheduled: "Programmé",
      completed: "Terminé",
      noShow: "Absent",
      loading: "Chargement des rendez-vous...",
      errorLoading: "Erreur lors du chargement des rendez-vous",
      retry: "Réessayer",
      services: "Services",
      client: "Client",
      date: "Date",
      time: "Heure",
      status: "Statut",
      location: "Lieu",
      notes: "Notes",
    },
  };

  const t = translations[language as keyof typeof translations] as {
    [key: string]: string;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'no_show':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
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
      case 'scheduled':
        return t.scheduled;
      case 'cancelled':
        return t.cancelled;
      case 'completed':
        return t.completed;
      case 'no_show':
        return t.noShow;
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  const formatTime = (time: string) => {
    if (!time) return '';
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: string) => {
    if (!date) return '';
    return isoToBrazilianDate(date);
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

  const handleStatusUpdate = async (appointmentId: string, newStatus: string) => {
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', appointmentId);

      if (error) {
        console.error('Error updating appointment status:', error);
        return;
      }

      // Refresh the appointments list
      await fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <AppNavigation
        language={language}
        onLanguageChange={setLanguage}
        onLogout={handleLogout}
        userRole={userRole}
      />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <FiLoader className="mx-auto h-8 w-8 animate-spin text-blue-600" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {t.loading}
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12 px-4">
            <div className="mx-auto h-12 w-12 text-red-500 mb-4">
              <FiCalendar className="h-full w-full" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              {t.errorLoading}
            </h3>
            <button
              onClick={fetchAppointments}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {t.retry}
            </button>
          </div>
        ) : (
          <>
            {/* Header with Book Appointment button */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl text-center font-bold text-gray-900 dark:text-white">
                {t.myAppointments}
              </h2>
              <button 
                onClick={() => router.push('/appointments/new')}
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto"
              >
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
                    <button 
                      onClick={() => router.push('/appointments/new')}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
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
                          {appointment.title}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            appointment.status
                          )} ${userRole === 'admin' && appointment.status !== 'completed' && appointment.status !== 'cancelled' ? 'cursor-pointer hover:opacity-80 transition-opacity hover:scale-105' : ''}`}
                          onClick={userRole === 'admin' && appointment.status !== 'completed' && appointment.status !== 'cancelled' ? () => handleStatusUpdate(appointment.id, 'completed') : undefined}
                          title={userRole === 'admin' && appointment.status !== 'completed' && appointment.status !== 'cancelled' ? t.markCompleted : undefined}
                        >
                          {getStatusText(appointment.status)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {appointment.client_name && (
                          <div className="flex items-center">
                            <FiUser className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{t.client}: {appointment.client_name}</span>
                          </div>
                        )}
                        {appointment.service_name && (
                          <div className="flex items-center">
                            <FiCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{t.services}: {appointment.service_name}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <FiClock className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>
                            {formatDate(appointment.appointment_date)} at {formatTime(appointment.start_time)}
                          </span>
                        </div>
                        {appointment.location && (
                          <div className="flex items-center">
                            <FiMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{appointment.location}</span>
                          </div>
                        )}
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
                            {appointment.title}
                          </h3>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              appointment.status
                            )} ${userRole === 'admin' && appointment.status !== 'completed' && appointment.status !== 'cancelled' ? 'cursor-pointer hover:opacity-80 transition-opacity hover:scale-105' : ''}`}
                            onClick={userRole === 'admin' && appointment.status !== 'completed' && appointment.status !== 'cancelled' ? () => handleStatusUpdate(appointment.id, 'completed') : undefined}
                            title={userRole === 'admin' && appointment.status !== 'completed' && appointment.status !== 'cancelled' ? t.markCompleted : undefined}
                          >
                            {getStatusText(appointment.status)}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                          {appointment.client_name && (
                            <div className="flex items-center">
                              <FiUser className="w-4 h-4 mr-2" />
                              <span>{t.client}: {appointment.client_name}</span>
                            </div>
                          )}
                          {appointment.service_name && (
                            <div className="flex items-center">
                              <FiCalendar className="w-4 h-4 mr-2" />
                              <span>{t.services}: {appointment.service_name}</span>
                            </div>
                          )}
                          <div className="flex items-center">
                            <FiClock className="w-4 h-4 mr-2" />
                            <span>
                              {formatDate(appointment.appointment_date)} at {formatTime(appointment.start_time)}
                            </span>
                          </div>
                          {appointment.location && (
                            <div className="flex items-center">
                              <FiMapPin className="w-4 h-4 mr-2" />
                              <span>{appointment.location}</span>
                            </div>
                          )}
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
          </>
        )}
      </main>
    </div>
  );
};

const Appointments = () => {
  return <AppointmentsContent />;
};

export default Appointments; 