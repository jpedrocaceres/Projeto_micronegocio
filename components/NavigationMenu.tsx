'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FiHome, FiCalendar, FiUser } from 'react-icons/fi'

export interface NavigationItem {
  path: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavigationMenuProps {
  currentPath: string
  items: NavigationItem[]
  className?: string
  mobileMenuOpen?: boolean
  onMobileMenuToggle?: () => void
  onNavigation?: (path: string) => void
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  currentPath,
  items,
  className = '',
  mobileMenuOpen = false,
  onMobileMenuToggle,
  onNavigation
}) => {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    if (onNavigation) {
      onNavigation(path)
    } else {
      router.push(path)
    }
  }

  const isActive = (path: string) => currentPath === path

  return (
    <>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {items.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 py-3 px-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className={`hidden md:block bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {items.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium transition-colors ${
                  isActive(item.path)
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

// Default navigation items for the main app
export const defaultNavigationItems: NavigationItem[] = [
  {
    path: '/dashboard',
    label: 'Home',
    icon: FiHome
  },
  {
    path: '/appointments',
    label: 'Appointments',
    icon: FiCalendar
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: FiUser
  }
] 