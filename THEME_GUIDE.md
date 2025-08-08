# 🎨 Theme System Guide

This guide explains how to use the new centralized theme system that makes it easy to change colors and styles throughout the application.

## 📁 Files Structure

```
├── app/
│   └── globals.css          # Root CSS with CSS custom properties
├── utils/
│   └── themeConfig.ts       # Theme configuration and utilities
├── components/
│   └── ThemeSwitcher.tsx    # Theme switcher component
└── THEME_GUIDE.md          # This guide
```

## 🎯 How It Works

### 1. CSS Custom Properties (Variables)

All colors, spacing, typography, and other design tokens are defined as CSS custom properties in `app/globals.css`. This allows you to change the entire application's appearance by modifying just one file.

### 2. Theme Configuration

The `utils/themeConfig.ts` file contains predefined theme objects that you can easily switch between or customize.

### 3. Theme Switcher Component

The `ThemeSwitcher` component provides a user-friendly interface to switch between different themes in real-time.

## 🚀 Quick Start

### Changing Colors Instantly

1. **Open the dashboard** and click the palette icon (🎨) in the header
2. **Select a theme** from the dropdown:
   - Professional Blue (default)
   - Corporate Green
   - Modern Purple
   - Warm Orange
   - Elegant Gray

### Customizing Themes

To create your own theme:

1. **Open `utils/themeConfig.ts`**
2. **Add a new theme object**:

```typescript
export const myCustomTheme: ThemeColors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... add all shades
    950: '#0c4a6e',
  },
  neutral: {
    // ... neutral colors
  },
  success: {
    // ... success colors
  },
  warning: {
    // ... warning colors
  },
  error: {
    // ... error colors
  },
};
```

3. **Add it to the themes registry**:

```typescript
export const themes = {
  professionalBlue: professionalBlueTheme,
  corporateGreen: corporateGreenTheme,
  myCustom: myCustomTheme, // Add your theme here
};
```

4. **Update the ThemeSwitcher component** to include your theme in the options.

## 🎨 Available CSS Variables

### Colors

```css
/* Primary Colors */
--color-primary-50 to --color-primary-950

/* Neutral Colors */
--color-neutral-50 to --color-neutral-950

/* Semantic Colors */
--color-bg-primary          /* Main background */
--color-bg-secondary        /* Secondary background */
--color-bg-card            /* Card background */
--color-text-primary       /* Main text color */
--color-text-secondary     /* Secondary text color */
--color-border-primary     /* Main border color */
--color-interactive-primary /* Primary button color */
```

### Typography

```css
/* Font Sizes */
--font-size-xs: 0.75rem    /* 12px */
--font-size-sm: 0.875rem   /* 14px */
--font-size-base: 1rem     /* 16px */
--font-size-lg: 1.125rem   /* 18px */
--font-size-xl: 1.25rem    /* 20px */
--font-size-2xl: 1.5rem    /* 24px */
--font-size-3xl: 1.875rem  /* 30px */
--font-size-4xl: 2.25rem   /* 36px */
--font-size-5xl: 3rem      /* 48px */
--font-size-6xl: 3.75rem   /* 60px */

/* Font Weights */
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

### Spacing

```css
/* Spacing Scale (based on 4px unit) */
--spacing-0: 0
--spacing-1: 4px
--spacing-2: 8px
--spacing-3: 12px
--spacing-4: 16px
--spacing-5: 20px
--spacing-6: 24px
--spacing-8: 32px
--spacing-10: 40px
--spacing-12: 48px
--spacing-16: 64px
--spacing-20: 80px
--spacing-24: 96px
```

### Borders & Radius

```css
/* Border Radius */
--radius-none: 0
--radius-sm: 0.125rem   /* 2px */
--radius-base: 0.25rem  /* 4px */
--radius-md: 0.375rem   /* 6px */
--radius-lg: 0.5rem     /* 8px */
--radius-xl: 0.75rem    /* 12px */
--radius-2xl: 1rem      /* 16px */
--radius-3xl: 1.5rem    /* 24px */
--radius-full: 9999px

/* Border Widths */
--border-width-0: 0
--border-width-1: 1px
--border-width-2: 2px
--border-width-4: 4px
--border-width-8: 8px
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Transitions

```css
/* Durations */
--duration-75: 75ms
--duration-100: 100ms
--duration-150: 150ms
--duration-200: 200ms
--duration-300: 300ms
--duration-500: 500ms
--duration-700: 700ms
--duration-1000: 1000ms

/* Easing Functions */
--ease-linear: linear
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

## 🛠️ Using CSS Variables in Components

### In CSS/SCSS

```css
.my-component {
  background-color: var(--color-bg-card);
  color: var(--color-text-primary);
  border: var(--border-width-1) solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-base);
  transition: all var(--duration-200) var(--ease-in-out);
}
```

### In Tailwind CSS

```jsx
<div className="bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border-[var(--color-border-primary)] rounded-[var(--radius-lg)] p-[var(--spacing-4)] shadow-[var(--shadow-base)]">
  Content
