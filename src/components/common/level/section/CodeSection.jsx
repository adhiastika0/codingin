import React from 'react';

function CodeSection({ code }) {
  return (
    <div>
      <select id='generateDropdown' onchange='regenerate()'>
        <option value='javascript'>JavaScript</option>
        <option value='python'>Python</option>
        <option value='php'>PHP</option>
        <option value='lua'>Lua</option>
        <option value='dart'>Dart</option>
      </select>
      <select id='languageDropdown' onchange='languageChange()'>
        <option value='id'>Bahasa Indonesia</option>
        <option value='en'>English</option>
      </select>
      <pre>{code}</pre>
    </div>
  );
}

export default CodeSection;
