import React from 'react';

function CodeSection({ code, onCodeLanguageChange }) {
  const handleLanguageChange = (e) => {
    onCodeLanguageChange(e.target.value);
  };

  return (
    <div>
      <select id='code-select' onChange={handleLanguageChange}>
        <option value='JavaScript'>JavaScript</option>
        <option value='Python'>Python</option>
        <option value='PHP'>PHP</option>
        <option value='Lua'>Lua</option>
        <option value='Dart'>Dart</option>
      </select>
      <select id='language-select'>
        <option value='id'>Bahasa Indonesia</option>
        <option value='en'>English</option>
      </select>
      <pre>{code}</pre>
    </div>
  );
}

export default CodeSection;
