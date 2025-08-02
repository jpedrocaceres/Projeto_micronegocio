# Reusable Components Documentation

This document describes all the reusable React components created for the BizManager application.

## 📁 Component Structure

```
components/
├── index.ts                 # Main exports
├── ThemeProvider.tsx        # Theme context provider
├── ThemeToggle.tsx          # Dark/Light mode toggle
├── LanguageSelector.tsx     # Language selection dropdown
├── NavigationMenu.tsx       # Navigation menu component
├── ConfigMenu.tsx           # Settings/Logout menu
├── AppHeader.tsx            # Complete header component
└── AppLayout.tsx            # Complete layout wrapper
```

## 🎨 Theme Components

### ThemeProvider
Global theme context provider that manages dark/light mode state.

```tsx
import { ThemeProvider } from '@/components'

// Wrap your app
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

### ThemeToggle
Reusable button to toggle between dark and light themes.

```tsx
import { ThemeToggle } from '@/components'

// Basic usage
<ThemeToggle />

// With custom styling
<ThemeToggle className="custom-class" showText={true} />
```

**Props:**
- `className?: string` - Additional CSS classes
- `showText?: boolean` - Show "Light"/"Dark" text (default: false)

## 🌍 Language Components

### LanguageSelector
Dropdown component for language selection with flags.

```tsx
import { LanguageSelector, type Language } from '@/components'

const [language, setLanguage] = useState<Language>('pt')

<LanguageSelector
  language={language}
  onLanguageChange={setLanguage}
  className="custom-class"
/>
```

**Supported Languages:**
- 🇧🇷 Portuguese (`pt`)
- 🇺🇸 English (`en`)
- 🇪🇸 Spanish (`es`)
- 🇫🇷 French (`fr`)

## 🧭 Navigation Components

### NavigationMenu
Responsive navigation menu with mobile support.

```tsx
import { NavigationMenu, defaultNavigationItems } from '@/components'

<NavigationMenu
  currentPath="/dashboard"
  items={defaultNavigationItems}
  mobileMenuOpen={false}
  onMobileMenuToggle={() => {}}
/>
```

**Default Navigation Items:**
- Home (`/dashboard`)
- Appointments (`/appointments`)
- Profile (`/profile`)

**Custom Navigation:**
```tsx
const customItems = [
  {
    path: '/custom',
    label: 'Custom Page',
    icon: FiCustom
  }
]

<NavigationMenu
  currentPath={pathname}
  items={customItems}
/>
```

## ⚙️ Config Components

### ConfigMenu
Menu component with settings, notifications, and logout buttons.

```tsx
import { ConfigMenu } from '@/components'

<ConfigMenu
  onLogout={handleLogout}
  onSettings={handleSettings}
  onNotifications={handleNotifications}
  showText={true}
/>
```

**Props:**
- `onLogout: () => void` - Logout handler (required)
- `onSettings?: () => void` - Settings handler (optional)
- `onNotifications?: () => void` - Notifications handler (optional)
- `showText?: boolean` - Show text labels (default: false)
- `className?: string` - Additional CSS classes

## 🎯 Layout Components

### AppHeader
Complete header component combining all header elements.

```tsx
import { AppHeader } from '@/components'

<AppHeader
  language={language}
  onLanguageChange={setLanguage}
  onLogout={handleLogout}
  onSettings={handleSettings}
  onNotifications={handleNotifications}
/>
```

### AppLayout
Complete layout wrapper with header, navigation, and content area.

```tsx
import { AppLayout } from '@/components'

<AppLayout
  language={language}
  onLanguageChange={setLanguage}
  onLogout={handleLogout}
  onSettings={handleSettings}
  onNotifications={handleNotifications}
  navigationItems={customItems}
  showNavigation={true}
>
  {/* Your page content */}
  <div>Page content goes here</div>
</AppLayout>
```

## 📱 Usage Examples

### Simple Page with AppLayout
```tsx
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { AppLayout, type Language } from '@/components'

const MyPage = () => {
  const router = useRouter()
  const [language, setLanguage] = useState<Language>('pt')

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <AppLayout
      language={language}
      onLanguageChange={setLanguage}
      onLogout={handleLogout}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Page Content
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page uses the standardized layout
        </p>
      </div>
    </AppLayout>
  )
}

export default MyPage
```

### Custom Header Only
```tsx
import { AppHeader } from '@/components'

<AppHeader
  language={language}
  onLanguageChange={setLanguage}
  onLogout={handleLogout}
  className="sticky top-0 z-50"
/>
```

### Custom Navigation
```tsx
import { NavigationMenu } from '@/components'
import { FiHome, FiSettings } from 'react-icons/fi'

const customItems = [
  { path: '/', label: 'Home', icon: FiHome },
  { path: '/settings', label: 'Settings', icon: FiSettings }
]

<NavigationMenu
  currentPath={pathname}
  items={customItems}
  mobileMenuOpen={mobileMenuOpen}
  onMobileMenuToggle={setMobileMenuOpen}
/>
```

## 🎨 Styling

All components use Tailwind CSS classes and support:
- **Dark/Light Mode**: Automatic theme switching
- **Responsive Design**: Mobile-first approach
- **Custom Classes**: Accept `className` props for customization
- **Consistent Spacing**: Uses standardized spacing system
- **Smooth Transitions**: CSS transitions for better UX

## 🔧 Customization

### Adding New Languages
Edit `components/LanguageSelector.tsx`:

```tsx
const languages: LanguageOption[] = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" }, // Add new language
]
```

### Custom Navigation Items
```tsx
import { FiCustom } from 'react-icons/fi'

const customNavigation = [
  {
    path: '/custom',
    label: 'Custom Page',
    icon: FiCustom
  }
]
```

### Theme Customization
Edit `utils/theme.ts` to modify theme behavior:

```tsx
export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem('theme') as Theme) || 'dark'
}
```

## 🚀 Benefits

1. **Consistency**: All pages use the same UI components
2. **Maintainability**: Changes in one place affect all pages
3. **Reusability**: Components can be used across different pages
4. **Type Safety**: Full TypeScript support with proper types
5. **Accessibility**: Built-in ARIA labels and keyboard support
6. **Performance**: Optimized with React best practices
7. **Responsive**: Works perfectly on all device sizes

## 📋 Migration Guide

To migrate existing pages to use the new components:

1. **Replace manual header code** with `<AppHeader>` or `<AppLayout>`
2. **Remove duplicate language/theme logic** - now handled by components
3. **Update imports** to use the new component exports
4. **Test responsive behavior** on mobile devices
5. **Verify theme persistence** across page navigation

Example migration:
```tsx
// Before
<div className="min-h-screen bg-gradient...">
  <header className="bg-white dark:bg-gray-800...">
    {/* Manual header code */}
  </header>
  <main>{children}</main>
</div>

// After
<AppLayout
  language={language}
  onLanguageChange={setLanguage}
  onLogout={handleLogout}
>
  {children}
</AppLayout>
``` 