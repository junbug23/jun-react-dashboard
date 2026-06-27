// src/components/DeleteForm.js
import React, { useState } from 'react';

function DeleteForm({ quotes, onDeleteQuote }) {
  const [textInput, setTextInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const cleanQuote = textInput.trim();
    const cleanAuthor = authorInput.trim();

    if (!cleanQuote || !cleanAuthor) {
      setErrorMessage('Failure to delete quote: Both fields are required.');
      return;
    }

    // Look for an EXACT match in our local quotes array
    const matchedQuote = quotes.find(
      (q) => q.quote === cleanQuote && q.author === cleanAuthor
    );

    if (matchedQuote) {
      onDeleteQuote(matchedQuote.id);
      setSuccessMessage('Entry successfully removed from workspace registry.');
      setTextInput('');
      setAuthorInput('');
    } else {
      // Custom requirement: display explicit failure if match is not perfect
      setErrorMessage('Failure to delete quote: No exact match found for text and author.');
    }
  };

  return (
    <div className="box" style={{ marginBottom: '20px', borderColor: errorMessage ? '#ff4d4d' : 'inherit' }}>
      <h3 style={{ marginBottom: '15px', color: errorMessage ? '#ff4d4d' : 'inherit' }}>
        Remove Workspace Entry
      </h3>
      
      <form onSubmit={handleDeleteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Exact Quote Text:</label>
          <input 
            type="text"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
            placeholder="Must match casing and punctuation..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Exact Author / Source:</label>
          <input 
            type="text"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
            placeholder="e.g., Spider-Man"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
          />
        </div>

        {errorMessage && (
          <p style={{ color: '#ff4d4d', fontWeight: 'bold', margin: '5px 0 0 0', fontSize: '0.9rem' }}>
            ❌ {errorMessage}
          </p>
        )}

        {successMessage && (
          <p style={{ color: '#4caf50', fontWeight: 'bold', margin: '5px 0 0 0', fontSize: '0.9rem' }}>
            ✅ {successMessage}
          </p>
        )}

        <button 
          type="submit" 
          className="theme-toggle-btn" 
          style={{ margin: '10px 0 0 0', alignSelf: 'flex-start', background: '#8b0000' }}
        >
          Verify & Delete
        </button>
      </form>
    </div>
  );
}

export default DeleteForm;