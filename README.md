# MediTrack - Smart Health Companion for Families

A modern, user-friendly web application designed to help families manage their health effectively. MediTrack enables users to track medications, store prescriptions, maintain health notes, and access AI-powered health insights—all in one secure platform.

## 🎯 Features

- **Medicine Reminders** - Set personalized medication schedules with smart notifications. Never miss a dose with customizable reminders that adapt to your routine.
- **Prescription Uploads** - Digitally store and organize all your prescriptions. Easy access to medication history, dosage information, and doctor's notes.
- **Health Notes** - Keep track of symptoms, doctor visits, and health observations. Maintain a comprehensive health journal for better care coordination.
- **Emergency Access** - Secure access to critical health information during emergencies with unique identifiers for emergency responders.
- **Responsive Design** - Beautiful, intuitive interface that works seamlessly across desktop, tablet, and mobile devices.

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.9.6
- **Styling**: Tailwind CSS 4.1.17 with Vite integration
- **Graphics**: OGL 1.0.11 for animated threaded backgrounds
- **Development**: ESLint for code quality

## 📋 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MediTrackWeb
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality and ESLint rules:
```bash
npm run lint
```

## 📁 Project Structure

```
MediTrackWeb/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Hero.jsx         # Hero section with background
│   │   ├── Navigation.jsx   # Top navigation bar
│   │   └── Threads.jsx      # Animated threaded background
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home/landing page
│   │   ├── Features.jsx    # Features showcase
│   │   ├── About.jsx       # About page
│   │   └── emergency.jsx   # Emergency access page
│   ├── App.jsx             # Main application component
│   ├── App.css             # App-level styles
│   ├── index.css           # Global styles
│   ├── main.jsx            # Application entry point
│   └── assets/             # Static assets
├── public/                 # Public files
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration (if exists)
├── package.json            # Project dependencies
├── index.html              # HTML template
└── README.md               # This file
```

## 🗺️ Routes

- `/` - Home page with hero section and features overview
- `/features` - Detailed features page
- `/about` - About the application
- `/emergency/:uid/:accessId` - Emergency access to health information

## 🎨 Design Features

- **Dark Theme** - Modern dark interface with accent colors
- **Animated Background** - Interactive threaded animations on the hero section
- **Glassmorphism** - Frosted glass effect with backdrop blur for modern aesthetics
- **Responsive Grid** - Adaptive layouts that work on all screen sizes
- **Gradient Overlays** - Smooth gradient transitions for visual depth

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4.1.17 with the Vite plugin for optimal performance.

### ESLint
ESLint is configured to enforce React best practices and hooks conventions.

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Client-side routing
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/vite` - Tailwind integration with Vite
- `ogl` - WebGL graphics library

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` - Code linting
- `eslint-plugin-react-hooks` - ESLint rules for React hooks
- `eslint-plugin-react-refresh` - React Fast Refresh support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a new branch for your feature
2. Make your changes
3. Run linting to ensure code quality
4. Submit a pull request

## 📄 License

This project is provided as-is. Please check the repository for specific license information.

## 📧 Support

For questions or support, please contact the development team or open an issue on the repository.
