'use client';

import { executeJavaScript } from '@/vendor/JS-Interpreter-master/demos/node';
import { useEffect } from 'react';

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

  return <pre className={style}>{result}</pre>;
}

export default ResultSection;
