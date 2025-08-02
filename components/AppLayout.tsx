'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AppHeader } from './AppHeader'
import { NavigationMenu, defaultNavigationItems, type NavigationItem } from './NavigationMenu'
import { LanguageSelector, type Language } from './LanguageSelector'

interface AppLayoutProps {
  children: React.ReactNode
  language: Language
  onLanguageChange: (language: Language) => void
  onLogout: () => void
  onSettings?: () => void
  onNotifications?: () => void
  navigationItems?: NavigationItem[]
  showNavigation?: boolean
  className?: string
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  language,
  onLanguageChange,
  onLogout,
  onSettings,
  onNotifications,
  navigationItems = defaultNavigationItems,
  showNavigation = true,
  className = ''
}) => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${className}`}>
      {/* Header */}
      <AppHeader
        language={language}
        onLanguageChange={onLanguageChange}
        onLogout={onLogout}
        onSettings={onSettings}
        onNotifications={onNotifications}
        showMobileMenu={mobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      {/* Navigation */}
      {showNavigation && (
        <NavigationMenu
          currentPath={pathname}
          items={navigationItems}
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuToggle={handleMobileMenuToggle}
        />
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
} 