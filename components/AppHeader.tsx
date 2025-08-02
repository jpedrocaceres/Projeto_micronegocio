'use client'

import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { LanguageSelector, type Language } from './LanguageSelector'
import { ThemeToggle } from './ThemeToggle'
import { ConfigMenu } from './ConfigMenu'

interface AppHeaderProps {
  language: Language
  onLanguageChange: (language: Language) => void
  onLogout: () => void
  onSettings?: () => void
  onNotifications?: () => void
  showMobileMenu?: boolean
  onMobileMenuToggle?: () => void
  className?: string
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  language,
  onLanguageChange,
  onLogout,
  onSettings,
  onNotifications,
  showMobileMenu = false,
  onMobileMenuToggle,
  className = ''
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (onMobileMenuToggle) {
      onMobileMenuToggle()
    }
  }

  return (
    <header className={`bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Toggle mobile menu"
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
            <LanguageSelector
              language={language}
              onLanguageChange={onLanguageChange}
            />

            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Config Menu */}
            <ConfigMenu
              onLogout={onLogout}
              onSettings={onSettings}
              onNotifications={onNotifications}
            />
          </div>
        </div>
      </div>
    </header>
  )
} 