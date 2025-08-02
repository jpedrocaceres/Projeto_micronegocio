'use client'

import React from 'react'
import { FiSettings, FiBell, FiLogOut } from 'react-icons/fi'

interface ConfigMenuProps {
  onLogout: () => void
  onSettings?: () => void
  onNotifications?: () => void
  className?: string
  showText?: boolean
}

export const ConfigMenu: React.FC<ConfigMenuProps> = ({
  onLogout,
  onSettings,
  onNotifications,
  className = '',
  showText = false
}) => {
  return (
    <div className={`flex items-center space-x-2 sm:space-x-4 ${className}`}>
      {/* Notifications Button */}
      {onNotifications && (
        <button
          onClick={onNotifications}
          className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Notifications"
        >
          <FiBell className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Settings Button */}
      {onSettings && (
        <button
          onClick={onSettings}
          className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Settings"
        >
          <FiSettings className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Logout Button - Desktop */}
      <button
        onClick={onLogout}
        className="hidden sm:flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <FiLogOut className="w-4 h-4" />
        {showText && <span>Logout</span>}
      </button>

      {/* Logout Button - Mobile */}
      <button
        onClick={onLogout}
        className="sm:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Logout"
      >
        <FiLogOut className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  )
} 