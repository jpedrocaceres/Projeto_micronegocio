'use client'

import React, { useState } from 'react'
import { FiGlobe, FiChevronDown, FiCheck } from 'react-icons/fi'

export type Language = 'en' | 'es' | 'pt' | 'fr'

interface LanguageOption {
  code: Language
  name: string
  flag: string
}

interface LanguageSelectorProps {
  language: Language
  onLanguageChange: (language: Language) => void
  className?: string
}

const languages: LanguageOption[] = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  onLanguageChange,
  className = ''
}) => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const currentLanguage = languages.find((l) => l.code === language)

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
      >
        <FiGlobe className="w-4 h-4" />
        <span>{currentLanguage?.flag}</span>
        <FiChevronDown className="w-4 h-4" />
      </button>

      {showLanguageMenu && (
        <div className="absolute right-0 mt-2 w-48 shadow-lg bg-white dark:bg-gray-800/80 rounded-lg border-gray-200 dark:border-gray-700 z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setShowLanguageMenu(false)
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
  )
} 