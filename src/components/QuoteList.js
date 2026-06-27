// src/components/QuoteList.js
import React from 'react';

function QuoteList({ quotes }) {
  return (
    <div className="quote-list-container">
      <h3 style={{ marginBottom: '15px' }}>Dynamic Quote Registry</h3>
      
      {/* Requirement: Render a list from an internal state array dynamically using .map() */}
      {quotes.map((q) => (
        <div key={q.id} className="quote-text">
          <p>"{q.quote}"</p>
          <strong>- {q.author}</strong>
        </div>
      ))}
    </div>
  );
}

export default QuoteList;