'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiPlus,
  FiEdit3,
  FiTrash2,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiX,
  FiCheck,
  FiGlobe,
} from "react-icons/fi";
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration_minutes: number;
  is_active: boolean;
  created_at: string;
}

const ServicesPage = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [services, setServices] = useState<Service[]>([]);
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "es" | "pt" | "fr">("pt");
  const [showForm, setShowForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration_minutes: ''
  });

  // Language translations
  const translations = {
    en: {
      title: "Services",
      subtitle: "Manage your services",
      addService: "Add Service",
      editService: "Edit Service",
      serviceName: "Service Name",
      description: "Description",
      price: "Price",
      duration: "Duration (minutes)",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      active: "Active",
      inactive: "Inactive",
      noServices: "No services found",
      addFirstService: "Add your first service to get started",
      serviceCreated: "Service created successfully!",
      serviceUpdated: "Service updated successfully!",
      serviceDeleted: "Service deleted successfully!",
      errorCreating: "Error creating service. Please try again.",
      errorUpdating: "Error updating service. Please try again.",
      errorDeleting: "Error deleting service. Please try again.",
      loading: "Loading...",
      confirmDelete: "Are you sure you want to delete this service?",
      deleteWarning: "This action cannot be undone.",
      yes: "Yes",
      no: "No",
      backToDashboard: "Back to Dashboard",
    },
    pt: {
      title: "Serviços",
      subtitle: "Gerencie seus serviços",
      addService: "Adicionar Serviço",
      editService: "Editar Serviço",
      serviceName: "Nome do Serviço",
      description: "Descrição",
      price: "Preço",
      duration: "Duração (minutos)",
      save: "Salvar",
      cancel: "Cancelar",
      delete: "Excluir",
      edit: "Editar",
      active: "Ativo",
      inactive: "Inativo",
      noServices: "Nenhum serviço encontrado",
      addFirstService: "Adicione seu primeiro serviço para começar",
      serviceCreated: "Serviço criado com sucesso!",
      serviceUpdated: "Serviço atualizado com sucesso!",
      serviceDeleted: "Serviço excluído com sucesso!",
      errorCreating: "Erro ao criar serviço. Tente novamente.",
      errorUpdating: "Erro ao atualizar serviço. Tente novamente.",
      errorDeleting: "Erro ao excluir serviço. Tente novamente.",
      loading: "Carregando...",
      confirmDelete: "Tem certeza que deseja excluir este serviço?",
      deleteWarning: "Esta ação não pode ser desfeita.",
      yes: "Sim",
      no: "Não",
      backToDashboard: "Voltar ao Dashboard",
    },
    es: {
      title: "Servicios",
      subtitle: "Gestiona tus servicios",
      addService: "Agregar Servicio",
      editService: "Editar Servicio",
      serviceName: "Nombre del Servicio",
      description: "Descripción",
      price: "Precio",
      duration: "Duración (minutos)",
      save: "Guardar",
      cancel: "Cancelar",
      delete: "Eliminar",
      edit: "Editar",
      active: "Activo",
      inactive: "Inactivo",
      noServices: "No se encontraron servicios",
      addFirstService: "Agrega tu primer servicio para comenzar",
      serviceCreated: "¡Servicio creado exitosamente!",
      serviceUpdated: "¡Servicio actualizado exitosamente!",
      serviceDeleted: "¡Servicio eliminado exitosamente!",
      errorCreating: "Error al crear servicio. Intenta de nuevo.",
      errorUpdating: "Error al actualizar servicio. Intenta de nuevo.",
      errorDeleting: "Error al eliminar servicio. Intenta de nuevo.",
      loading: "Cargando...",
      confirmDelete: "¿Estás seguro de que quieres eliminar este servicio?",
      deleteWarning: "Esta acción no se puede deshacer.",
      yes: "Sí",
      no: "No",
      backToDashboard: "Volver al Dashboard",
    },
    fr: {
      title: "Services",
      subtitle: "Gérez vos services",
      addService: "Ajouter un Service",
      editService: "Modifier le Service",
      serviceName: "Nom du Service",
      description: "Description",
      price: "Prix",
      duration: "Durée (minutes)",
      save: "Enregistrer",
      cancel: "Annuler",
      delete: "Supprimer",
      edit: "Modifier",
      active: "Actif",
      inactive: "Inactif",
      noServices: "Aucun service trouvé",
      addFirstService: "Ajoutez votre premier service pour commencer",
      serviceCreated: "Service créé avec succès!",
      serviceUpdated: "Service mis à jour avec succès!",
      serviceDeleted: "Service supprimé avec succès!",
      errorCreating: "Erreur lors de la création du service. Veuillez réessayer.",
      errorUpdating: "Erreur lors de la mise à jour du service. Veuillez réessayer.",
      errorDeleting: "Erreur lors de la suppression du service. Veuillez réessayer.",
      loading: "Chargement...",
      confirmDelete: "Êtes-vous sûr de vouloir supprimer ce service?",
      deleteWarning: "Cette action ne peut pas être annulée.",
      yes: "Oui",
      no: "Non",
      backToDashboard: "Retour au Dashboard",
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

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setIsLoading(true);
    const supabase = createClient();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      // Get user role
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Error fetching user profile:', profileError);
      } else {
        setUserRole(profileData?.role || 'user');
      }

      // Fetch all services (public access)
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.price || !formData.duration_minutes) {
      setError('Please fill in all required fields');
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

      const serviceData = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
        duration_minutes: parseInt(formData.duration_minutes),
        is_active: true,
      };

      let result;
      if (isEditing && editingService) {
        result = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);
      } else {
        result = await supabase
          .from('services')
          .insert(serviceData);
      }

      if (result.error) {
        console.error('Error saving service:', result.error);
        setError(isEditing ? t.errorUpdating : t.errorCreating);
      } else {
        setSuccess(isEditing ? t.serviceUpdated : t.serviceCreated);
        setShowForm(false);
        resetForm();
        fetchServices();
      }
    } catch (error) {
      console.error('Error saving service:', error);
      setError(isEditing ? t.errorUpdating : t.errorCreating);
    } finally {
      setIsCreating(false);
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      description: service.description,
      price: service.price.toString(),
      duration_minutes: service.duration_minutes.toString()
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = async (serviceId: string) => {
    if (!confirm(t.confirmDelete)) return;

    setIsCreating(true);
    setError(null);
    setSuccess(null);

    const supabase = createClient();

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', serviceId);

      if (error) {
        console.error('Error deleting service:', error);
        setError(t.errorDeleting);
      } else {
        setSuccess(t.serviceDeleted);
        fetchServices();
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      setError(t.errorDeleting);
    } finally {
      setIsCreating(false);
    }
  };

  const handleToggleActive = async (service: Service) => {
    const supabase = createClient();

    try {
      const { error } = await supabase
        .from('services')
        .update({ is_active: !service.is_active })
        .eq('id', service.id);

      if (error) {
        console.error('Error updating service:', error);
        setError(t.errorUpdating);
      } else {
        fetchServices();
      }
    } catch (error) {
      console.error('Error updating service:', error);
      setError(t.errorUpdating);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      duration_minutes: ''
    });
    setIsEditing(false);
    setEditingService(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    resetForm();
  };

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
                onClick={() => router.push('/dashboard')}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <FiX className="w-5 h-5" />
                <span className="hidden sm:inline">{t.backToDashboard}</span>
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
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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

        {/* Add Service Button - Admin Only */}
        {!showForm && userRole === 'admin' && (
          <div className="mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiPlus className="w-4 h-4 mr-2" />
              {t.addService}
            </button>
          </div>
        )}

        {/* Service Form */}
        {showForm && (
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {isEditing ? t.editService : t.addService}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.serviceName} *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Ex: Corte, Barba, Sobrancelha"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.description}
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Descrição detalhada do serviço"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.price} *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">R$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.duration} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.duration_minutes}
                    onChange={(e) => setFormData({ ...formData, duration_minutes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="30"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  disabled={isCreating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isCreating ? t.loading : t.save}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {t.cancel}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Services List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          {services.length > 0 ? (
            <div className="overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.title} ({services.length})
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {services.map((service) => (
                  <div key={service.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                            {service.name}
                          </h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            service.is_active
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                          }`}>
                            {service.is_active ? t.active : t.inactive}
                          </span>
                        </div>
                        
                        {service.description && (
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {service.description}
                          </p>
                        )}
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <FiDollarSign className="w-4 h-4" />
                            <span>R$ {service.price.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FiClock className="w-4 h-4" />
                            <span>{service.duration_minutes} min</span>
                          </div>
                        </div>
                      </div>
                      
                      {userRole === 'admin' && (
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleEdit(service)}
                            className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            title={t.edit}
                          >
                            <FiEdit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleToggleActive(service)}
                            className={`p-2 transition-colors ${
                              service.is_active
                                ? 'text-green-400 hover:text-red-600 dark:hover:text-red-400'
                                : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                            }`}
                            title={service.is_active ? t.inactive : t.active}
                          >
                            <FiCheck className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(service.id)}
                            className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            title={t.delete}
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <FiFileText className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {t.noServices}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {userRole === 'admin' ? t.addFirstService : 'Nenhum serviço disponível no momento.'}
              </p>
              {userRole === 'admin' && (
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FiPlus className="w-4 h-4 mr-2" />
                  {t.addService}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
