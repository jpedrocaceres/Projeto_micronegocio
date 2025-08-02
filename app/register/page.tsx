'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiEye,
  FiEyeOff,
  FiGlobe,
  FiMail,
  FiLock,
  FiUser,
  FiChevronDown,
  FiCheck,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaGoogle, FaFacebook, FaApple, FaGithub } from "react-icons/fa";
import validator from "validator";
import { createClient } from '@/utils/supabase/client';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

const RegisterScreen = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "es" | "pt" | "fr">("pt");
  const [showLanguageMenu, setShowLanguageMenu] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agree: boolean;
  }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Language translations
  const translations = {
    en: {
      welcome: "Create Account",
      subtitle: "Sign up to get started",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      agree: "I agree to the terms and conditions",
      signup: "Sign Up",
      signin: "Sign In",
      haveAccount: "Already have an account?",
      or: "or continue with",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      passwordRequired: "Password is required",
      confirmPasswordRequired: "Please confirm your password",
      passwordsNotMatch: "Passwords do not match",
      invalidEmail: "Please enter a valid email",
      agreeRequired: "You must agree to the terms",
      success: "Account created successfully!",
      error: "Failed to create account. Please try again.",
    },
    es: {
      welcome: "Crear Cuenta",
      subtitle: "Regístrate para comenzar",
      name: "Nombre Completo",
      email: "Dirección de Correo",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      agree: "Acepto los términos y condiciones",
      signup: "Registrarse",
      signin: "Iniciar Sesión",
      haveAccount: "¿Ya tienes cuenta?",
      or: "o continúa con",
      nameRequired: "El nombre es requerido",
      emailRequired: "El correo es requerido",
      passwordRequired: "La contraseña es requerida",
      confirmPasswordRequired: "Por favor confirma tu contraseña",
      passwordsNotMatch: "Las contraseñas no coinciden",
      invalidEmail: "Por favor ingresa un correo válido",
      agreeRequired: "Debes aceptar los términos",
      success: "¡Cuenta creada exitosamente!",
      error: "Error al crear cuenta. Intenta de nuevo.",
    },
    pt: {
      welcome: "Criar Conta",
      subtitle: "Cadastre-se para começar",
      name: "Nome Completo",
      email: "Endereço de Email",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      agree: "Concordo com os termos e condições",
      signup: "Cadastrar",
      signin: "Entrar",
      haveAccount: "Já tem uma conta?",
      or: "ou continue com",
      nameRequired: "Nome é obrigatório",
      emailRequired: "Email é obrigatório",
      passwordRequired: "Senha é obrigatória",
      confirmPasswordRequired: "Por favor confirme sua senha",
      passwordsNotMatch: "As senhas não coincidem",
      invalidEmail: "Por favor insira um email válido",
      agreeRequired: "Você deve concordar com os termos",
      success: "Conta criada com sucesso!",
      error: "Erro ao criar conta. Tente novamente.",
    },
    fr: {
      welcome: "Créer un Compte",
      subtitle: "Inscrivez-vous pour commencer",
      name: "Nom Complet",
      email: "Adresse Email",
      password: "Mot de Passe",
      confirmPassword: "Confirmer le Mot de Passe",
      agree: "J'accepte les termes et conditions",
      signup: "S'inscrire",
      signin: "Se Connecter",
      haveAccount: "Vous avez déjà un compte?",
      or: "ou continuer avec",
      nameRequired: "Le nom est requis",
      emailRequired: "L'email est requis",
      passwordRequired: "Le mot de passe est requis",
      confirmPasswordRequired: "Veuillez confirmer votre mot de passe",
      passwordsNotMatch: "Les mots de passe ne correspondent pas",
      invalidEmail: "Veuillez saisir un email valide",
      agreeRequired: "Vous devez accepter les termes",
      success: "Compte créé avec succès!",
      error: "Échec de la création du compte. Veuillez réessayer.",
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

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = t.nameRequired;
    }

    if (!formData.email) {
      newErrors.email = t.emailRequired;
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.password) {
      newErrors.password = t.passwordRequired;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t.confirmPasswordRequired;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.passwordsNotMatch;
    }

    if (!formData.agree) {
      newErrors.agree = t.agreeRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setAuthError(null);

    const supabase = createClient();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      });

      if (error) {
        let errorMessage = t.error;
        
        switch (error.message) {
          case 'User already registered':
            errorMessage = 'Email already registered. Please try logging in.';
            break;
          case 'Password should be at least 6 characters':
            errorMessage = 'Password must be at least 6 characters long.';
            break;
          default:
            errorMessage = error.message;
        }
        
        setAuthError(errorMessage);
      } else {
        // Registration successful
        if (data.user && !data.user.email_confirmed_at) {
          // Email confirmation required
          setAuthError('Please check your email to confirm your account before logging in.');
        } else {
          // Auto-login successful
          router.push('/dashboard');
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setAuthError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const socialProviders = [
    {
      name: "Google",
      icon: FaGoogle,
      color:
        "hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-700",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      color:
        "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-700",
    },
    {
      name: "Apple",
      icon: FaApple,
      color:
        "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-600",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color:
        "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}  
      <header className="w-full mx-auto bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-1 sm:px-6 lg:px-8">
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

            {/* Header actions */}
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
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Register Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            {/* Header */}
            <div className="px-6 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiUser className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.welcome}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="px-6 pb-8 sm:px-8 sm:pb-10 relative">
                <div className="space-y-4 sm:space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {t.name}
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border ${
                          errors.name
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 text-sm sm:text-base`}
                        placeholder="John Doe" autoComplete="name"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {t.email}
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 text-sm sm:text-base`}
                        placeholder="you@example.com" autoComplete="email"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {t.password}
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-2 sm:py-3 rounded-lg border ${
                          errors.password
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 text-sm sm:text-base`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <FiEyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <FiEye className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                      {t.confirmPassword}
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-2 sm:py-3 rounded-lg border ${
                          errors.confirmPassword
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 text-sm sm:text-base`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <FiEye className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mt-1"
                    />
                    <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {t.agree}
                    </label>
                  </div>
                  {errors.agree && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.agree}
                    </p>
                  )}

                  {/* Auth Error Message */}
                  {authError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 text-center">
                      {authError}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                      </div>
                    ) : (
                      t.signup
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        {t.or}
                      </span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {socialProviders.map((provider) => (
                      <button
                        key={provider.name}
                        type="button"
                        className={`flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 ${provider.color} text-sm sm:text-base`}
                      >
                        <provider.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="ml-2 hidden sm:inline">
                          {provider.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Sign In Link */}
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    {t.haveAccount}{" "}
                    <button
                      type="button"
                      onClick={() => router.push('/login')}
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                      id="loginButton"
                    >
                      {t.signin}
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen; 