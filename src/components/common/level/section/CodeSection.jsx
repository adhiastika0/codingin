import React from 'react';

function CodeSection({ generatedCode, style, setSelectedCodeLanguage }) {
  const handleSelectedCodeLanguage = (e) => {
    setSelectedCodeLanguage(e.target.value);
  };

  return (
    <div className={`size-full ${style} gap-8 overflow-auto`}>
      <select title='code-select' onChange={handleSelectedCodeLanguage}>
        <option value='JavaScript'>JavaScript</option>
        <option value='Python'>Python</option>
        <option value='PHP'>PHP</option>
        <option value='Lua'>Lua</option>
        <option value='Dart'>Dart</option>
      </select>
      <pre>{generatedCode[0]}</pre>
    </div>
  );
}

export default CodeSection;
