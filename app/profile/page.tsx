'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiEdit,
  FiSave,
  FiX,
  FiCamera,
} from "react-icons/fi";
import { createClient } from '@/utils/supabase/client';
import { AppNavigation } from '@/components';
import { UserProfile } from '@/types/database';
import { isoToBrazilianDate } from '@/utils/dateMask';

const ProfilePage = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "es" | "pt" | "fr">("pt");

  // Form data for editing
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    date_of_birth: "",
    gender: "" as 'male' | 'female' | 'other' | 'prefer_not_to_say' | '',
  });

  // Language translations
  const translations = {
    en: {
      title: userRole === 'admin' ? "All Users" : "Profile",
      subtitle: userRole === 'admin' ? "Manage all user profiles" : "Manage your personal information",
      personalInfo: "Personal Information",
      contactInfo: "Contact Information",
      addressInfo: "Address Information",
      editProfile: "Edit Profile",
      saveChanges: "Save Changes",
      cancel: "Cancel",
      backToDashboard: "Back to Dashboard",
      profileUpdated: "Profile updated successfully!",
      errorUpdating: "Error updating profile. Please try again.",
      loading: "Loading...",
      noData: "No data available",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      city: "City",
      state: "State",
      country: "Country",
      postalCode: "Postal Code",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      preferNotToSay: "Prefer not to say",
    },
    pt: {
      title: userRole === 'admin' ? "Todos os Usuários" : "Perfil",
      subtitle: userRole === 'admin' ? "Gerencie todos os perfis de usuários" : "Gerencie suas informações pessoais",
      personalInfo: "Informações Pessoais",
      contactInfo: "Informações de Contato",
      addressInfo: "Informações de Endereço",
      editProfile: "Editar",
      saveChanges: "Salvar Alterações",
      cancel: "Cancelar",
      backToDashboard: "Voltar ao Dashboard",
      profileUpdated: "Perfil atualizado com sucesso!",
      errorUpdating: "Erro ao atualizar perfil. Tente novamente.",
      loading: "Carregando...",
      noData: "Nenhum dado disponível",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      address: "Endereço",
      city: "Cidade",
      state: "Estado",
      country: "País",
      postalCode: "CEP",
      dateOfBirth: "Data de Nascimento",
      gender: "Gênero",
      male: "Masculino",
      female: "Feminino",
      other: "Outro",
      preferNotToSay: "Prefiro não dizer",
    },
    es: {
      title: userRole === 'admin' ? "Todos los Usuarios" : "Perfil",
      subtitle: userRole === 'admin' ? "Gestiona todos los perfiles de usuarios" : "Gestiona tu información personal",
      personalInfo: "Información Personal",
      contactInfo: "Información de Contacto",
      addressInfo: "Información de Dirección",
      editProfile: "Editar Perfil",
      saveChanges: "Guardar Cambios",
      cancel: "Cancelar",
      backToDashboard: "Volver al Dashboard",
      profileUpdated: "¡Perfil actualizado exitosamente!",
      errorUpdating: "Error al actualizar perfil. Intenta de nuevo.",
      loading: "Cargando...",
      noData: "No hay datos disponibles",
      name: "Nombre Completo",
      email: "Email",
      phone: "Teléfono",
      address: "Dirección",
      city: "Ciudad",
      state: "Estado",
      country: "País",
      postalCode: "Código Postal",
      dateOfBirth: "Fecha de Nacimiento",
      gender: "Género",
      male: "Masculino",
      female: "Femenino",
      other: "Otro",
      preferNotToSay: "Prefiero no decir",
    },
    fr: {
      title: userRole === 'admin' ? "Tous les Utilisateurs" : "Profil",
      subtitle: userRole === 'admin' ? "Gérez tous les profils utilisateurs" : "Gérez vos informations personnelles",
      personalInfo: "Informations Personnelles",
      contactInfo: "Informations de Contact",
      addressInfo: "Informations d'Adresse",
      editProfile: "Modifier le Profil",
      saveChanges: "Enregistrer les Modifications",
      cancel: "Annuler",
      backToDashboard: "Retour au Tableau de Bord",
      profileUpdated: "Profil mis à jour avec succès!",
      errorUpdating: "Erreur lors de la mise à jour du profil. Veuillez réessayer.",
      loading: "Chargement...",
      noData: "Aucune donnée disponible",
      name: "Nom Complet",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse",
      city: "Ville",
      state: "État",
      country: "Pays",
      postalCode: "Code Postal",
      dateOfBirth: "Date de Naissance",
      gender: "Genre",
      male: "Masculin",
      female: "Féminin",
      other: "Autre",
      preferNotToSay: "Préfère ne pas dire",
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
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setIsLoading(true);
    setError(null);

    const supabase = createClient();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        
        // If profile doesn't exist, try to create it
        if (error.code === 'PGRST116') {
          console.log('Profile not found, creating new profile...');
          const { data: insertData, error: insertError } = await supabase
            .from('user_profiles')
            .insert({
              id: user.id,
              email: user.email,
              full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
              role: 'user'
            })
            .select()
            .single();
          
          if (insertError) {
            console.error('Error creating profile:', insertError);
            setError(t.errorUpdating);
          } else {
            setProfile(insertData);
            setUserRole(insertData.role || 'user');
            setFormData({
              full_name: insertData.full_name || "",
              email: insertData.email || "",
              phone: insertData.phone || "",
              address: insertData.address || "",
              city: insertData.city || "",
              state: insertData.state || "",
              country: insertData.country || "",
              postal_code: insertData.postal_code || "",
              date_of_birth: insertData.date_of_birth || "",
              gender: insertData.gender || "",
            });
          }
        } else {
          setError(t.errorUpdating);
        }
      } else {
        setProfile(data);
        setUserRole(data.role || 'user');
        setFormData({
          full_name: data.full_name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          country: data.country || "",
          postal_code: data.postal_code || "",
          date_of_birth: data.date_of_birth || "",
          gender: data.gender || "",
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError(t.errorUpdating);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    setSuccess(null);

    const supabase = createClient();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      const { error } = await supabase
        .from('user_profiles')
        .update({
          full_name: formData.full_name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          postal_code: formData.postal_code,
          date_of_birth: formData.date_of_birth || null,
          gender: formData.gender || null,
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating profile:', error);
        setError(t.errorUpdating);
      } else {
        setSuccess(t.profileUpdated);
        setIsEditing(false);
        await fetchProfile(); // Refresh the profile data
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(t.errorUpdating);
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return t.noData;
    return isoToBrazilianDate(dateString);
  };

  const getGenderLabel = (gender: string) => {
    switch (gender) {
      case 'male': return t.male;
      case 'female': return t.female;
      case 'other': return t.other;
      case 'prefer_not_to_say': return t.preferNotToSay;
      default: return t.noData;
    }
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
      <AppNavigation
        language={language}
        onLanguageChange={setLanguage}
        onLogout={handleLogout}
        title={t.title}
        userRole={userRole}
        showBackButton={true}
        backButtonText={t.backToDashboard}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

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

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isEditing ? t.editProfile : t.personalInfo}
            </h3>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FiEdit className="w-4 h-4" />
                <span>{t.editProfile}</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      full_name: profile?.full_name || "",
                      email: profile?.email || "",
                      phone: profile?.phone || "",
                      address: profile?.address || "",
                      city: profile?.city || "",
                      state: profile?.state || "",
                      country: profile?.country || "",
                      postal_code: profile?.postal_code || "",
                      date_of_birth: profile?.date_of_birth || "",
                      gender: profile?.gender || "",
                    });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                >
                  <FiX className="w-4 h-4" />
                  <span>{t.cancel}</span>
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
                >
                  <FiSave className="w-4 h-4" />
                  <span>{isSaving ? t.loading : t.saveChanges}</span>
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  {t.personalInfo}
                </h4>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.name}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.full_name || t.noData}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.email}
                  </label>
                  <p className="text-gray-900 dark:text-white">
                    {profile?.email || t.noData}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.phone}
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.phone || t.noData}
                    </p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.dateOfBirth}
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {formatDate(profile?.date_of_birth || "")}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.gender}
                  </label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.preferNotToSay}</option>
                      <option value="male">{t.male}</option>
                      <option value="female">{t.female}</option>
                      <option value="other">{t.other}</option>
                    </select>
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {getGenderLabel(profile?.gender || "")}
                    </p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  {t.addressInfo}
                </h4>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.address}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.address || t.noData}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.city}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.city || t.noData}
                    </p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.state}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.state || t.noData}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.country}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.country || t.noData}
                    </p>
                  )}
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.postalCode}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="postal_code"
                      value={formData.postal_code}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {profile?.postal_code || t.noData}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 