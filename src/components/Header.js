import React from 'react';

function Header({ view, setView, isDarkMode, setIsDarkMode }) {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px', 
      borderBottom: '1px solid var(--border-color, #fff)' 
    }}>
      <h1 style={{ margin: 0, fontWeight: 'bold' }}>QuoteFinder</h1>
      
      <nav style={{ display: 'flex', gap: '10px' }}>
        <button 
          className={view === 'dashboard' ? 'active-btn' : ''} 
          onClick={() => setView('dashboard')}
        >
          Workspace
        </button>
        <button 
          className={view === 'about' ? 'active-btn' : ''} 
          onClick={() => setView('about')}
        >
          About Me
        </button>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Switch Theme
        </button>
      </nav>
    </header>
  );
}

export default Header;