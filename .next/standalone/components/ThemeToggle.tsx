'use client'

import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  className?: string
  showText?: boolean
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  showText = false 
}) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
      ) : (
        <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
      {showText && (
        <span className="ml-2 text-sm">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  )
} 