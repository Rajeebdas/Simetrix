# Simetric Engineering Website

## Overview

Simetric is a modern engineering consultancy website built with React, TypeScript, and Express.js. The application provides a professional platform for showcasing engineering simulation services, including FEA analysis, CAD modeling, and weight optimization. The site features a clean, responsive design with contact forms, service descriptions, case studies, and smooth animations throughout the user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack monorepo structure with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Schema**: Shared TypeScript schemas between frontend and backend
- **API**: RESTful endpoints for contact forms and quote requests

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Location**: `shared/schema.ts` - centralized schema definitions
- **Tables**: Users, contacts, quotes, blog posts, case studies, testimonials

### API Endpoints
- `POST /api/contacts` - Contact form submissions
- `POST /api/quotes` - Quote request submissions
- Additional endpoints planned for blog posts, case studies, and testimonials

### UI Components
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Forms**: Comprehensive form validation with error handling

### Analytics Integration
- **Provider**: Google Analytics 4
- **Implementation**: Custom analytics hooks for page view tracking
- **Event Tracking**: Form submissions and user interactions

## Data Flow

### Form Submissions
1. User fills out contact/quote form
2. Client-side validation using Zod schemas
3. Form data sent to Express API endpoints
4. Server validates data using shared schemas
5. Data stored in PostgreSQL database
6. Success/error response returned to client
7. User feedback via toast notifications

### Content Management
- Static content for services, industries, and company information
- Blog posts and case studies stored in database
- Testimonials managed through database with featured flags

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Environment variable `DATABASE_URL` required

### Analytics
- **Google Analytics**: Requires `VITE_GA_MEASUREMENT_ID` environment variable
- **Tracking**: Page views, form submissions, and custom events

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel functionality (if needed)

### Development Tools
- **Replit Integration**: Development banner and cartographer plugin
- **TypeScript**: Strict type checking across the entire stack
- **ESLint/Prettier**: Code quality and formatting (implied)

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migrations**: Drizzle migrations applied via `db:push` command

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `VITE_GA_MEASUREMENT_ID`: Google Analytics measurement ID
- `NODE_ENV`: Environment specification (development/production)

### Hosting Considerations
- Suitable for deployment on Replit, Vercel, Railway, or similar platforms
- Requires Node.js runtime environment
- PostgreSQL database must be provisioned separately
- Static assets served from Express in production

### Development Workflow
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build production bundle
- `npm run start`: Start production server
- `npm run db:push`: Apply database schema changes

## Recent Changes (January 2025)

### Replit Migration (January 28, 2025)
- **Environment Migration**: Successfully migrated from Replit Agent to standard Replit environment
- **Contact Button Removal**: Removed all "Contact Us" buttons from website per user request
  - Removed from header navigation (desktop)
  - Removed from mobile menu
  - Removed CTA section buttons ("Start Your Project" and "Schedule Consultation")
- **Security Enhancement**: Ensured proper client/server separation and security practices
- **Content Editing Guide**: Created comprehensive EDITING_GUIDE.md for user to modify text and images
- **Custom Image Integration**: Replaced hero section with custom engineering SVG, created IMAGE_REPLACEMENT_GUIDE.md
- **SEO Enhancement**: Added comprehensive meta tags, favicon, Open Graph and Twitter Card tags
- **Logo Integration**: Replaced text-based navbar with custom Simetric logo image
- **Page-specific SEO**: Created PageMeta component for individual page optimization

### UI/UX Improvements
- **Blog Page Removal**: Completely removed blog functionality from navigation and routing per user request
- **Button Updates**: Changed "Get Quote" buttons to "Contact Us" throughout the website
- **Enhanced Animations**: Added comprehensive smooth transitions and animations
  - Fade-in animations for section headers and content
  - Slide-in animations for hero content (left/right)
  - Hover effects with scale transforms and enhanced shadows
  - Staggered animation timing for list items and cards
  - Smooth transitions for all interactive elements

### Animation Framework
- **CSS Classes**: Added fade-in, slide-in-left, slide-in-right animation classes
- **Stagger Timing**: Implemented stagger-1 through stagger-4 delay classes
- **Interactive Effects**: Enhanced hover states with scale, rotate, and shadow transforms
- **Performance**: Used CSS cubic-bezier transitions for smooth, professional animations

### Navigation Updates
- Removed blog link from header navigation
- Updated mobile menu to use "Contact Us" instead of "Get Quote"
- Enhanced header button with improved hover animations

### Database-Free Architecture
- **Static Content**: Converted testimonials and case studies to static data files
- **Email Forms**: Replaced database-driven forms with email-based contact system
- **No Backend Dependencies**: Website now runs completely without database requirements
- **Simplified Deployment**: Easier hosting and maintenance with static content approach
- **Email Integration**: Contact forms open email client with pre-filled professional messages

The application is designed for easy deployment with minimal configuration, following modern web development best practices for performance, accessibility, and maintainability.