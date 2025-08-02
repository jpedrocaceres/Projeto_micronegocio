export type Theme = 'dark' | 'light'

export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark' // Default to dark mode
  return (localStorage.getItem('theme') as Theme) || 'dark'
}

export const setTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('theme', theme)
  applyTheme(theme)
}

export const applyTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return
  
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  root.setAttribute('data-theme', theme)
}

export const toggleTheme = (): Theme => {
  const currentTheme = getTheme()
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  setTheme(newTheme)
  return newTheme
} 