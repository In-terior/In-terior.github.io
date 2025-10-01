# Luxora Interiors

## Overview

Luxora Interiors is a premium interior design company website built with React, TypeScript, and Vite. The application showcases the company's portfolio, services (both interior design and developer services), and provides client interaction capabilities through contact forms and authentication. The site features a modern, responsive design system built with shadcn/ui components and Tailwind CSS, with a focus on elegant visuals and smooth user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **React Router** for client-side routing with dedicated pages for Home, Services, Portfolio, Developer Services, About, Contact, and Login
- **SPA architecture** with catch-all 404 handling for undefined routes

### UI Component System
- **shadcn/ui** as the primary component library, providing 40+ pre-built accessible components built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens defined in CSS variables
- **Custom design system** with defined color palettes (primary: dark blue, secondary: gold/amber), gradients, shadows, and transitions
- **Dark mode support** via next-themes package
- **Responsive design** with mobile-first approach and breakpoint-based layouts

### State Management & Data Fetching
- **TanStack Query (React Query)** for server state management, caching, and data synchronization
- **React Hook Form** with Zod resolvers for form validation and state management
- **Local component state** using React hooks for UI interactions

### Authentication & Backend
- **Supabase** as the backend-as-a-service platform
  - Authentication with email/password, supporting login and signup flows
  - Session management with localStorage persistence and automatic token refresh
  - Auth state listener for real-time authentication updates
- **Type-safe database client** generated from Supabase schema

### Styling Architecture
- **CSS custom properties** for theming (HSL color format for all colors)
- **Design tokens** include custom gradients, shadows, and transitions for consistent visual language
- **Component variants** using class-variance-authority for dynamic styling
- **Accessibility-first** approach with ARIA attributes and keyboard navigation support

### Build & Development Tools
- **TypeScript** with relaxed compiler settings (strict mode disabled) for gradual type adoption
- **ESLint** with React-specific rules and TypeScript support
- **PostCSS** with Tailwind and Autoprefixer plugins
- **Path aliases** configured for clean imports (@/ points to src/)

### SEO & Marketing
- **Google AdSense** integration in index.html
- **Meta tags** for Open Graph and Twitter Cards
- **robots.txt** configured for search engine crawlers
- **ads.txt** for advertising verification

### Routing Strategy
The application uses a catch-all route pattern where:
- All defined routes are listed before the wildcard "*" route
- The NotFound component handles 404 errors and logs attempted paths
- Custom routes must be added above the catch-all to prevent 404 capture

### Asset Management
- Static assets stored in public directory (robots.txt, ads.txt)
- Images imported directly in components for optimal bundling
- Portfolio images referenced with meaningful filenames (hero-interior.jpg, portfolio-1/2/3.jpg)

## External Dependencies

### Core Libraries
- **@supabase/supabase-js** (v2.58.0) - Backend services, authentication, and database client
- **@tanstack/react-query** (v5.83.0) - Server state management and data fetching
- **react-router-dom** (v6.x) - Client-side routing
- **react-hook-form** (via @hookform/resolvers v3.10.0) - Form state management

### UI Component Libraries
- **@radix-ui/* packages** - Headless UI primitives for all interactive components (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, navigation-menu, popover, select, tabs, toast, tooltip, etc.)
- **lucide-react** (v0.462.0) - Icon library for consistent iconography
- **next-themes** (v0.3.0) - Theme switching functionality
- **embla-carousel-react** (v8.6.0) - Carousel/slider functionality
- **cmdk** (v1.1.1) - Command palette component
- **sonner** - Toast notification system (alternative to Radix toast)

### Utility Libraries
- **class-variance-authority** (v0.7.1) - Type-safe component variants
- **clsx** (v2.1.1) & **tailwind-merge** - Conditional className utilities
- **date-fns** (v3.6.0) - Date formatting and manipulation
- **input-otp** (v1.4.2) - OTP input component

### Development Tools
- **Vite** with React SWC plugin for fast builds
- **TypeScript** (v5.x) with ES2020 target
- **Tailwind CSS** (v3.x) with custom configuration
- **lovable-tagger** - Development-only component tagging plugin

### Third-Party Services
- **Google AdSense** (ca-pub-7114523122612856) - Advertising platform
- **Lovable CDN** - OpenGraph image hosting

### Build Configuration
- Development server runs on port 5000 with 0.0.0.0 host binding
- HMR client configured for port 443 (production proxy setup)
- Separate build modes for development and production