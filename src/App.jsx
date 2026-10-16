
import { useState, useEffect } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Cursor from './Components/Cursor';
import Reviews from './Components/Reviews';

import './App.css';

// Standard sun icon
function SunIcon() {
  return (
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.42 1.42" />
      <path d="m17.65 17.65 1.42 1.42" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.35 17.65-1.42 1.42" />
      <path d="m19.07 4.93-1.42 1.42" />
    </svg>
  );
}

// Standard moon icon
function MoonIcon() {
   <Cursor />
  return (
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
    </svg>
  );
}

export default function App() {
  // Load the user's previously selected theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply the theme and remember the preference
  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  // Switch between light and dark mode
  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    
    <div className="app-root">
      {/* Dark Mode / Light Mode Toggle */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          darkMode ? 'Switch to light mode' : 'Switch to dark mode'
        }
        aria-pressed={darkMode}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
        

        <span className="theme-toggle-label">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>

      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contacts />
      <Footer />
      <Cursor />
    </div>
  );
}
