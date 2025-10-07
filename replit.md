# Infinite Imagination Guide - Replit Configuration

## Overview

Infinite Imagination Guide is a spiritual manifestation web application that combines Neville Goddard's visualization techniques (SATS - State Akin To Sleep) with Florence Scovel Shinn's affirmation practices. The app generates personalized spiritual content using AI and guides users through 30-day practice programs to cement new beliefs into their subconscious mind.

**Core Purpose**: Help users manifest their desires through AI-generated visualizations, affirmations, and action steps based on timeless New Thought spiritual teachings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter (lightweight React router) for client-side navigation with three main routes:
- Home page (`/`) - Main landing with input form
- Results page (`/results/:id`) - Displays generated manifestation content
- 30-Day Program page (`/thirty-day`) - Progressive practice calendar

**UI Component System**: Radix UI primitives with custom shadcn/ui components styled using Tailwind CSS. Design follows a spiritual wellness aesthetic with purple/lavender color scheme (documented in `design_guidelines.md`).

**State Management**: 
- React Query (TanStack Query) for server state and API calls
- Local component state with React hooks for UI interactions
- Theme state managed via Context API (light/dark mode)

**Styling Strategy**: Tailwind CSS with custom design tokens defined in `tailwind.config.ts`. Color system uses HSL values with CSS variables for theming. Custom elevation classes (`hover-elevate`, `active-elevate-2`) for consistent interaction feedback.

**Typography**: Multi-font system using Google Fonts:
- Cormorant Garamond (serif) for headings
- Inter (sans-serif) for body text
- Crimson Text (serif) for special quotes/affirmations

### Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js.

**API Design**: RESTful endpoints with JSON request/response format (see API Endpoints section below for full list)

**AI Integration**: OpenAI GPT-5-nano API for generating personalized spiritual content (~10-15 second generation time). System prompt instructs the AI to act as a spiritual guide inspired by Florence Scovel Shinn's teachings, creating:
- 2 Shinn-inspired affirmations (free tier)
- 1 practical action step (free tier)
- SATS visualization scripts (premium only - Neville Goddard style)
- 30-day practice programs (premium only - progressive manifestation plan)

**Development Server**: Custom Vite middleware setup in development mode for HMR (Hot Module Replacement). Production mode serves static built files.

**Request Logging**: Custom Express middleware logs all API requests with duration, path, method, status code, and truncated response body.

### Data Storage

**Current Implementation**: PostgreSQL database with Drizzle ORM (`DatabaseStorage` class in `server/storage.ts`).

**Schema Definition**: Drizzle ORM schema defined in `shared/schema.ts`:
- `users` table: id, username, passwordHash, isPremium, createdAt
- `manifestations` table: id, sessionKey, userInput, visualization, affirmations (text array), actions (text array), thirtyDayPlan, createdAt
- `usage_sessions` table: id, userId, sessionKey, usageDate, promptCount (with unique constraint on sessionKey+usageDate for atomic increments)
- `premium_sessions` table: id, sessionKey, expiresAt, createdAt (tracks active premium subscriptions)

**Database Configuration**: PostgreSQL configured via Drizzle Kit (`drizzle.config.ts`) with Neon serverless driver. Schema uses `gen_random_uuid()` for primary keys.

**Migration Strategy**: Manual SQL execution for schema updates. Schema uses unique constraints for concurrency-safe operations.

**Validation**: Zod schemas for runtime validation of API inputs, generated from Drizzle schema using `drizzle-zod`.

### Freemium & Paywall System

**Free Tier**: 
- 3 prompts per day per session (tracked via cookies)
- Session-based tracking resets daily at midnight UTC
- Basic affirmations and action steps included

**Premium Tier**:
- Unlimited daily prompts
- Access to SATS visualization generation (Neville Goddard style)
- Access to 30-day practice program generation
- Session-based premium access (can be upgraded via payment)

**Usage Tracking**:
- Atomic increment with limit enforcement to prevent race conditions
- Unique constraint on (sessionKey, usageDate) ensures accurate counting
- Premium sessions bypass daily limits
- Cookie-based session management (httpOnly, secure in production)

**Security Features**:
- Password hashing with passwordHash field (ready for bcrypt/Argon2id)
- Secure cookies in production (httpOnly, secure flag)
- Premium feature gating returns 402 status for non-premium users
- Atomic database operations prevent concurrent request exploits

### API Endpoints

**Public Endpoints**:
- `POST /api/manifestations` - Creates manifestation (enforces daily limit)
- `GET /api/manifestations/:id` - Retrieves manifestation with usage info

**Premium Endpoints** (require premium session):
- `POST /api/manifestations/:id/visualization` - Generates SATS visualization
- `POST /api/manifestations/:id/thirty-day-plan` - Generates 30-day practice program

### Third-Party Integrations

**OpenAI API** (GPT-5):
- Purpose: Generate personalized spiritual content
- Integration point: `server/routes.ts` 
- API key: Environment variable `OPENAI_API_KEY`
- Model: gpt-5 (specified as newest model as of August 2025)

**Neon Database**:
- Purpose: Serverless PostgreSQL hosting
- Driver: `@neondatabase/serverless`
- Connection: Environment variable `DATABASE_URL`

**Design System**:
- Radix UI: Accessible component primitives
- shadcn/ui: Pre-built component library
- Extensive use of Radix primitives for dialogs, popovers, dropdowns, etc.

### Build and Deployment

**Development**: `npm run dev` runs tsx (TypeScript executor) directly on server code with Vite dev server middleware.

**Production Build**:
1. Vite builds client to `dist/public`
2. esbuild bundles server to `dist/index.js` (ESM format, external packages)
3. `npm start` runs compiled server with `NODE_ENV=production`

**Type Checking**: TypeScript configured with strict mode, ESNext modules, and path aliases (`@/*` for client, `@shared/*` for shared code).

## External Dependencies

### Core Runtime Dependencies
- **Express.js**: Web server framework
- **React 18**: UI library with TypeScript
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Zod**: Runtime schema validation
- **React Query**: Server state management and data fetching
- **Wouter**: Lightweight React routing
- **OpenAI SDK**: AI content generation

### UI Component Libraries
- **Radix UI**: Headless accessible component primitives (20+ components imported)
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant styling
- **cmdk**: Command palette component

### Development Tools
- **Vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production server build
- **PostCSS**: CSS processing with Autoprefixer

### Database & Session
- **@neondatabase/serverless**: PostgreSQL client for Neon
- **connect-pg-simple**: PostgreSQL session store for Express

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **react-hook-form**: Form state management
- **embla-carousel-react**: Carousel component

### Replit-Specific Plugins
- Runtime error overlay
- Cartographer (development only)
- Dev banner (development only)