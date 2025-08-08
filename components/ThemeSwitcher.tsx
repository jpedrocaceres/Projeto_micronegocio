'use client'

import React, { useState, useEffect } from 'react';
import { FiDroplet, FiCheck } from 'react-icons/fi';
import { themes, applyTheme, getThemeColors, type ThemeColors } from '@/utils/themeConfig';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('professionalBlue');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('selected-theme') as keyof typeof themes;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(getThemeColors(savedTheme));
    }
  }, []);

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setCurrentTheme(themeName);
    applyTheme(getThemeColors(themeName));
    localStorage.setItem('selected-theme', themeName);
    setIsOpen(false);
  };

  const themeOptions = [
    {
      name: 'professionalBlue',
      label: 'Professional Blue',
      description: 'Corporate and trustworthy',
      preview: 'bg-blue-600'
    },
    {
      name: 'corporateGreen',
      label: 'Corporate Green',
      description: 'Growth and success',
      preview: 'bg-green-600'
    },
    {
      name: 'modernPurple',
      label: 'Modern Purple',
      description: 'Creative and innovative',
      preview: 'bg-purple-600'
    },
    {
      name: 'warmOrange',
      label: 'Warm Orange',
      description: 'Friendly and energetic',
      preview: 'bg-orange-600'
    },
    {
      name: 'elegantGray',
      label: 'Elegant Gray',
      description: 'Minimal and sophisticated',
      preview: 'bg-gray-600'
    }
  ] as const;

  return (
    <div className={`relative ${className}`}>
      {/* Theme Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
        title="Change theme"
      >
        <FiDroplet className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Theme Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl z-20">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Choose Theme
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Select your preferred color scheme
              </p>
            </div>
            
            <div className="max-h-64 overflow-y-auto">
              {themeOptions.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 border-b border-slate-100 dark:border-slate-700 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full ${theme.preview} flex-shrink-0`}></div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {theme.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {theme.description}
                      </div>
                    </div>
                  </div>
                  
                  {currentTheme === theme.name && (
                    <FiCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
