// src/components/ExternalQuotes.js
import React, { useState, useEffect } from 'react';

function ExternalQuotes({ localQuotes }) {
  const [apiQuotes, setApiQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('author');

  // Fetch live API data on component mount
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/quotes?limit=10');
        if (!response.ok) throw new Error('Network response failure.');
        const data = await response.json();
        setApiQuotes(data.quotes);
      } catch (err) {
        setError('Failed to pull records from the live public API.');
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  // Combine both sources safely into one master array
  const allQuotes = [...localQuotes, ...apiQuotes];

  // Search Filter: Screens both properties safely without casing or crash blocks
  const filteredQuotes = allQuotes.filter((q) => {
    const quoteText = q.quote ? q.quote.toLowerCase() : '';
    const authorText = q.author ? q.author.toLowerCase() : '';
    const cleanQuery = searchQuery.toLowerCase().trim();

    return quoteText.includes(cleanQuery) || authorText.includes(cleanQuery);
  });

  // Sorting Mechanics
  const sortedQuotes = [...filteredQuotes].sort((a, b) => {
    if (sortBy === 'author') {
      const authorA = a.author ? a.author : '';
      const authorB = b.author ? b.author : '';
      return authorA.localeCompare(authorB);
    } else {
      const lengthA = a.quote ? a.quote.length : 0;
      const lengthB = b.quote ? b.quote.length : 0;
      return lengthA - lengthB; 
    }
  });

  if (loading) return <div className="box"><p>⏳ Fetching live public API dataset...</p></div>;
  if (error) return <div className="box" style={{ borderColor: '#ff4d4d' }}><p>❌ {error}</p></div>;

  return (
    <div className="box">
      <h3>Live Global Workspace Registry</h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '15px' }}>
        Showing {sortedQuotes.length} combined entries (API + Custom Form Items)
      </p>

      {/* Control Layout Row */}
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search and filter combined registry..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, color: '#000' }}
        />
        
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', color: '#000' }}
        >
          <option value="author">Sort Alphabetically (Author)</option>
          <option value="length">Sort Numerically (Length)</option>
        </select>
      </div>

      {/* Grid Cards Container */}
      <div className="api-results-container">
        {sortedQuotes.length === 0 ? (
          <p>No matching records found.</p>
        ) : (
          sortedQuotes.map((q) => {
            // Checks for unique prefix keywords to isolate styling rules cleanly
            const isLocal = q.id && (q.id.toString().includes('local') || q.id.toString().includes('custom'));
            return (
              <div 
                key={q.id} 
                className="quote-text" 
                style={{ 
                  background: isLocal ? '#443022' : '#553c2a', 
                  borderLeft: isLocal ? '5px solid #d2b48c' : '5px solid #ccc',
                  padding: '15px',
                  borderRadius: '4px',
                  marginBottom: '10px'
                }}
              >
                <p>"{q.quote}"</p>
                <strong>- {q.author} {isLocal && <span style={{ fontSize: '0.8rem', fontStyle: 'normal', fontWeight: 'normal' }}>(Custom Entry)</span>}</strong>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ExternalQuotes;