'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeToggle, ThemeSwitcher } from '@/components';
import { 
  FiHome, 
  FiCalendar, 
  FiUser, 
  FiLogOut, 
  FiSettings, 
  FiBell, 
  FiGlobe, 
  FiCheck, 
  FiChevronDown, 
  FiPackage,
  FiMenu,
  FiX
} from 'react-icons/fi';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  translations: {
    en: string;
    pt: string;
    es: string;
    fr: string;
  };
}

interface AppNavigationProps {
  language: 'en' | 'es' | 'pt' | 'fr';
  onLanguageChange: (language: 'en' | 'es' | 'pt' | 'fr') => void;
  onLogout: () => void;
  showBackButton?: boolean;
  backButtonText?: string;
  onBackClick?: () => void;
  title?: string;
  subtitle?: string;
  userRole?: 'admin' | 'user';
}

const AppNavigation: React.FC<AppNavigationProps> = ({
  language,
  onLanguageChange,
  onLogout,
  showBackButton = false,
  backButtonText,
  onBackClick,
  title,
  subtitle,
  userRole = 'user'
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileConfig, setShowMobileConfig] = useState(false);

  const languages: Language[] = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const getNavigationItems = (): NavigationItem[] => {
    const baseItems: NavigationItem[] = [
      {
        path: '/dashboard',
        label: 'home',
        icon: FiHome,
        translations: {
          en: 'Home',
          pt: 'Início',
          es: 'Inicio',
          fr: 'Accueil'
        }
      },
      {
        path: '/appointments',
        label: 'appointments',
        icon: FiCalendar,
        translations: {
          en: userRole === 'admin' ? 'All Appointments' : 'My Appointments',
          pt: userRole === 'admin' ? 'Todos os Agendamentos' : 'Meus Agendamentos',
          es: userRole === 'admin' ? 'Todas las Citas' : 'Mis Citas',
          fr: userRole === 'admin' ? 'Tous les Rendez-vous' : 'Mes Rendez-vous'
        }
      },
      {
        path: '/profile',
        label: 'profile',
        icon: FiUser,
        translations: {
          en: userRole === 'admin' ? 'All Users' : 'My Profile',
          pt: userRole === 'admin' ? 'Todos os Usuários' : 'Meu Perfil',
          es: userRole === 'admin' ? 'Todos los Usuarios' : 'Mi Perfil',
          fr: userRole === 'admin' ? 'Tous les Utilisateurs' : 'Mon Profil'
        }
      }
    ];

    // Add services page only for admin users
    if (userRole === 'admin') {
      baseItems.push({
        path: '/services',
        label: 'services',
        icon: FiPackage,
        translations: {
          en: 'Services',
          pt: 'Serviços',
          es: 'Servicios',
          fr: 'Services'
        }
      });
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  const translations = {
    en: {
      logout: "Logout",
      backToDashboard: "Back to Dashboard",
      back: "Back"
    },
    pt: {
      logout: "Sair",
      backToDashboard: "Voltar ao Dashboard",
      back: "Voltar"
    },
    es: {
      logout: "Cerrar Sesión",
      backToDashboard: "Volver al Dashboard",
      back: "Volver"
    },
    fr: {
      logout: "Déconnexion",
      backToDashboard: "Retour au Dashboard",
      back: "Retour"
    }
  };

  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false);
    setShowMobileConfig(false);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActivePath = (path: string) => {
    if (path === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(path);
  };

  const getItemLabel = (item: NavigationItem) => {
    return item.translations[language as keyof typeof item.translations];
  };

  return (
    <>
             {/* Header */}
       <header className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-40">
         <div className="w-full px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-16 sm:h-20">
             {/* Left side - Hamburger menu and title */}
             <div className="flex items-center space-x-4">
               {/* Mobile Hamburger Menu */}
               <button
                 onClick={() => setShowMobileMenu(!showMobileMenu)}
                 className="sm:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
               >
                 {showMobileMenu ? (
                   <FiX className="w-6 h-6" />
                 ) : (
                   <FiMenu className="w-6 h-6" />
                 )}
               </button>

               {/* Back button (desktop) */}
               {showBackButton && (
                 <button
                   onClick={onBackClick || (() => router.push('/dashboard'))}
                   className="hidden sm:flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                   </svg>
                   <span>{backButtonText || t.backToDashboard}</span>
                 </button>
               )}

               {/* Title */}
               {title && (
                 <div>
                   <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                     {title}
                   </h1>
                   {subtitle && (
                     <p className="text-sm text-slate-600 dark:text-slate-400">
                       {subtitle}
                     </p>
                   )}
                 </div>
               )}
             </div>

                           {/* Right side - Controls */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Desktop Controls */}
                <div className="hidden sm:flex items-center space-x-2">
                  {/* Language Selector */}
                  <div className="relative">
                    <button
                      onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                      className="flex items-center space-x-1 p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
                    >
                      <FiGlobe className="w-4 h-4 sm:w-5 sm:h-5" />
                      <FiChevronDown className="w-3 h-3" />
                    </button>
                    {showLanguageMenu && (
                      <div className="absolute right-0 mt-2 w-48 rounded-xl z-20">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              onLanguageChange(lang.code as 'en' | 'es' | 'pt' | 'fr');
                              setShowLanguageMenu(false);
                            }}
                            className="w-full flex items-center justify-between px-4 py-3 mt-1 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-xl rounded-xl backdrop-blur-lg bg-white/90 dark:bg-slate-800/90"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg pb-1">{lang.flag}</span>
                              <span className="text-sm text-slate-700 dark:text-slate-300">
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

                  {/* Theme Switcher */}
                  <ThemeSwitcher />

                  {/* Dark Mode Toggle */}
                  <ThemeToggle />

                  <button className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200">
                    <FiBell className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200">
                    <FiSettings className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={onLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
                  >
                    <FiLogOut className="w-4 h-4" />
                    <span>{t.logout}</span>
                  </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex sm:hidden items-center space-x-2">
                  {/* Mobile Config Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowMobileConfig(!showMobileConfig)}
                      className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
                    >
                      <FiSettings className="w-5 h-5" />
                    </button>
                    {showMobileConfig && (
                      <div className="absolute right-0 mt-2 w-56 rounded-xl z-20 shadow-xl backdrop-blur-lg bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700">
                        <div className="p-2 space-y-1">
                          {/* Language Selector */}
                          <div className="px-3 py-2">
                            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                              Language
                            </h3>
                            <div className="space-y-1">
                              {languages.map((lang) => (
                                <button
                                  key={lang.code}
                                  onClick={() => {
                                    onLanguageChange(lang.code as 'en' | 'es' | 'pt' | 'fr');
                                    setShowMobileConfig(false);
                                  }}
                                  className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-left transition-all duration-200 text-sm ${
                                    language === lang.code
                                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                  }`}
                                >
                                  <span className="text-base">{lang.flag}</span>
                                  <span>{lang.name}</span>
                                  {language === lang.code && (
                                    <FiCheck className="w-3 h-3 ml-auto text-blue-600" />
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="border-t border-slate-200 dark:border-slate-700 my-2" />

                          {/* Theme Controls */}
                          <div className="px-3 py-2">
                            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                              Theme
                            </h3>
                            <div className="flex items-center space-x-2">
                              <ThemeSwitcher />
                              <ThemeToggle />
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="border-t border-slate-200 dark:border-slate-700 my-2" />

                          {/* Notifications */}
                          <button className="w-full flex items-center space-x-2 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 text-sm">
                            <FiBell className="w-4 h-4" />
                            <span>Notifications</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Logout */}
                  <button
                    onClick={onLogout}
                    className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
                  >
                    <FiLogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
           </div>
         </div>
       </header>

             {/* Mobile Navigation Menu */}
       <div className={`sm:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
         showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
       }`}>
         {/* Backdrop */}
         <div 
           className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
             showMobileMenu ? 'opacity-100' : 'opacity-0'
           }`}
           onClick={() => setShowMobileMenu(false)}
         />
         
         {/* Mobile Menu Panel */}
         <div className={`absolute top-0 left-0 w-80 h-full bg-white dark:bg-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
           showMobileMenu ? 'translate-x-0' : '-translate-x-full'
         }`}>
           {/* Mobile Menu Header */}
           <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
             <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
               Menu
             </h2>
             <button
               onClick={() => setShowMobileMenu(false)}
               className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
             >
               <FiX className="w-5 h-5" />
             </button>
           </div>

           {/* Mobile Navigation Items */}
           <nav className="p-4">
             <div className="space-y-2">
               {navigationItems.map((item, index) => {
                 const Icon = item.icon;
                 const isActive = isActivePath(item.path);
                 
                 return (
                   <button
                     key={item.path}
                     onClick={() => handleNavigation(item.path)}
                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 transform hover:scale-105 ${
                       isActive
                         ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700'
                         : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                     }`}
                     style={{
                       animationDelay: `${index * 50}ms`
                     }}
                   >
                     <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`} />
                     <span className="font-medium">{getItemLabel(item)}</span>
                     {isActive && (
                       <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                     )}
                   </button>
                 );
               })}
             </div>

             {/* Mobile Menu Footer */}
             <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
               <div className="space-y-3">
                 {/* Language Selector */}
                 <div className="px-4">
                   <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                     Language
                   </h3>
                   <div className="space-y-2">
                     {languages.map((lang) => (
                       <button
                         key={lang.code}
                         onClick={() => {
                           onLanguageChange(lang.code as 'en' | 'es' | 'pt' | 'fr');
                           setShowMobileMenu(false);
                         }}
                         className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                           language === lang.code
                             ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                             : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                         }`}
                       >
                         <span className="text-lg">{lang.flag}</span>
                         <span className="text-sm">{lang.name}</span>
                         {language === lang.code && (
                           <FiCheck className="w-4 h-4 ml-auto text-blue-600" />
                         )}
                       </button>
                     ))}
                   </div>
                 </div>

                 {/* Logout Button */}
                 <div className="px-4">
                   <button
                     onClick={() => {
                       onLogout();
                       setShowMobileMenu(false);
                     }}
                     className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200"
                   >
                     <FiLogOut className="w-5 h-5" />
                     <span className="font-medium">{t.logout}</span>
                   </button>
                 </div>
               </div>
             </div>
           </nav>
         </div>
       </div>

       {/* Desktop Navigation */}
       <nav className="hidden sm:block bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50 sticky top-16 sm:top-20 z-30 py-3">
         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
           <div className="flex justify-center sm:justify-start">
             <div className="flex space-x-2 sm:space-x-8 overflow-x-auto scrollbar-hide">
               {navigationItems.map((item) => {
                 const Icon = item.icon;
                 const isActive = isActivePath(item.path);
                 
                 return (
                   <button
                     key={item.path}
                     onClick={() => handleNavigation(item.path)}
                     className={`flex items-center space-x-2 py-3 sm:py-4 px-4 sm:px-6 border-b-2 font-medium whitespace-nowrap rounded-t-xl transition-all duration-200 ${
                       isActive
                         ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                         : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/20'
                     }`}
                   >
                     <Icon className="w-4 h-4" />
                     <span className="text-sm sm:text-base">{getItemLabel(item)}</span>
                   </button>
                 );
               })}
             </div>
           </div>
         </div>
       </nav>
    </>
  );
};

export default AppNavigation;
