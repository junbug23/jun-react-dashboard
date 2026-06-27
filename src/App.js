import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutView from './components/AboutView';
import QuoteForm from './components/QuoteForm';
import ExternalQuotes from './components/ExternalQuotes'; 
import './App.css';

function App() {
  const [view, setView] = useState('dashboard'); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [quotes, setQuotes] = useState(() => {
    const savedQuotes = localStorage.getItem('workspace_quotes');
    if (savedQuotes) {
      return JSON.parse(savedQuotes);
    } else {
      return [
        { id: 'local-1', quote: "With Great Power Comes Great Responsibility", author: "Spider-Man" },
        { id: 'local-2', quote: "Have I not commanded you, be strong and courageous...", author: "Joshua 1:9" },
        { id: 'local-3', quote: "In brightest day, in blackest night, No evil shall escape my sight...", author: "Green Lantern" }
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem('workspace_quotes', JSON.stringify(quotes));
  }, [quotes]);

  const handleAddQuote = (newQuote) => {
    setQuotes([newQuote, ...quotes]);
  };

  const handleDeleteQuote = (targetId) => {
    setQuotes(quotes.filter((q) => q.id !== targetId));
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "classic-brown-theme"}>
      <Header 
        view={view} 
        setView={setView} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '10px' }}>
        {view === 'dashboard' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div className="box" style={{ flex: 1, minWidth: '250px' }}>
                <h3>Workspace Status Console</h3>
                <p>Current Navigation Mode Flag: <strong>{view}</strong></p>
                <p>Active Local Array Count: <strong>{quotes.length} items loaded</strong></p>
              </div>
              <div style={{ flex: 3, minWidth: '300px' }}>
                {/* Merged Form Component handling all behaviors */}
                <QuoteForm 
                  quotes={quotes} 
                  onAddQuote={handleAddQuote} 
                  onDeleteQuote={handleDeleteQuote} 
                />
              </div>
            </div>

            <ExternalQuotes localQuotes={quotes} />
            
          </div>
        ) : (
          <AboutView />
        )}
      </main>
    </div>
  );
}

export default App;