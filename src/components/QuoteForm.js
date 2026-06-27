// src/components/QuoteForm.js
import React, { useState } from 'react';

function QuoteForm({ quotes, onAddQuote, onDeleteQuote }) {
  const [textInput, setTextInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Clear messages when user starts typing again
  const handleInputChange = (setter, value) => {
    setErrorMessage('');
    setSuccessMessage('');
    setter(value);
  };

  // Add Action
  const handleAdd = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!textInput.trim() || !authorInput.trim()) {
      setErrorMessage('Failure to add: Both fields are required.');
      return;
    }

    const newQuote = {
      id: `custom-${Date.now()}`, 
      quote: textInput.trim(),
      author: authorInput.trim()
    };

    onAddQuote(newQuote);
    setSuccessMessage('Entry successfully added to workspace registry!');
    setTextInput('');
    setAuthorInput('');
  };

  // Delete Action
  const handleDelete = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const cleanQuote = textInput.trim();
    const cleanAuthor = authorInput.trim();

    if (!cleanQuote || !cleanAuthor) {
      setErrorMessage('Failure to delete quote: Both fields are required.');
      return;
    }

    // Look for an exact match in the records
    const matchedQuote = quotes.find(
      (q) => q.quote === cleanQuote && q.author === cleanAuthor
    );

    if (matchedQuote) {
      onDeleteQuote(matchedQuote.id);
      setSuccessMessage('Entry successfully removed from workspace registry.');
      setTextInput('');
      setAuthorInput('');
    } else {
      setErrorMessage('Failure to delete quote');
    }
  };

  return (
    <div className="box" style={{ marginBottom: '20px', borderColor: errorMessage ? '#ff4d4d' : 'inherit' }}>
      <h3 style={{ marginBottom: '15px' }}>Manage Workspace Entries</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Quote Text:</label>
          <input 
            type="text"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
            placeholder="Type your favorite phrase..."
            value={textInput}
            onChange={(e) => handleInputChange(setTextInput, e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Author / Source:</label>
          <input 
            type="text"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
            placeholder="e.g., Spider-Man"
            value={authorInput}
            onChange={(e) => handleInputChange(setAuthorInput, e.target.value)}
          />
        </div>

        {/* Inline Feedback States */}
        {errorMessage && (
          <p style={{ color: '#ff4d4d', fontWeight: 'bold', margin: '5px 0', fontSize: '0.9rem' }}>
            ❌ {errorMessage}
          </p>
        )}
        {successMessage && (
          <p style={{ color: '#4caf50', fontWeight: 'bold', margin: '5px 0', fontSize: '0.9rem' }}>
            ✅ {successMessage}
          </p>
        )}

        {/* Action Buttons Row */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button 
            type="button" 
            className="theme-toggle-btn"
            onClick={handleAdd}
          >
            Add to Workspace
          </button>
          <button 
            type="button" 
            className="theme-toggle-btn" 
            style={{ background: '#8b0000', borderColor: '#8b0000' }}
            onClick={handleDelete}
          >
            Delete from Workspace
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuoteForm;