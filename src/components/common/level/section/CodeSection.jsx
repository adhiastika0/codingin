import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import github from 'react-syntax-highlighter/dist/cjs/styles/hljs/github';

function CodeSection({ selectedCodeLanguage, generatedCode, style, setSelectedCodeLanguage }) {
  const handleSelectedCodeLanguage = (e) => {
    setSelectedCodeLanguage(e.target.value);
  };

  return (
    <div className={`size-full ${style} gap-8 overflow-auto`}>
      <select title='code-select' onChange={handleSelectedCodeLanguage}>
        <option value='javascript'>JavaScript</option>
        <option value='python'>Python</option>
        <option value='php'>PHP</option>
        <option value='lua'>Lua</option>
        <option value='dart'>Dart</option>
      </select>
      <SyntaxHighlighter
        language={selectedCodeLanguage}
        style={github}
        showLineNumbers={true}
        customStyle={{ margin: '0' }}
      >
        {generatedCode[0]}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSection;