</div>
```

### In React Components

```jsx
const MyComponent = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-card)',
        color: 'var(--color-text-primary)',
        border: 'var(--border-width-1) solid var(--color-border-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-4)',
        boxShadow: 'var(--shadow-base)',
        transition: 'all var(--duration-200) var(--ease-in-out)',
      }}
    >
      Content
    </div>
  );
};
```

## 🎨 Predefined Utility Classes

The system includes utility classes for common patterns:

```css
/* Background Utilities */
.bg-primary { background-color: var(--color-bg-primary); }
.bg-secondary { background-color: var(--color-bg-secondary); }
.bg-card { background-color: var(--color-bg-card); }

/* Text Utilities */
.text-primary { color: var(--color-text-primary); }
.text-secondary { color: var(--color-text-secondary); }
.text-muted { color: var(--color-text-muted); }

/* Interactive Utilities */
.interactive-primary {
  background-color: var(--color-interactive-primary);
  color: var(--color-text-inverse);
  transition: background-color var(--duration-200) var(--ease-in-out);
}

/* Status Utilities */
.status-success { color: var(--color-status-success); }
.status-warning { color: var(--color-status-warning); }
.status-error { color: var(--color-status-error); }
```

## 🔧 Advanced Customization

### Creating a Custom Color Palette

1. **Use a color palette generator** like [Coolors](https://coolors.co/) or [Adobe Color](https://color.adobe.com/)
2. **Generate 11 shades** for each color (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
3. **Follow the naming convention** in the theme objects

### Dark Mode Support

The system automatically supports dark mode through the `[data-theme="dark"]` selector. Dark mode colors are defined in `app/globals.css`:

```css
[data-theme="dark"] {
  --color-bg-primary: var(--color-neutral-900);
  --color-bg-card: var(--color-neutral-800);
  --color-text-primary: var(--color-neutral-100);
  /* ... more dark mode overrides */
}
```

### Adding New Design Tokens

To add new design tokens:

1. **Add the variable** to `:root` in `app/globals.css`
2. **Add dark mode override** if needed
3. **Create utility classes** for easy use
4. **Update TypeScript types** in `themeConfig.ts` if applicable

## 🚀 Best Practices

### 1. Use Semantic Colors
Instead of hardcoding colors, use semantic variables:
```css
/* ❌ Don't do this */
color: #3b82f6;

/* ✅ Do this */
color: var(--color-interactive-primary);
```

### 2. Use the Spacing Scale
Maintain consistent spacing:
```css
/* ❌ Don't do this */
padding: 15px;

/* ✅ Do this */
padding: var(--spacing-4); /* 16px */
```

### 3. Use Transition Variables
Keep animations consistent:
```css
/* ❌ Don't do this */
transition: all 0.3s ease;

/* ✅ Do this */
transition: all var(--duration-300) var(--ease-in-out);
```

### 4. Test Both Themes
Always test your changes in both light and dark modes.

## 🎯 Examples

### Creating a Button Component

```jsx
const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Creating a Card Component

```jsx
const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
```

## 🔄 Theme Switching Programmatically

```typescript
import { applyTheme, getThemeColors } from '@/utils/themeConfig';

// Switch to a specific theme
applyTheme(getThemeColors('corporateGreen'));

// Store user preference
localStorage.setItem('selected-theme', 'corporateGreen');
```

## 📱 Responsive Design

The system includes responsive utilities:

```css
/* Container with responsive max-widths */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}

@media (min-width: 640px) {
  .container {
    max-width: var(--container-sm);
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }
}
/* ... more breakpoints */
```

## 🎨 Animation Utilities

Predefined animations are available:

```css
.animate-fade-in {
  animation: fadeIn var(--duration-300) var(--ease-out);
}

.animate-slide-in {
  animation: slideIn var(--duration-300) var(--ease-out);
}

.animate-scale-in {
  animation: scaleIn var(--duration-200) var(--ease-out);
}
```

## 🔍 Debugging

To debug theme issues:

1. **Check browser dev tools** - inspect CSS custom properties
2. **Verify theme application** - ensure `applyTheme()` is called
3. **Check localStorage** - verify theme preference is saved
4. **Test in different browsers** - ensure cross-browser compatibility

## 📚 Additional Resources

- [CSS Custom Properties MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Tailwind CSS Custom Properties](https://tailwindcss.com/docs/customizing-colors#using-css-variables)
- [Design Tokens](https://www.designtokens.org/)

---

This theme system provides a powerful, flexible foundation for maintaining consistent design across your application while making it easy to customize and extend.

