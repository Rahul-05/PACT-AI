# PACT + AI Dashboard

A modern web dashboard application for educational tools and AI-powered lesson planning.

## Project Status

**Current Phase:** Initial Setup & Foundation Components  

### Completed ✅
- Project initialization with React + Vite
- Tailwind CSS v3 configuration
- Global design system with CSS variables
- Sidebar navigation component
- Basic routing structure (React Router v6)
- Authentication pages (Login/Signup with mock data)
- Layout wrapper component
- State management setup (Zustand)
- Protected routes implementation

### In Progress ��
- Dashboard main content area
- Feature cards grid

### Planned 📋
- Dashboard welcome section
- AI input component
- Text Suitability tool
- Text Adapter tool
- Organize tool
- Gist Statements tool
- Comprehension Canopy tool
- Rich text editor
- Backend integration (AWS + OpenAI API)

---

## Tech Stack

### Core Framework
- **React 18** - UI library
- **Vite** - Build tool and dev server

### Styling
- **Tailwind CSS v3** - Utility-first CSS framework with custom design system
- **CSS Variables** - Design system tokens
- **Custom CSS** - Component-specific styles and gradient utilities

### Routing & Navigation
- **React Router v6** - Client-side routing

### State Management
- **Zustand** - Lightweight state management

### Icons
- **Lucide React** - Icon library

### Future Integrations
- AWS backend (planned)
- OpenAI API (planned)
- Recharts for data visualization (when needed)

---

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

---

## Installation

Clone the repository and install dependencies.

---

## Running the Project

Start the development server on `http://localhost:3000`

---

## Project Structure
dashboard-app/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons
│   ├── components/     # React components
│   │   ├── auth/      # Authentication components
│   │   ├── common/    # Reusable UI components
│   │   ├── layout/    # Layout components (Sidebar, Layout)
│   │   └── dashboard/ # Dashboard-specific components
│   ├── pages/         # Page components
│   │   ├── Auth/      # Login, Signup
│   │   ├── Dashboard/ # Dashboard page
│   │   └── [other pages]
│   ├── store/         # Zustand stores
│   ├── utils/         # Helper functions, API placeholders
│   ├── styles/        # Global styles and design system
│   ├── App.jsx        # Root component
│   ├── main.jsx       # Entry point
│   └── router.jsx     # Route configuration
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md

---

## Design System

The application uses a comprehensive design system with:

- **Color Palette:** Primary, secondary, text colors, borders, support colors, brand colors, and 6 themed shade variations
- **Typography:** Inter font family with defined sizes (hero, title, secondary, support)
- **Spacing:** Consistent padding and gap values throughout
- **Components:** Reusable styled components following design specifications

All styles use CSS variables defined in `src/styles/index.css` for easy maintenance and theming.

---

## Component Architecture

### Sidebar Component
Fixed-width navigation sidebar with:
- Logo section
- Navigation items (Dashboard, Sample Lessons, My Lessons, Classrooms)
- Support and Logout options
- User profile card

### Layout Component
Wrapper that includes sidebar and main content area for consistent page structure.

### Page Components
Each route has a dedicated page component with proper layout integration.

---

## Routing

Current routes:
- `/` and `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Main dashboard (protected)
- `/sample-lessons` - Sample lessons page (protected)
- `/my-lessons` - My lessons page (protected)
- `/classrooms` - Classrooms page (protected)
- `/support` - Support page (protected)

Protected routes redirect to login if user is not authenticated.

---

## Current Features

### Authentication (Mock)
- Login and signup functionality with mock data
- User session management via Zustand
- Protected routes that require authentication

### Navigation
- Sidebar with active state highlighting
- Hover animations and transitions
- Click navigation between pages

### Responsive Design
- Optimized for 13-16 inch laptop screens
- Fixed measurements in pixels
- Mobile version planned for future

---

## Scripts

Standard npm scripts for development, building, and preview.

---

## Next Steps

1. Build dashboard main content components
2. Implement AI input interface
3. Create feature tool cards
4. Add remaining page content
5. Integrate with AWS backend
6. Connect OpenAI API functionality

---

## Notes

- All measurements use pixel values for precise design matching
- No inline styles - everything uses design system classes
- Icons sourced from Lucide React library
- Backend integration is planned but not yet implemented
- Authentication currently uses mock functions
