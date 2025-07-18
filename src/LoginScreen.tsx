import React, { useState, useEffect } from "react";
import {
  FiEye,
  FiEyeOff,
  FiMoon,
  FiSun,
  FiGlobe,
  FiMail,
  FiLock,
  FiUser,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";
import { FaGoogle, FaFacebook, FaApple, FaGithub } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, type AuthError } from "firebase/auth"; // Import Firebase Auth functions
import { app } from "./firebaseConfig"; // Import the initialized Firebase app

const LoginScreen = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "es" | "pt" | "fr">("pt"); // specify possible languages
  const [showLanguageMenu, setShowLanguageMenu] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    remember: boolean;
  }>({
    email: "",
    password: "",
    remember: false,
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null); // State to hold Firebase Auth errors

    // Initialize Firebase Auth
    const auth = getAuth(app);

  // Language translations
  const translations = {
    en: {
      welcome: "Welcome Back",
      subtitle: "Sign in to your account to continue",
      email: "Email Address",
      password: "Password",
      remember: "Remember me",
      forgot: "Forgot password?",
      signin: "Sign In",
      signup: "Sign Up",
      noAccount: "Don't have an account?",
      or: "or continue with",
      emailRequired: "Email is required",
      passwordRequired: "Password is required",
      invalidEmail: "Please enter a valid email",
      success: "Welcome! Login successful",
      error: "Invalid credentials. Please try again.",
    },
    es: {
      welcome: "Bienvenido de Vuelta",
      subtitle: "Inicia sesión en tu cuenta para continuar",
      email: "Dirección de Correo",
      password: "Contraseña",
      remember: "Recordarme",
      forgot: "¿Olvidaste tu contraseña?",
      signin: "Iniciar Sesión",
      signup: "Registrarse",
      noAccount: "¿No tienes cuenta?",
      or: "o continúa con",
      emailRequired: "El correo es requerido",
      passwordRequired: "La contraseña es requerida",
      invalidEmail: "Por favor ingresa un correo válido",
      success: "¡Bienvenido! Inicio de sesión exitoso",
      error: "Credenciales inválidas. Intenta de nuevo.",
    },
    pt: {
      welcome: "Bem-vindo de Volta",
      subtitle: "Entre na sua conta para continuar",
      email: "Endereço de Email",
      password: "Senha",
      remember: "Lembrar-me",
      forgot: "Esqueceu a senha?",
      signin: "Entrar",
      signup: "Cadastrar",
      noAccount: "Não tem uma conta?",
      or: "ou continue com",
      emailRequired: "Email é obrigatório",
      passwordRequired: "Senha é obrigatória",
      invalidEmail: "Por favor insira um email válido",
      success: "Bem-vindo! Login realizado com sucesso",
      error: "Credenciais inválidas. Tente novamente.",
    },
    fr: {
      welcome: "Bon Retour",
      subtitle: "Connectez-vous à votre compte pour continuer",
      email: "Adresse Email",
      password: "Mot de Passe",
      remember: "Se souvenir de moi",
      forgot: "Mot de passe oublié?",
      signin: "Se Connecter",
      signup: "S'inscrire",
      noAccount: "Vous n'avez pas de compte?",
      or: "ou continuer avec",
      emailRequired: "L'email est requis",
      passwordRequired: "Le mot de passe est requis",
      invalidEmail: "Veuillez saisir un email valide",
      success: "Bienvenue! Connexion réussie",
      error: "Identifiants invalides. Veuillez réessayer.",
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
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.lang = language;
  }, [darkMode, language]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = t.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.password) {
      newErrors.password = t.passwordRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setAuthError(null); // Clear previous errors

    // Simulate API call
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert(t.success); // Or navigate to a new page
    } catch (error) {
      const firebaseError = error as AuthError;
      let errorMessage = t.error; // Default error message
      

      // Provide more specific error messages based on Firebase Auth error codes
      switch (firebaseError.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          errorMessage = "Invalid email or password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email format.";
          break;
        case "auth/user-disabled":
          errorMessage = "Your account has been disabled.";
          break;
        default:
          errorMessage = firebaseError.message; // Use Firebase error message for unhandled errors
      }
      setAuthError(errorMessage);
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  const handleSignUp = async () => {
    if (!validateForm()) return;


    setIsLoading(true);
    setAuthError(null); // Clear previous errors


    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert(t.signupSuccess); // Or navigate to a new page
    } catch (error) {
      const firebaseError = error as AuthError;
      let errorMessage = t.signupError; // Default signup error message


      switch (firebaseError.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email address is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email format.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters.";
          break;
        default:
          errorMessage = firebaseError.message; // Use Firebase error message for unhandled errors
      }


      setAuthError(errorMessage);
      alert(errorMessage);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <FiUser className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Platform
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <div className="relative z-50">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <FiGlobe className="w-4 h-4" />
              <span className="text-sm">
                {languages.find((l) => l.code === language)?.flag}
              </span>
              <FiChevronDown className="w-4 h-4" />
            </button>

            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48  shadow-lg dark:border-gray-700 z-20 gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as "en" | "es" | "pt" | "fr");
                      setShowLanguageMenu(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 mt-1"
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
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiUser className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.welcome}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <div className="px-8 pb-8 relative">
              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.email}
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200`}
                      placeholder="you@example.com"
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.password}
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                        errors.password
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {t.remember}
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {t.forgot}
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    t.signin
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
                <div className="grid grid-cols-2 gap-3">
                  {socialProviders.map((provider) => (
                    <button
                      key={provider.name}
                      type="button"
                      className={`flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 ${provider.color}`}
                    >
                      <provider.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  {t.noAccount}{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    {t.signup}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
