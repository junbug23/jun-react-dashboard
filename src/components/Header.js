// src/components/Header.js
import React from 'react';

function Header({ view, setView, isDarkMode, setIsDarkMode }) {
  return (
    <header className="site-header">
      <h2 className="site-title">Jun Brooks | Dashboard</h2>
      <nav className="nav-menu">
        <button 
          className="nav-btn" 
          onClick={() => setView('dashboard')}
          style={{ textDecoration: view === 'dashboard' ? 'underline' : 'none' }}
        >
          Workspace
        </button>
        <button 
          className="nav-btn" 
          onClick={() => setView('about')}
          style={{ textDecoration: view === 'about' ? 'underline' : 'none' }}
        >
          About Me
        </button>
        <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          Switch Theme
        </button>
      </nav>
    </header>
  );
}

export default Header;