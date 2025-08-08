'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiMapPin,
  FiChevronLeft,
  FiGlobe,
  FiCheck,
  FiX,
  FiPlus,
  FiEdit3,
} from "react-icons/fi";
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { isoToBrazilianDate } from '@/utils/dateMask';

interface TimeSlot {
  time: string;
  available: boolean;
  formatted: string;
}

interface Service {
  id: string;
  name: string;
  duration_minutes: number;
  price: number;
  description?: string;
}

const NewAppointmentPage = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "es" | "pt" | "fr">("pt");
  const [step, setStep] = useState<'date' | 'time' | 'service' | 'confirm'>('date');

  // Fetch services from database
  const fetchServices = async () => {
    setIsLoading(true);
    const supabase = createClient();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) {
        console.error('Error fetching services:', error);
        setError(t.errorCreating);
      } else {
        setServices(data || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setError(t.errorCreating);
    } finally {
      setIsLoading(false);
    }
  };

  // Language translations
  const translations = {
    en: {
      title: "New Appointment",
      subtitle: "Schedule your appointment",
      backToAppointments: "Back to Appointments",
      selectDate: "Select Date",
      selectTime: "Select Time",
      selectService: "Select Service",
      confirmAppointment: "Confirm Appointment",
      availableSlots: "Available Slots",
      noAvailableSlots: "No available slots for this date",
      selectDifferentDate: "Please select a different date",
      businessHours: "Business Hours",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      next: "Next",
      previous: "Previous",
      confirm: "Confirm",
      cancel: "Cancel",
      appointmentDetails: "Appointment Details",
      date: "Date",
      time: "Time",
      service: "Service",
      duration: "Duration",
      price: "Price",
      total: "Total",
      createAppointment: "Create Appointment",
      appointmentCreated: "Appointment created successfully!",
      errorCreating: "Error creating appointment. Please try again.",
      loading: "Loading...",
      noServices: "No services available",
      selectServiceFirst: "Please select a service first",
      noTimeSelected: "Please select a time",
      noDateSelected: "Please select a date",
             appointmentTitle: "Appointment",
               notes: "Notes (Optional)",
        location: "Location (Optional)",
        unavailable: "Unavailable",
        available: "Available",
        selectedServices: "Selected Services",
        totalDuration: "Total Duration",
    },
    pt: {
      title: "Novo Agendamento",
      subtitle: "Agende sua consulta",
      backToAppointments: "Voltar aos Agendamentos",
      selectDate: "Selecionar Data",
      selectTime: "Selecionar Horário",
      selectService: "Selecionar Serviço",
      confirmAppointment: "Confirmar Agendamento",
      availableSlots: "Horários Disponíveis",
      noAvailableSlots: "Nenhum horário disponível para esta data",
      selectDifferentDate: "Por favor selecione uma data diferente",
      businessHours: "Horário de Funcionamento",
      monday: "Segunda-feira",
      tuesday: "Terça-feira",
      wednesday: "Quarta-feira",
      thursday: "Quinta-feira",
      friday: "Sexta-feira",
      saturday: "Sábado",
      sunday: "Domingo",
      closed: "Fechado",
      next: "Próximo",
      previous: "Anterior",
      confirm: "Confirmar",
      cancel: "Cancelar",
      appointmentDetails: "Detalhes do Agendamento",
      date: "Data",
      time: "Horário",
      service: "Serviço",
      duration: "Duração",
      price: "Preço",
      total: "Total",
      createAppointment: "Criar Agendamento",
      appointmentCreated: "Agendamento criado com sucesso!",
      errorCreating: "Erro ao criar agendamento. Tente novamente.",
      loading: "Carregando...",
      noServices: "Nenhum serviço disponível",
      selectServiceFirst: "Por favor selecione um serviço primeiro",
      noTimeSelected: "Por favor selecione um horário",
      noDateSelected: "Por favor selecione uma data",
             appointmentTitle: "Agendamento",
               notes: "Observações (Opcional)",
        location: "Local (Opcional)",
        unavailable: "Indisponível",
        available: "Disponível",
        selectedServices: "Serviços Selecionados",
        totalDuration: "Duração Total",
    },
    es: {
      title: "Nueva Cita",
      subtitle: "Programa tu cita",
      backToAppointments: "Volver a las Citas",
      selectDate: "Seleccionar Fecha",
      selectTime: "Seleccionar Hora",
      selectService: "Seleccionar Servicio",
      confirmAppointment: "Confirmar Cita",
      availableSlots: "Horarios Disponibles",
      noAvailableSlots: "No hay horarios disponibles para esta fecha",
      selectDifferentDate: "Por favor selecciona una fecha diferente",
      businessHours: "Horario de Atención",
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      closed: "Cerrado",
      next: "Siguiente",
      previous: "Anterior",
      confirm: "Confirmar",
      cancel: "Cancelar",
      appointmentDetails: "Detalles de la Cita",
      date: "Fecha",
      time: "Hora",
      service: "Servicio",
      duration: "Duración",
      price: "Precio",
      total: "Total",
      createAppointment: "Crear Cita",
      appointmentCreated: "¡Cita creada exitosamente!",
      errorCreating: "Error al crear cita. Intenta de nuevo.",
      loading: "Cargando...",
      noServices: "No hay servicios disponibles",
      selectServiceFirst: "Por favor selecciona un servicio primero",
      noTimeSelected: "Por favor selecciona una hora",
      noDateSelected: "Por favor selecciona una fecha",
             appointmentTitle: "Cita",
               notes: "Notas (Opcional)",
        location: "Ubicación (Opcional)",
        unavailable: "No Disponible",
        available: "Disponible",
        selectedServices: "Servicios Seleccionados",
        totalDuration: "Duración Total",
    },
    fr: {
      title: "Nouveau Rendez-vous",
      subtitle: "Planifiez votre rendez-vous",
      backToAppointments: "Retour aux Rendez-vous",
      selectDate: "Sélectionner la Date",
      selectTime: "Sélectionner l'Heure",
      selectService: "Sélectionner le Service",
      confirmAppointment: "Confirmer le Rendez-vous",
      availableSlots: "Créneaux Disponibles",
      noAvailableSlots: "Aucun créneau disponible pour cette date",
      selectDifferentDate: "Veuillez sélectionner une date différente",
      businessHours: "Heures d'Ouverture",
      monday: "Lundi",
      tuesday: "Mardi",
      wednesday: "Mercredi",
      thursday: "Jeudi",
      friday: "Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
      closed: "Fermé",
      next: "Suivant",
      previous: "Précédent",
      confirm: "Confirmer",
      cancel: "Annuler",
      appointmentDetails: "Détails du Rendez-vous",
      date: "Date",
      time: "Heure",
      service: "Service",
      duration: "Durée",
      price: "Prix",
      total: "Total",
      createAppointment: "Créer le Rendez-vous",
      appointmentCreated: "Rendez-vous créé avec succès!",
      errorCreating: "Erreur lors de la création du rendez-vous. Veuillez réessayer.",
      loading: "Chargement...",
      noServices: "Aucun service disponible",
      selectServiceFirst: "Veuillez sélectionner un service d'abord",
      noTimeSelected: "Veuillez sélectionner une heure",
      noDateSelected: "Veuillez sélectionner une date",
             appointmentTitle: "Rendez-vous",
               notes: "Notes (Optionnel)",
        location: "Lieu (Optionnel)",
        unavailable: "Indisponible",
        available: "Disponible",
        selectedServices: "Services Sélectionnés",
        totalDuration: "Durée Totale",
    },
  };

  const t = translations[language as keyof typeof translations] as {
    [key: string]: string;
  };

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  // Default business hours (can be fetched from user settings later)
  const businessHours = {
    monday: { start: "08:00", end: "20:00" },
    tuesday: { start: "08:00", end: "20:00" },
    wednesday: { start: "08:00", end: "20:00" },
    thursday: { start: "08:00", end: "20:00" },
    friday: { start: "08:00", end: "20:00" },
    saturday: { start: "08:00", end: "17:00" },
    sunday: { start: null, end: null },
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      generateAvailableSlots();
    }
  }, [selectedDate]);



  const generateAvailableSlots = async () => {
    if (!selectedDate) return;

    const date = new Date(selectedDate);
    const shortDay = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const dayMapping: { [key: string]: keyof typeof businessHours } = {
      'mon': 'monday',
      'tue': 'tuesday', 
      'wed': 'wednesday',
      'thu': 'thursday',
      'fri': 'friday',
      'sat': 'saturday',
      'sun': 'sunday'
    };
    const dayOfWeek = dayMapping[shortDay];
    const daySchedule = businessHours[dayOfWeek];

    if (!daySchedule.start || !daySchedule.end) {
      setAvailableSlots([]);
      return;
    }

    // Fetch ALL existing appointments for this date (public availability check)
    // This ensures all users see the same availability, preventing double-booking
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      setAvailableSlots([]);
      return;
    }

    const { data: existingAppointments } = await supabase
      .from('appointment_availability')
      .select('start_time, end_time')
      .eq('appointment_date', selectedDate);

    const slots: TimeSlot[] = [];
    const startTime = new Date(`2000-01-01T${daySchedule.start}`);
    const endTime = new Date(`2000-01-01T${daySchedule.end}`);
    const slotDuration = 60; // 1 hour slots

    while (startTime < endTime) {
      const timeString = startTime.toTimeString().slice(0, 5);
      
      // Calculate end time for this hour slot
      const slotEndTime = new Date(startTime.getTime() + 60 * 60000); // 1 hour
      const slotEndString = slotEndTime.toTimeString().slice(0, 5);
      
      // Check if this hour slot conflicts with existing appointments
      const isAvailable = !existingAppointments?.some(appointment => {
        const appointmentStart = appointment.start_time;
        const appointmentEnd = appointment.end_time;
        
        // Check for overlap: new appointment starts before existing ends AND new appointment ends after existing starts
        return timeString < appointmentEnd && slotEndString > appointmentStart;
      });

      // Format the time range (e.g., "08:00 - 09:00")
      const formattedStart = startTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false 
      });
      const formattedEnd = slotEndTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false 
      });

      slots.push({
        time: timeString,
        available: isAvailable,
        formatted: `${formattedStart} - ${formattedEnd}`
      });
      startTime.setMinutes(startTime.getMinutes() + slotDuration);
    }

    setAvailableSlots(slots);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
    setStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('service');
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedServices(prev => {
      const isSelected = prev.find(s => s.id === service.id);
      if (isSelected) {
        // Remove service if already selected
        return prev.filter(s => s.id !== service.id);
      } else {
        // Add service if not selected
        return [...prev, service];
      }
    });
  };

  const handleContinueToConfirm = () => {
    if (selectedServices.length > 0) {
      setStep('confirm');
    }
  };

  const handleCreateAppointment = async () => {
    if (!selectedDate || !selectedTime || selectedServices.length === 0) {
      setError(t.errorCreating);
      return;
    }

    setIsCreating(true);
    setError(null);
    setSuccess(null);

    const supabase = createClient();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      // Calculate total duration and end time
      const totalDuration = selectedServices.reduce((total, service) => total + service.duration_minutes, 0);
      const startTime = new Date(`2000-01-01T${selectedTime}`);
      const endTime = new Date(startTime.getTime() + totalDuration * 60000);
      const endTimeString = endTime.toTimeString().slice(0, 5);

      // Create service names for title
      const serviceNames = selectedServices.map(s => s.name).join(', ');
      const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);

      const { error } = await supabase
        .from('appointments')
        .insert({
          user_id: user.id,
          title: `${t.appointmentTitle} - ${serviceNames}`,
          description: `Services: ${serviceNames}`,
          appointment_date: selectedDate,
          start_time: selectedTime,
          end_time: endTimeString,
          status: 'scheduled',
          location: '',
          notes: '',
          reminder_sent: false,
        });

      if (error) {
        console.error('Error creating appointment:', error);
        setError(t.errorCreating);
      } else {
        setSuccess(t.appointmentCreated);
        setTimeout(() => {
          router.push('/appointments');
        }, 2000);
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      setError(t.errorCreating);
    } finally {
      setIsCreating(false);
    }
  };

  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    const dayNames = {
      monday: t.monday,
      tuesday: t.tuesday,
      wednesday: t.wednesday,
      thursday: t.thursday,
      friday: t.friday,
      saturday: t.saturday,
      sunday: t.sunday,
    };
    const shortDay = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const dayMapping: { [key: string]: keyof typeof dayNames } = {
      'mon': 'monday',
      'tue': 'tuesday', 
      'wed': 'wednesday',
      'thu': 'thursday',
      'fri': 'friday',
      'sat': 'saturday',
      'sun': 'sunday'
    };
    const dayKey = dayMapping[shortDay];
    return dayNames[dayKey];
  };

  const isDateAvailable = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Can't book in the past
    if (date < today) return false;
    
    // Check if it's within business hours
    const shortDay = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
    const dayMapping: { [key: string]: keyof typeof businessHours } = {
      'mon': 'monday',
      'tue': 'tuesday', 
      'wed': 'wednesday',
      'thu': 'thursday',
      'fri': 'friday',
      'sat': 'saturday',
      'sun': 'sunday'
    };
    const dayOfWeek = dayMapping[shortDay];
    const daySchedule = businessHours[dayOfWeek];
    
    return daySchedule.start !== null && daySchedule.end !== null;
  };

  const getNextAvailableDates = () => {
    const dates: string[] = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      
      if (isDateAvailable(dateString)) {
        dates.push(dateString);
      }
    }
    
    return dates;
  };

  const renderDateSelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {t.selectDate}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {getNextAvailableDates().map((date) => (
          <button
            key={date}
            onClick={() => handleDateSelect(date)}
            className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {new Date(date).getDate()}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {getDayName(date)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderTimeSelection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {t.selectTime}
        </h3>
        <button
          onClick={() => setStep('date')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          {t.previous}
        </button>
      </div>
      
      <div className="text-sm text-gray-600 dark:text-gray-400">
                                {isoToBrazilianDate(selectedDate)} - {getDayName(selectedDate)}
      </div>
      
             {availableSlots.length > 0 ? (
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
           {availableSlots.map((slot) => (
                           <button
                key={slot.time}
                onClick={() => slot.available && handleTimeSelect(slot.time)}
                disabled={!slot.available}
                className={`p-4 border rounded-lg transition-colors text-center ${
                  slot.available
                    ? 'border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer'
                    : 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-50'
                }`}
              >
                <div className={`text-sm font-medium ${
                  slot.available
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {slot.formatted}
                </div>
                <div className={`text-xs mt-1 ${
                  slot.available
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {slot.available ? t.available : t.unavailable}
                </div>
              </button>
           ))}
         </div>
      ) : (
        <div className="text-center py-8">
          <FiClock className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">{t.noAvailableSlots}</p>
          <button
            onClick={() => setStep('date')}
            className="mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            {t.selectDifferentDate}
          </button>
        </div>
      )}
    </div>
  );

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {t.selectService}
        </h3>
        <button
          onClick={() => setStep('time')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          {t.previous}
        </button>
      </div>
      
      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {isoToBrazilianDate(selectedDate)} às {selectedTime}
      </div>
      
             {services.length > 0 ? (
         <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {services.map((service) => {
               const isSelected = selectedServices.find(s => s.id === service.id);
               return (
                 <button
                   key={service.id}
                   onClick={() => handleServiceSelect(service)}
                   className={`p-6 border rounded-lg transition-colors text-center ${
                     isSelected
                       ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                       : 'border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                   }`}
                 >
                   <div className="space-y-3">
                     <div className="flex items-center justify-between">
                       <div className="text-2xl font-bold text-gray-900 dark:text-white">
                         {service.name}
                       </div>
                       {isSelected && (
                         <FiCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                       )}
                     </div>
                     {service.description && (
                       <p className="text-sm text-gray-500 dark:text-gray-400">
                         {service.description}
                       </p>
                     )}
                     <div className="text-sm text-gray-500 dark:text-gray-400">
                       {service.duration_minutes} min
                     </div>
                     <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                       R$ {service.price.toFixed(2)}
                     </div>
                   </div>
                 </button>
               );
             })}
           </div>
           
           {selectedServices.length > 0 && (
             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
               <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                 {t.selectedServices} ({selectedServices.length})
               </h4>
               <div className="space-y-2">
                 {selectedServices.map((service) => (
                   <div key={service.id} className="flex justify-between items-center text-sm">
                     <span className="text-blue-800 dark:text-blue-200">{service.name}</span>
                     <span className="text-blue-600 dark:text-blue-400">R$ {service.price.toFixed(2)}</span>
                   </div>
                 ))}
                 <div className="border-t border-blue-200 dark:border-blue-600 pt-2 mt-2">
                   <div className="flex justify-between items-center font-medium">
                     <span className="text-blue-900 dark:text-blue-100">Total:</span>
                     <span className="text-blue-600 dark:text-blue-400">
                       R$ {selectedServices.reduce((total, service) => total + service.price, 0).toFixed(2)}
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           )}
           
           <div className="flex justify-end">
             <button
               onClick={handleContinueToConfirm}
               disabled={selectedServices.length === 0}
               className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {t.next}
             </button>
           </div>
         </div>
      ) : (
        <div className="text-center py-8">
          <FiUser className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">{t.noServices}</p>
        </div>
      )}
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {t.confirmAppointment}
        </h3>
        <button
          onClick={() => setStep('service')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          {t.previous}
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {t.appointmentDetails}
        </h4>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">{t.date}:</span>
            <span className="text-gray-900 dark:text-white">
                              {isoToBrazilianDate(selectedDate)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">{t.time}:</span>
            <span className="text-gray-900 dark:text-white">{selectedTime}</span>
          </div>
          
          <div className="space-y-2">
            {selectedServices.map((service) => (
              <div key={service.id} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div>
                  <span className="text-gray-900 dark:text-white font-medium">{service.name}</span>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {service.duration_minutes} min
                  </div>
                </div>
                <span className="text-gray-900 dark:text-white">R$ {service.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">{t.total}:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                R$ {selectedServices.reduce((total, service) => total + service.price, 0).toFixed(2)}
              </span>
            </div>
                         <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
               {t.totalDuration}: {selectedServices.reduce((total, service) => total + service.duration_minutes, 0)} min
             </div>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={() => setStep('service')}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          {t.cancel}
        </button>
        <button
          onClick={handleCreateAppointment}
          disabled={isCreating}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isCreating ? t.loading : t.createAppointment}
        </button>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">{t.loading}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="w-full mx-auto bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Back button and title */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/appointments')}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <FiChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{t.backToAppointments}</span>
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t.title}
              </h1>
            </div>

            {/* Header actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguage(language === 'pt' ? 'en' : language === 'en' ? 'es' : language === 'es' ? 'fr' : 'pt')}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                >
                  <FiGlobe className="w-4 h-4" />
                  <span>
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
            <p className="text-green-600 dark:text-green-400 text-sm">{success}</p>
          </div>
        )}

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          {step === 'date' && renderDateSelection()}
          {step === 'time' && renderTimeSelection()}
          {step === 'service' && renderServiceSelection()}
          {step === 'confirm' && renderConfirmation()}
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentPage;
