# 🚀 BizManager - Micronegócio Management System

A modern, full-stack web application designed to help small businesses manage appointments, user profiles, and business operations efficiently. Built with cutting-edge technologies and best practices for scalability and maintainability.

This project is disponible on->
https://projeto-micronegocio.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-2.53.0-3ECF8E?style=for-the-badge&logo=supabase)
![Docker](https://img.shields.io/badge/Docker-22.16.0-2496ED?style=for-the-badge&logo=docker)

## ✨ Features

### 🔐 **Authentication & Security**
- **Supabase Authentication** with email/password login
- **Session management** with secure middleware
- **Protected routes** with automatic redirects
- **Email validation** and confirmation status tracking

### 🎨 **Modern UI/UX**
- **Fully responsive design** that works on all devices
- **Dark/Light theme toggle** with persistent preferences
- **Multi-language support** (Portuguese, English, Spanish, French)
- **Beautiful gradient backgrounds** and modern card layouts
- **Loading states** and smooth transitions

### 📱 **Core Functionality**
- **Dashboard** with overview statistics and quick actions
- **Appointment management** system with booking, rescheduling, and cancellation
- **User profile management** with account details and settings
- **Real-time data** with Supabase integration

### 🏗️ **Technical Excellence**
- **Component-based architecture** with reusable UI components
- **TypeScript** for type safety and better development experience
- **Next.js 15** with App Router for optimal performance
- **Tailwind CSS** for utility-first styling
- **ESLint** configuration for code quality
- **Docker** containerization for easy deployment

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons & React Icons** - Beautiful icon libraries

### **Backend & Database**
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Supabase Auth** - Authentication and user management
- **Supabase SSR** - Server-side rendering support

### **Development & Deployment**
- **Docker** - Containerization for consistent environments
- **Docker Compose** - Multi-container orchestration
- **ESLint** - Code linting and quality assurance
- **Vercel Speed Insights** - Performance monitoring

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (recommended: 22.16.0)
- **npm** or **yarn** package manager
- **Docker** and **Docker Compose** (for containerized deployment)
- **Supabase account** for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jpedrocaceres/Projeto_micronegocio.git
   cd Projeto_micronegocio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **For development with hot reload**
   ```bash
   docker-compose -f compose.dev.yaml up --build
   ```

## 📁 Project Structure

```
Projeto_micronegocio/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── appointments/      # Appointment management
│   ├── profile/          # User profile
│   └── layout.tsx        # Root layout
├── components/            # Reusable UI components
│   ├── AppLayout.tsx     # Main layout component
│   ├── ThemeProvider.tsx # Theme context provider
│   └── index.ts          # Component exports
├── utils/                 # Utility functions
│   └── supabase/         # Supabase client configuration
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── compose.yaml          # Docker Compose setup
└── middleware.ts         # Next.js middleware
```

## 🎯 Why This Project Matters in My Portfolio

As an aspiring developer passionate about learning and building impactful solutions, this project represents my commitment to:

### **Technical Growth**
- **Modern Stack Mastery**: Demonstrates proficiency with cutting-edge technologies like Next.js 15, React 19, and TypeScript
- **Full-Stack Development**: Shows ability to work across frontend, backend, and database layers
- **Best Practices**: Implements clean code principles, component reusability, and maintainable architecture

### **Professional Mindset**
- **User-Centric Design**: Prioritizes user experience with responsive design and accessibility
- **Scalable Architecture**: Built with growth in mind using industry-standard patterns
- **Production-Ready**: Includes Docker containerization, environment management, and deployment configurations

### **Continuous Learning**
- **Multi-Language Support**: Shows adaptability and internationalization skills
- **Theme System**: Demonstrates understanding of user preferences and customization
- **Security Focus**: Implements proper authentication and session management

This project showcases my ability to build real-world applications that solve practical business problems while maintaining high code quality and user experience standards. It reflects my dedication to staying current with technology trends and my eagerness to contribute meaningfully to professional development teams.

## 🤝 Contributing

I welcome contributions and feedback! This project is part of my learning journey, and I'm always looking to improve and expand my skills.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [@jpedrocaceres](https://github.com/jpedrocaceres)
- **Project**: [BizManager Repository](https://github.com/jpedrocaceres/Projeto_micronegocio)
- **Linkedin**: [@jpedrocaceres] (https://www.linkedin.com/in/dev-jpcaceres/)
---
