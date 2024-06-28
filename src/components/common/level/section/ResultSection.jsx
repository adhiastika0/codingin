'use client';

import { executeJavaScript } from '@/vendor/JS-Interpreter-master/demos/node';
import { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import github from 'react-syntax-highlighter/dist/cjs/styles/hljs/github';


function ResultSection({ style, generatedCode, setResult, result }) {
  useEffect(() => {
    if (!generatedCode) {
      setResult('');
      return;
    }

    executeJavaScript(generatedCode[1], (value) => {
      setResult(value);
    });
  }, [generatedCode, setResult]);

  return (
    <SyntaxHighlighter
      language="javascript"
      style={github}
      showLineNumbers={true}
      customStyle={{ margin: '0' }}
    >
      {result}
    </SyntaxHighlighter>
  );
}

export default ResultSection;
